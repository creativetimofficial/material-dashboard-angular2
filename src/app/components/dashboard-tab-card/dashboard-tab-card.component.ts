import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit, Input, QueryList, ElementRef, ChangeDetectorRef, EventEmitter, Output, ContentChildren, ViewEncapsulation, ViewChild } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DashboardTabCardHeader } from './dashboard-tab-card-header.component';
import { DashboardCardTab, MATERIAL_ADMIN_DASHBOARD_CARD } from './dashboard-card-tab.component';
export { DashboardTabCardHeader } from './dashboard-tab-card-header.component';
export { DashboardCardTab, DashboardCardTabLabel, MATERIAL_ADMIN_DASHBOARD_CARD } from './dashboard-card-tab.component';

let nextId = 0; // used to generate unique IDs for dashboard card components

/** A simple change event emitted on focus or selection changes. */
export class DashboardCardTabChangeEvent {
	constructor(public index: number, public tab: DashboardCardTab|undefined) {}
}

/* -== CARD ==- */

@Component({
	selector: 'dashboard-tab-card',
	templateUrl: './dashboard-tab-card.component.html',
	styleUrls: ['./dashboard-tab-card.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [{ provide: MATERIAL_ADMIN_DASHBOARD_CARD, useExisting: DashboardTabCardComponent }],
	host: { 'class': 'material-admin-dashboard-card', },
})
export class DashboardTabCardComponent implements OnInit {
	@ContentChildren(DashboardCardTab, {descendants: true}) _allTabs!:QueryList<DashboardCardTab>;
	@ViewChild('tabHeader') _tabHeader!:DashboardTabCardHeader;

	_tabs: QueryList<DashboardCardTab> = new QueryList<DashboardCardTab>();
	private _tabsSubscription = Subscription.EMPTY;
	private _tabLabelSubscription = Subscription.EMPTY; // Subscription to changes in the tab labels.
	/** The tab index that should be selected after the content has been checked. */
	private _indexToSelect: number | null = 0;

	private _cardId = nextId++;

	constructor(private _elementRef: ElementRef, protected _changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit(): void {}

	/* Inputs */

	@Input()
	public color: string = 'primary';

	@Input()
	public disableRipple:boolean = false;

	@Input()
	public label:string = '';

	/* Outputs */

	/** Output to enable support for two-way binding on `[(selectedIndex)]` */
	@Output() readonly selectedIndexChange: EventEmitter<number> = new EventEmitter<number>();
	/** Event emitted when the tab selection has changed. */
	@Output()
	readonly selectedTabChange: EventEmitter<DashboardCardTabChangeEvent> = new EventEmitter<DashboardCardTabChangeEvent>(true);

	/** The index of the active tab. */
	@Input()
	get selectedIndex(): number | null { return this._selectedIndex; }
	set selectedIndex(value: number | null) {
		this._indexToSelect = coerceNumberProperty(value, null);
	}
	private _selectedIndex: number | null = null;

	/* design states */

	_getTabLabelId(i: number): string { return `dashboard-card-tab-label-${this._cardId}-${i}`; }
	_getTabContentId(i: number): string { return `dashboard-card-tab-content-${this._cardId}-${i}`; }

	public get selectedTab():DashboardCardTab|undefined {
		return this._tabs.find(tab => tab.position == 0); // position gets recalculated relative to the selected tab
	}

	/* State change handlers */

	/**
	 * After the content is checked, this component knows what tabs have been defined
	 * and what the selected index should be. This is where we can know exactly what position
	 * each tab should be in according to the new selected index, and additionally we know how
	 * a new selected tab should transition in (from the left or right).
	 */
	ngAfterContentChecked() {
		// Don't clamp the `indexToSelect` immediately in the setter because it can happen that
		// the amount of tabs changes before the actual change detection runs.
		const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);

		// If there is a change in selected index, emit a change event. Should not trigger if
		// the selected index has not yet been initialized.
		if (this._selectedIndex != indexToSelect) {
			const isFirstRun = this._selectedIndex == null;

			if (!isFirstRun) {
				this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
			}

			// Changing these values after change detection has run
			// since the checked content may contain references to them.
			Promise.resolve().then(() => {
				this._tabs.forEach((tab, index) => { tab.isActive = index === indexToSelect; });
				if (!isFirstRun) this.selectedIndexChange.emit(indexToSelect);
			});
		}

		// Setup the position for each tab and optionally setup an origin on the next selected tab.
		this._tabs.forEach((tab:DashboardCardTab, index:number) => { tab.position = index - indexToSelect; });

		if (this._selectedIndex !== indexToSelect) {
			this._selectedIndex = indexToSelect;
			this._changeDetectorRef.markForCheck();
		}
	}

	ngAfterContentInit() {
		// generate _tabs from _allTabs
		this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs: QueryList<DashboardCardTab>) => {
			this._tabs.reset(tabs.filter(tab => tab.card === this));
			this._tabs.notifyOnChanges();
		});
		// monitor changes in tab labels
		this._tabLabelSubscription.unsubscribe();
		this._tabLabelSubscription = merge(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());

		this._tabsSubscription = this._tabs.changes.subscribe(() => {
			const indexToSelect = this._clampTabIndex(this._indexToSelect);
			// Maintain the previously-selected tab if a new tab is added or removed and there is no
			// explicit change that selects a different tab.
			if (indexToSelect === this._selectedIndex) {
				const tabs = this._tabs.toArray();
				for (let i = 0; i < tabs.length; i++) {
					if (tabs[i].isActive) {
						// Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
						// event, otherwise the consumer may end up in an infinite loop in some edge cases like
						// adding a tab within the `selectedIndexChange` event.
						this._indexToSelect = this._selectedIndex = i;
						break;
					}
				}
			}

			this._changeDetectorRef.markForCheck();
		});
	}

	ngOnDestroy() {
		this._tabs.destroy();
		this._tabsSubscription.unsubscribe();
		this._tabLabelSubscription.unsubscribe();
	}

	/* Event handlers */

	_handleClick(tab:DashboardCardTab, index: number) {
		if (!tab.disabled) this.selectedIndex = index;
	}

	/* Helpers */

	/** Clamps the given index to the bounds of 0 and the tabs length. */
	private _clampTabIndex(index: number | null): number {
		// Note the `|| 0`, which ensures that values like NaN can't get through
		// and which would otherwise throw the component into an infinite loop
		// (since Math.max(NaN, 0) === NaN).
		return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
	}

	private _createChangeEvent(index: number): DashboardCardTabChangeEvent {
		return new DashboardCardTabChangeEvent(index, this._tabs && this._tabs.length ? this._tabs.toArray()[index] : undefined);
	}
}

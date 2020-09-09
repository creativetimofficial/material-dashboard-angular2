import { Component, OnInit, ContentChild, ElementRef, ViewContainerRef, Inject, InjectionToken, TemplateRef, Directive, ViewChild, Input, SimpleChanges } from "@angular/core";
import { Subject } from "rxjs";
import { TemplatePortal, CdkPortal } from "@angular/cdk/portal";

/**
 * Used to provide a card to a tab without causing a circular dependency.
 */
export const MATERIAL_ADMIN_DASHBOARD_CARD = new InjectionToken<any>('MATERIAL_ADMIN_DASHBOARD_CARD');

export const MATERIAL_ADMIN_DASHBOARD_CARD_LABEL = new InjectionToken<DashboardCardTabLabel>('DashboardCardTabLabel');

/* -== TAB LABEL ==- */

/** Used to flag tab labels for use with the portal directive */
@Directive({
  selector: '[dashboardCardTabLabel]',
  providers: [{provide: MATERIAL_ADMIN_DASHBOARD_CARD_LABEL, useExisting: DashboardCardTabLabel}],
})
export class DashboardCardTabLabel extends CdkPortal { }

/* -== TAB CONTENT ==- */

export const MATERIAL_ADMIN_DASHBOARD_CARD_CONTENT = new InjectionToken<DashboardCardTabContent>('DashboardCardTabContent');

/** Decorates the `ng-template` tags and reads out the template from it. */
@Directive({
  selector: '[dashboardCardTabContent]',
  providers: [{provide: MATERIAL_ADMIN_DASHBOARD_CARD_CONTENT, useExisting: DashboardCardTabContent}],
})
export class DashboardCardTabContent {
  constructor(public template: TemplateRef<any>) { }
}

/* -== TAB ==- */

@Component({
	selector: 'dashboard-card-tab',
	templateUrl: './dashboard-card-tab.component.html',
	styles: [``],
})
export class DashboardCardTab implements OnInit {
	private _id: string | undefined;
	readonly _stateChanges = new Subject<void>(); // Emits whenever the internal state of the tab changes.

	/** tab content */
	private _contentPortal: TemplatePortal|null = null;
	get content(): TemplatePortal|null { return this._contentPortal; }

	/** Content for the tab label given by `<ng-template dashboardCardTabLabel>`. */
	@ContentChild(DashboardCardTabLabel)
	get templateLabel(): DashboardCardTabLabel { return this._templateLabel; }
	set templateLabel(value: DashboardCardTabLabel) { if (value) this._templateLabel = value; }
	protected _templateLabel!:DashboardCardTabLabel;

	constructor(private _elementRef: ElementRef, private _viewContainerRef: ViewContainerRef, @Inject(MATERIAL_ADMIN_DASHBOARD_CARD) public card:any) {
	}

	/* Inputs / Outputs */

	// Template provided in the tab content that will be used if present, used to enable lazy-loading
	@ContentChild(MATERIAL_ADMIN_DASHBOARD_CARD_CONTENT as any, {read: TemplateRef, static: true})
	_explicitContent!:TemplateRef<any>;
	// everything in the child
	@ViewChild(TemplateRef, {static: true}) _implicitContent!:TemplateRef<any>;

	@Input()
	public set id(id: string) {
		this._id = id;
	}

	public get tabId(): string | undefined {
		return this._id;
	}

	public isActive:boolean = false;
	public position:number|null = null;
	public disabled:boolean = false;

	@Input('label') textLabel: string = ''; // Plain text label for the tab, used when there is no template label.


	/** State change handlers */

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) this._stateChanges.next();
	}

	ngOnDestroy(): void {
		this._stateChanges.complete();
	}

	ngOnInit(): void {
		this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
	}
}
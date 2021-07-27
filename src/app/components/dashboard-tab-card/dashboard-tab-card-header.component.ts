/* -== CARD HEADER ==- */

import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: 'dashboard-tab-card-header',
	templateUrl: 'dashboard-tab-card-header.component.html',
	styles: [``]
})
export class DashboardTabCardHeader implements OnInit {
	ngOnInit(): void { }

	@Input()
	public selectedIndex:number = 0;

	@Input()
	public color:string|null = null;

	public get headerType(): string {
		return `card-header-${this.color}`;
	}

}

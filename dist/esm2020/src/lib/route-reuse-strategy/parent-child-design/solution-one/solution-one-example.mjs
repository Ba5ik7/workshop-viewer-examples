import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { AbstractMasterComponent } from '../abstract-master.component';
import { DetailsComponent } from '../details/details.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/portal";
function SolutionOneExample_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("click", function SolutionOneExample_ng_container_6_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const random_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.emuRouteChanges(random_r2)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const random_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Go to ", random_r2, " ");
} }
function SolutionOneExample_ng_template_7_Template(rf, ctx) { }
/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
export class SolutionOneExample extends AbstractMasterComponent {
    constructor() {
        super();
        this.displayName = 'Solution One';
    }
    _ngOnInit() {
        this.sharedDetailsPortal = new ComponentPortal(DetailsComponent);
    }
    emuRouteChanges(random) {
        console.log(random);
        // this.sharedDetailsPortal.component.routeId = random;
    }
    ngAfterViewInit() {
    }
}
SolutionOneExample.ɵfac = function SolutionOneExample_Factory(t) { return new (t || SolutionOneExample)(); };
SolutionOneExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionOneExample, selectors: [["tmdjr-solution-one"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "solution-parent"], [1, "nav"], [4, "ngFor", "ngForOf"], [3, "cdkPortalOutlet"], [1, "nav-item", 3, "click"]], template: function SolutionOneExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementStart(3, "i");
        i0.ɵɵtext(4, "Parent Test 1");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵtemplate(6, SolutionOneExample_ng_container_6_Template, 3, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SolutionOneExample_ng_template_7_Template, 0, 0, "ng-template", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.displayName, ": ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.randoms);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.sharedDetailsPortal);
    } }, dependencies: [i1.NgForOf, i2.CdkPortalOutlet], styles: [".solution-parent[_ngcontent-%COMP%]{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionOneExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" (click)=\"emuRouteChanges(random)\">\n          Go to {{random}}\n        </div>\n     </ng-container>\n  </div>\n  <!-- <shared-details [routeId]=\"routeId\" [displayName]=\"displayName\"></shared-details> -->\n  <ng-template [cdkPortalOutlet]=\"sharedDetailsPortal\"></ng-template>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7SUNBM0QsNkJBQTZDO0lBQzFDLDhCQUF3RDtJQUFsQyxrT0FBUyxlQUFBLGlDQUF1QixDQUFBLElBQUM7SUFDckQsWUFDRjtJQUFBLGlCQUFNO0lBQ1QsMEJBQWU7OztJQUZWLGVBQ0Y7SUFERSxnREFDRjs7O0FERFI7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsdUJBQXVCO0lBSTdEO1FBQWdCLEtBQUssRUFBRSxDQUFDO1FBSHhCLGdCQUFXLEdBQVcsY0FBYyxDQUFDO0lBR1osQ0FBQztJQUVqQixTQUFTO1FBQ2hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLHVEQUF1RDtJQUMxRCxDQUFDO0lBRUEsZUFBZTtJQUNmLENBQUM7O29GQWhCVSxrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ2IvQiw4QkFBNkIsU0FBQTtRQUN2QixZQUFpQjtRQUFBLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSSxFQUFBO1FBQ3pDLDhCQUFpQjtRQUNkLHFGQUllO1FBQ2xCLGlCQUFNO1FBRU4sbUZBQW1FO1FBQ3JFLGlCQUFNOztRQVZBLGVBQWlCO1FBQWpCLGdEQUFpQjtRQUVlLGVBQVU7UUFBVixxQ0FBVTtRQU9qQyxlQUF1QztRQUF2Qyx5REFBdUM7O3VGREd6QyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RNYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1tYXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50JztcblxuLyoqXG4gKiBAdGl0bGUgUm91dGVSZXVzZVN0cmF0ZWd5IC0gUGFyZW50IENoaWxkIERlc2lnbiAtIFNvbHV0aW9uIE9uZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bWRqci1zb2x1dGlvbi1vbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc29sdXRpb24tb25lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uT25lRXhhbXBsZSBleHRlbmRzIEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IHtcbiAgZGlzcGxheU5hbWU6IHN0cmluZyA9ICdTb2x1dGlvbiBPbmUnO1xuICByb3V0ZUlkITogYW55O1xuICBzaGFyZWREZXRhaWxzUG9ydGFsITogQ29tcG9uZW50UG9ydGFsPERldGFpbHNDb21wb25lbnQ+O1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuXG4gIG92ZXJyaWRlIF9uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNoYXJlZERldGFpbHNQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKERldGFpbHNDb21wb25lbnQpO1xuICB9XG5cbiAgZW11Um91dGVDaGFuZ2VzKHJhbmRvbTogbnVtYmVyKSB7XG5cdFx0Y29uc29sZS5sb2cocmFuZG9tKTtcbiAgICAvLyB0aGlzLnNoYXJlZERldGFpbHNQb3J0YWwuY29tcG9uZW50LnJvdXRlSWQgPSByYW5kb207XG5cdH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInNvbHV0aW9uLXBhcmVudFwiPlxuICA8aDI+e3tkaXNwbGF5TmFtZX19OiA8aT5QYXJlbnQgVGVzdCAxPC9pPjwvaDI+XG4gIDxkaXYgY2xhc3M9XCJuYXZcIj4gXG4gICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJhbmRvbSBvZiByYW5kb21zXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1cIiAoY2xpY2spPVwiZW11Um91dGVDaGFuZ2VzKHJhbmRvbSlcIj5cbiAgICAgICAgICBHbyB0byB7e3JhbmRvbX19XG4gICAgICAgIDwvZGl2PlxuICAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDwhLS0gPHNoYXJlZC1kZXRhaWxzIFtyb3V0ZUlkXT1cInJvdXRlSWRcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWVcIj48L3NoYXJlZC1kZXRhaWxzPiAtLT5cbiAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwic2hhcmVkRGV0YWlsc1BvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG48L2Rpdj4iXX0=
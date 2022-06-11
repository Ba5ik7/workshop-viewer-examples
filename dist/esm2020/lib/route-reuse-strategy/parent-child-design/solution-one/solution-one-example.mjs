import { Component } from '@angular/core';
import { AbstractMasterComponent } from '../abstract-master.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SolutionOneExample_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const random_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Go to ", random_r1, "");
} }
/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
export class SolutionOneExample extends AbstractMasterComponent {
    constructor() {
        super();
        this.displayName = 'Solution One';
    }
}
SolutionOneExample.ɵfac = function SolutionOneExample_Factory(t) { return new (t || SolutionOneExample)(); };
SolutionOneExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionOneExample, selectors: [["tmdjr-solution-one"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 2, consts: [[1, "solution-parent"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "nav-item"]], template: function SolutionOneExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementStart(3, "i");
        i0.ɵɵtext(4, "Parent");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵtemplate(6, SolutionOneExample_ng_container_6_Template, 3, 1, "ng-container", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.displayName, ": ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.randoms);
    } }, dependencies: [i1.NgForOf], styles: [".solution-parent[_ngcontent-%COMP%]{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionOneExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <!-- <div class=\"nav-item\" [routerLink]=\"['detail', displayName, random]\">Go to {{random}}</div> -->\n        <div class=\"nav-item\">Go to {{random}}</div>\n     </ng-container> \n  </div>\n  \n  <!-- <router-outlet></router-outlet> -->\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7SUNFbEUsNkJBQTZDO0lBRTFDLDhCQUFzQjtJQUFBLFlBQWdCO0lBQUEsaUJBQU07SUFDL0MsMEJBQWU7OztJQURVLGVBQWdCO0lBQWhCLDhDQUFnQjs7QURGOUM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsdUJBQXVCO0lBRTdEO1FBQWdCLEtBQUssRUFBRSxDQUFDO1FBRHhCLGdCQUFXLEdBQVcsY0FBYyxDQUFDO0lBQ1osQ0FBQzs7b0ZBRmYsa0JBQWtCO3FFQUFsQixrQkFBa0I7UUNYL0IsOEJBQTZCLFNBQUE7UUFDdkIsWUFBaUI7UUFBQSx5QkFBRztRQUFBLHNCQUFNO1FBQUEsaUJBQUksRUFBQTtRQUNsQyw4QkFBaUI7UUFDZCxxRkFHZTtRQUNsQixpQkFBTSxFQUFBOztRQU5GLGVBQWlCO1FBQWpCLGdEQUFpQjtRQUVlLGVBQVU7UUFBVixxQ0FBVTs7dUZEUW5DLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RNYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1tYXN0ZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBAdGl0bGUgUm91dGVSZXVzZVN0cmF0ZWd5IC0gUGFyZW50IENoaWxkIERlc2lnbiAtIFNvbHV0aW9uIE9uZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bWRqci1zb2x1dGlvbi1vbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc29sdXRpb24tb25lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uT25lRXhhbXBsZSBleHRlbmRzIEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IHtcbiAgZGlzcGxheU5hbWU6IHN0cmluZyA9ICdTb2x1dGlvbiBPbmUnO1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNvbHV0aW9uLXBhcmVudFwiPlxuICA8aDI+e3tkaXNwbGF5TmFtZX19OiA8aT5QYXJlbnQ8L2k+PC9oMj5cbiAgPGRpdiBjbGFzcz1cIm5hdlwiPiBcbiAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcmFuZG9tIG9mIHJhbmRvbXNcIj4gXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCIgW3JvdXRlckxpbmtdPVwiWydkZXRhaWwnLCBkaXNwbGF5TmFtZSwgcmFuZG9tXVwiPkdvIHRvIHt7cmFuZG9tfX08L2Rpdj4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbVwiPkdvIHRvIHt7cmFuZG9tfX08L2Rpdj5cbiAgICAgPC9uZy1jb250YWluZXI+IFxuICA8L2Rpdj5cbiAgXG4gIDwhLS0gPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAtLT5cbjwvZGl2PiJdfQ==
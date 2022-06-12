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
    i0.ɵɵtextInterpolate1(" Go to ", random_r1, " ");
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
        i0.ɵɵtext(4, "Parent Test 1");
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
        args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\">\n          Go to {{random}}\n        </div>\n     </ng-container> \n  </div>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7SUNFbEUsNkJBQTZDO0lBQzFDLDhCQUFzQjtJQUNwQixZQUNGO0lBQUEsaUJBQU07SUFDVCwwQkFBZTs7O0lBRlYsZUFDRjtJQURFLGdEQUNGOztBREhSOztHQUVHO0FBTUgsTUFBTSxPQUFPLGtCQUFtQixTQUFRLHVCQUF1QjtJQUU3RDtRQUFnQixLQUFLLEVBQUUsQ0FBQztRQUR4QixnQkFBVyxHQUFXLGNBQWMsQ0FBQztJQUNaLENBQUM7O29GQUZmLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDWC9CLDhCQUE2QixTQUFBO1FBQ3ZCLFlBQWlCO1FBQUEseUJBQUc7UUFBQSw2QkFBYTtRQUFBLGlCQUFJLEVBQUE7UUFDekMsOEJBQWlCO1FBQ2QscUZBSWU7UUFDbEIsaUJBQU0sRUFBQTs7UUFQRixlQUFpQjtRQUFqQixnREFBaUI7UUFFZSxlQUFVO1FBQVYscUNBQVU7O3VGRFFuQyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtbWFzdGVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQHRpdGxlIFJvdXRlUmV1c2VTdHJhdGVneSAtIFBhcmVudCBDaGlsZCBEZXNpZ24gLSBTb2x1dGlvbiBPbmVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG1kanItc29sdXRpb24tb25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2x1dGlvbi1vbmUtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTb2x1dGlvbk9uZUV4YW1wbGUgZXh0ZW5kcyBBYnN0cmFjdE1hc3RlckNvbXBvbmVudCB7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSAnU29sdXRpb24gT25lJztcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzb2x1dGlvbi1wYXJlbnRcIj5cbiAgPGgyPnt7ZGlzcGxheU5hbWV9fTogPGk+UGFyZW50IFRlc3QgMTwvaT48L2gyPlxuICA8ZGl2IGNsYXNzPVwibmF2XCI+IFxuICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByYW5kb20gb2YgcmFuZG9tc1wiPiBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgR28gdG8ge3tyYW5kb219fVxuICAgICAgICA8L2Rpdj5cbiAgICAgPC9uZy1jb250YWluZXI+IFxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==
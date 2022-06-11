import { Component } from '@angular/core';
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
export class SolutionOneExample {
    ngOnInit() {
        this.randoms = [];
        // const numberOfLinks = 5;
        // for (let i = 0; i < numberOfLinks; i++) {
        // 	this.randoms.push(this.getRandom(100));
        // }
        // Have we taken declarative programming to far?
        Array.from({ length: 5 }, () => this.randoms.push(this.getRandom(100)));
        console.log(`OnInit ${this.displayName} Parent`);
    }
    getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Parent`);
    }
}
SolutionOneExample.ɵfac = function SolutionOneExample_Factory(t) { return new (t || SolutionOneExample)(); };
SolutionOneExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionOneExample, selectors: [["tmdjr-solution-one"]], decls: 7, vars: 2, consts: [[1, "solution-parent"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "nav-item"]], template: function SolutionOneExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\">Go to {{random}}</div>\n        <!-- <div class=\"nav-item\" [routerLink]=\"['detail', displayName, random]\">Go to {{random}}</div> -->\n     </ng-container> \n  </div>\n  \n  <!-- <router-outlet></router-outlet> -->\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0lDR3hELDZCQUE2QztJQUMxQyw4QkFBc0I7SUFBQSxZQUFnQjtJQUFBLGlCQUFNO0lBRS9DLDBCQUFlOzs7SUFGVSxlQUFnQjtJQUFoQiw4Q0FBZ0I7O0FERjlDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGtCQUFrQjtJQUk5QixRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsMkJBQTJCO1FBQzNCLDRDQUE0QztRQUM1QywyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLGdEQUFnRDtRQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOztvRkFyQlcsa0JBQWtCO3FFQUFsQixrQkFBa0I7UUNWL0IsOEJBQTZCLFNBQUE7UUFDdkIsWUFBaUI7UUFBQSx5QkFBRztRQUFBLHNCQUFNO1FBQUEsaUJBQUksRUFBQTtRQUNsQyw4QkFBaUI7UUFDZCxxRkFHZTtRQUNsQixpQkFBTSxFQUFBOztRQU5GLGVBQWlCO1FBQWpCLGdEQUFpQjtRQUVlLGVBQVU7UUFBVixxQ0FBVTs7dUZET25DLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUm91dGVSZXVzZVN0cmF0ZWd5IC0gUGFyZW50IENoaWxkIERlc2lnbiAtIFNvbHV0aW9uIE9uZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bWRqci1zb2x1dGlvbi1vbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc29sdXRpb24tb25lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNvbHV0aW9uT25lRXhhbXBsZSBpbXBsZW1lbnRzICBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHB1YmxpYyByYW5kb21zITogbnVtYmVyW107XG5cdHB1YmxpYyBkaXNwbGF5TmFtZSE6IHN0cmluZztcblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJhbmRvbXMgPSBbXTtcblx0XHQvLyBjb25zdCBudW1iZXJPZkxpbmtzID0gNTtcblx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTGlua3M7IGkrKykge1xuXHRcdC8vIFx0dGhpcy5yYW5kb21zLnB1c2godGhpcy5nZXRSYW5kb20oMTAwKSk7XG5cdFx0Ly8gfVxuXHRcdC8vIEhhdmUgd2UgdGFrZW4gZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgdG8gZmFyP1xuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gdGhpcy5yYW5kb21zLnB1c2godGhpcy5nZXRSYW5kb20oMTAwKSkpO1xuXHRcdGNvbnNvbGUubG9nKGBPbkluaXQgJHt0aGlzLmRpc3BsYXlOYW1lfSBQYXJlbnRgKTtcblx0fVxuXG5cdGdldFJhbmRvbShtYXg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhgT25EZXN0cm95ICR7dGhpcy5kaXNwbGF5TmFtZX0gUGFyZW50YCk7XG5cdH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzb2x1dGlvbi1wYXJlbnRcIj5cbiAgPGgyPnt7ZGlzcGxheU5hbWV9fTogPGk+UGFyZW50PC9pPjwvaDI+XG4gIDxkaXYgY2xhc3M9XCJuYXZcIj4gXG4gICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJhbmRvbSBvZiByYW5kb21zXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1cIj5HbyB0byB7e3JhbmRvbX19PC9kaXY+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCIgW3JvdXRlckxpbmtdPVwiWydkZXRhaWwnLCBkaXNwbGF5TmFtZSwgcmFuZG9tXVwiPkdvIHRvIHt7cmFuZG9tfX08L2Rpdj4gLS0+XG4gICAgIDwvbmctY29udGFpbmVyPiBcbiAgPC9kaXY+XG4gIFxuICA8IS0tIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gLS0+XG48L2Rpdj4iXX0=
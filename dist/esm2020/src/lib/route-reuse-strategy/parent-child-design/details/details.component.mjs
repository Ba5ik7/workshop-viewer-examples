import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
// import { ActivatedRoute } from '@angular/router';
export class DetailsComponent {
    // constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.randomVal = Math.floor(Math.random() * 100);
        console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["shared-details"]], inputs: { displayName: "displayName" }, decls: 12, vars: 3, template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "i");
        i0.ɵɵtext(3, "Details");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div")(5, "b");
        i0.ɵɵtext(6, "Detail ID:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div")(9, "b");
        i0.ɵɵtext(10, "Random value:");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx.displayName, ": ");
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.routeId, "");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.randomVal, "");
    } }, styles: ["[_nghost-%COMP%]{display:block;border:1px solid #066E98;padding:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsComponent, [{
        type: Component,
        args: [{ selector: 'shared-details', template: "<h2>{{displayName}}: <i>Details</i></h2>\n<div><b>Detail ID:</b> {{routeId}}</div> \n<div><b>Random value:</b> {{randomVal}}</div>\n", styles: [":host{display:block;border:1px solid #066E98;padding:10px}\n"] }]
    }], null, { displayName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUNwRSxvREFBb0Q7QUFPcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixpREFBaUQ7SUFFakQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLFlBQVksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnRkFkVSxnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ1I3QiwwQkFBSTtRQUFBLFlBQWlCO1FBQUEseUJBQUc7UUFBQSx1QkFBTztRQUFBLGlCQUFJLEVBQUE7UUFDbkMsMkJBQUssUUFBQTtRQUFHLDBCQUFVO1FBQUEsaUJBQUk7UUFBQyxZQUFXO1FBQUEsaUJBQU07UUFDeEMsMkJBQUssUUFBQTtRQUFHLDhCQUFhO1FBQUEsaUJBQUk7UUFBQyxhQUFhO1FBQUEsaUJBQU07O1FBRnpDLGVBQWlCO1FBQWpCLGdEQUFpQjtRQUNFLGVBQVc7UUFBWCwyQ0FBVztRQUNSLGVBQWE7UUFBYiw2Q0FBYTs7dUZETTFCLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNFLGdCQUFnQjtnQkFNakIsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NoYXJlZC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcm91dGVJZCE6IGFueTtcbiAgQElucHV0KCkgZGlzcGxheU5hbWUhOiBhbnk7XG4gIHJhbmRvbVZhbCE6IG51bWJlcjtcblxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yYW5kb21WYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIGNvbnNvbGUubG9nKGBPbkluaXQgJHt0aGlzLmRpc3BsYXlOYW1lfSBEZXRhaWw6ICR7dGhpcy5yb3V0ZUlkfWApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYE9uRGVzdHJveSAke3RoaXMuZGlzcGxheU5hbWV9IERldGFpbDogJHt0aGlzLnJvdXRlSWR9YCk7XG4gIH1cbn0iLCI8aDI+e3tkaXNwbGF5TmFtZX19OiA8aT5EZXRhaWxzPC9pPjwvaDI+XG48ZGl2PjxiPkRldGFpbCBJRDo8L2I+IHt7cm91dGVJZH19PC9kaXY+IFxuPGRpdj48Yj5SYW5kb20gdmFsdWU6PC9iPiB7e3JhbmRvbVZhbH19PC9kaXY+XG4iXX0=
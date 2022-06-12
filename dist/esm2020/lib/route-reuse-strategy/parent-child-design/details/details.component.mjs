import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class DetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(p => {
            this.routeId = p['detailId'];
            this.displayName = p['displayName'];
        });
        this.randomVal = Math.floor(Math.random() * 100);
        console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
DetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["shared-details"]], decls: 12, vars: 3, template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], function () { return [{ type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7OztBQVE3RCxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUksQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dGQWxCVSxnQkFBZ0I7bUVBQWhCLGdCQUFnQjtRQ1I3QiwwQkFBSTtRQUFBLFlBQWlCO1FBQUEseUJBQUc7UUFBQSx1QkFBTztRQUFBLGlCQUFJLEVBQUE7UUFDbkMsMkJBQUssUUFBQTtRQUFHLDBCQUFVO1FBQUEsaUJBQUk7UUFBQyxZQUFXO1FBQUEsaUJBQU07UUFDeEMsMkJBQUssUUFBQTtRQUFHLDhCQUFhO1FBQUEsaUJBQUk7UUFBQyxhQUFhO1FBQUEsaUJBQU07O1FBRnpDLGVBQWlCO1FBQWpCLGdEQUFpQjtRQUNFLGVBQVc7UUFBWCwyQ0FBVztRQUNSLGVBQWE7UUFBYiw2Q0FBYTs7dUZETTFCLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNFLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcm91dGVJZCE6IGFueTtcbiAgcHVibGljIGRpc3BsYXlOYW1lITogYW55O1xuICBwdWJsaWMgcmFuZG9tVmFsITogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocCA9PiB7XG4gICAgICB0aGlzLnJvdXRlSWQgPSBwWydkZXRhaWxJZCddO1xuICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHBbJ2Rpc3BsYXlOYW1lJ107XG4gICAgfSk7XG4gICAgdGhpcy5yYW5kb21WYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIGNvbnNvbGUubG9nKGBPbkluaXQgJHt0aGlzLmRpc3BsYXlOYW1lfSBEZXRhaWw6ICR7dGhpcy5yb3V0ZUlkfWApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYE9uRGVzdHJveSAke3RoaXMuZGlzcGxheU5hbWV9IERldGFpbDogJHt0aGlzLnJvdXRlSWR9YCk7XG4gIH1cbn0iLCI8aDI+e3tkaXNwbGF5TmFtZX19OiA8aT5EZXRhaWxzPC9pPjwvaDI+XG48ZGl2PjxiPkRldGFpbCBJRDo8L2I+IHt7cm91dGVJZH19PC9kaXY+IFxuPGRpdj48Yj5SYW5kb20gdmFsdWU6PC9iPiB7e3JhbmRvbVZhbH19PC9kaXY+XG4iXX0=
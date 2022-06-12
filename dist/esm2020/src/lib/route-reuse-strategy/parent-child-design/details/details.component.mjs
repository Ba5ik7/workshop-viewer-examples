import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
// import { ActivatedRoute } from '@angular/router';
export class DetailsComponent {
    // constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        // this.route.params.subscribe(p => {
        //   this.routeId = p['detailId'];
        //   this.displayName = p['displayName'];
        // });
        this.randomVal = Math.floor(Math.random() * 100);
        console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["shared-details"]], inputs: { routeId: "routeId", displayName: "displayName" }, decls: 12, vars: 3, template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], null, { routeId: [{
            type: Input
        }], displayName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUNwRSxvREFBb0Q7QUFPcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixpREFBaUQ7SUFFakQsUUFBUTtRQUNOLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMseUNBQXlDO1FBQ3pDLE1BQU07UUFHTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksQ0FBQyxXQUFXLFlBQVksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0ZBcEJVLGdCQUFnQjttRUFBaEIsZ0JBQWdCO1FDUjdCLDBCQUFJO1FBQUEsWUFBaUI7UUFBQSx5QkFBRztRQUFBLHVCQUFPO1FBQUEsaUJBQUksRUFBQTtRQUNuQywyQkFBSyxRQUFBO1FBQUcsMEJBQVU7UUFBQSxpQkFBSTtRQUFDLFlBQVc7UUFBQSxpQkFBTTtRQUN4QywyQkFBSyxRQUFBO1FBQUcsOEJBQWE7UUFBQSxpQkFBSTtRQUFDLGFBQWE7UUFBQSxpQkFBTTs7UUFGekMsZUFBaUI7UUFBakIsZ0RBQWlCO1FBQ0UsZUFBVztRQUFYLDJDQUFXO1FBQ1IsZUFBYTtRQUFiLDZDQUFhOzt1RkRNMUIsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0UsZ0JBQWdCO2dCQUtqQixPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmVkLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSByb3V0ZUlkITogYW55O1xuICBASW5wdXQoKSBkaXNwbGF5TmFtZSE6IGFueTtcbiAgcmFuZG9tVmFsITogbnVtYmVyO1xuXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocCA9PiB7XG4gICAgLy8gICB0aGlzLnJvdXRlSWQgPSBwWydkZXRhaWxJZCddO1xuICAgIC8vICAgdGhpcy5kaXNwbGF5TmFtZSA9IHBbJ2Rpc3BsYXlOYW1lJ107XG4gICAgLy8gfSk7XG5cblxuICAgIHRoaXMucmFuZG9tVmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICBjb25zb2xlLmxvZyhgT25Jbml0ICR7dGhpcy5kaXNwbGF5TmFtZX0gRGV0YWlsOiAke3RoaXMucm91dGVJZH1gKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGBPbkRlc3Ryb3kgJHt0aGlzLmRpc3BsYXlOYW1lfSBEZXRhaWw6ICR7dGhpcy5yb3V0ZUlkfWApO1xuICB9XG59IiwiPGgyPnt7ZGlzcGxheU5hbWV9fTogPGk+RGV0YWlsczwvaT48L2gyPlxuPGRpdj48Yj5EZXRhaWwgSUQ6PC9iPiB7e3JvdXRlSWR9fTwvZGl2PiBcbjxkaXY+PGI+UmFuZG9tIHZhbHVlOjwvYj4ge3tyYW5kb21WYWx9fTwvZGl2PlxuIl19
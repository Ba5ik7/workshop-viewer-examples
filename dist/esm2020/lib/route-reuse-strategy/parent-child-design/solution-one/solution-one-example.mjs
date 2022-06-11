import { Component } from '@angular/core';
import * as i0 from "@angular/core";
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
SolutionOneExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionOneExample, selectors: [["tmdjr-solution-one"]], decls: 2, vars: 0, template: function SolutionOneExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "solution-one works! Kelly");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionOneExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-solution-one', template: "<p>solution-one works! Kelly</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUU3RDs7R0FFRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7SUFJOUIsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLDJCQUEyQjtRQUMzQiw0Q0FBNEM7UUFDNUMsMkNBQTJDO1FBQzNDLElBQUk7UUFDSixnREFBZ0Q7UUFDaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7b0ZBckJXLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDVi9CLHlCQUFHO1FBQUEseUNBQXlCO1FBQUEsaUJBQUk7O3VGRFVuQixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFJvdXRlUmV1c2VTdHJhdGVneSAtIFBhcmVudCBDaGlsZCBEZXNpZ24gLSBTb2x1dGlvbiBPbmVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG1kanItc29sdXRpb24tb25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2x1dGlvbi1vbmUtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTb2x1dGlvbk9uZUV4YW1wbGUgaW1wbGVtZW50cyAgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwdWJsaWMgcmFuZG9tcyE6IG51bWJlcltdO1xuXHRwdWJsaWMgZGlzcGxheU5hbWUhOiBzdHJpbmc7XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5yYW5kb21zID0gW107XG5cdFx0Ly8gY29uc3QgbnVtYmVyT2ZMaW5rcyA9IDU7XG5cdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkxpbmtzOyBpKyspIHtcblx0XHQvLyBcdHRoaXMucmFuZG9tcy5wdXNoKHRoaXMuZ2V0UmFuZG9tKDEwMCkpO1xuXHRcdC8vIH1cblx0XHQvLyBIYXZlIHdlIHRha2VuIGRlY2xhcmF0aXZlIHByb2dyYW1taW5nIHRvIGZhcj9cblx0XHRBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sICgpID0+IHRoaXMucmFuZG9tcy5wdXNoKHRoaXMuZ2V0UmFuZG9tKDEwMCkpKTtcblx0XHRjb25zb2xlLmxvZyhgT25Jbml0ICR7dGhpcy5kaXNwbGF5TmFtZX0gUGFyZW50YCk7XG5cdH1cblxuXHRnZXRSYW5kb20obWF4OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coYE9uRGVzdHJveSAke3RoaXMuZGlzcGxheU5hbWV9IFBhcmVudGApO1xuXHR9XG59XG4iLCI8cD5zb2x1dGlvbi1vbmUgd29ya3MhIEtlbGx5PC9wPlxuIl19
import { Component } from "@angular/core";
import * as i0 from "@angular/core";
export class AbstractMasterComponent {
    ngOnInit() {
        this.randoms = [];
        Array.from({ length: 5 }, () => this.randoms.push(this.getRandom(100)));
        console.log(`OnInit ${this.displayName} Parent`);
        this._ngOnInit();
    }
    _ngOnInit() { }
    getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Parent`);
    }
}
AbstractMasterComponent.ɵfac = function AbstractMasterComponent_Factory(t) { return new (t || AbstractMasterComponent)(); };
AbstractMasterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractMasterComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function AbstractMasterComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractMasterComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9hYnN0cmFjdC1tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUc3RCxNQUFNLE9BQWdCLHVCQUF1QjtJQUk1QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLEtBQUksQ0FBQztJQUVkLFNBQVMsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OEZBbkJvQix1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRDVDLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwdWJsaWMgcmFuZG9tcyE6IG51bWJlcltdO1xuXHRwdWJsaWMgYWJzdHJhY3QgZGlzcGxheU5hbWU6IHN0cmluZztcblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJhbmRvbXMgPSBbXTtcblx0XHRBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sICgpID0+IHRoaXMucmFuZG9tcy5wdXNoKHRoaXMuZ2V0UmFuZG9tKDEwMCkpKTtcblx0XHRjb25zb2xlLmxvZyhgT25Jbml0ICR7dGhpcy5kaXNwbGF5TmFtZX0gUGFyZW50YCk7XG5cdFx0dGhpcy5fbmdPbkluaXQoKTtcblx0fVxuXG5cdF9uZ09uSW5pdCgpIHt9XG5cblx0Z2V0UmFuZG9tKG1heDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGBPbkRlc3Ryb3kgJHt0aGlzLmRpc3BsYXlOYW1lfSBQYXJlbnRgKTtcblx0fVxufVxuXG4iXX0=
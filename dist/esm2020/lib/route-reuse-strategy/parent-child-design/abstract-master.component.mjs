import { Component } from "@angular/core";
import * as i0 from "@angular/core";
export class AbstractMasterComponent {
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
AbstractMasterComponent.ɵfac = function AbstractMasterComponent_Factory(t) { return new (t || AbstractMasterComponent)(); };
AbstractMasterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractMasterComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function AbstractMasterComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractMasterComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9hYnN0cmFjdC1tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUc3RCxNQUFNLE9BQWdCLHVCQUF1QjtJQUk1QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsMkJBQTJCO1FBQzNCLDRDQUE0QztRQUM1QywyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLGdEQUFnRDtRQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs4RkFyQm9CLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FENUMsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNYXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHB1YmxpYyByYW5kb21zITogbnVtYmVyW107XG5cdHB1YmxpYyBhYnN0cmFjdCBkaXNwbGF5TmFtZTogc3RyaW5nO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucmFuZG9tcyA9IFtdO1xuXHRcdC8vIGNvbnN0IG51bWJlck9mTGlua3MgPSA1O1xuXHRcdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZMaW5rczsgaSsrKSB7XG5cdFx0Ly8gXHR0aGlzLnJhbmRvbXMucHVzaCh0aGlzLmdldFJhbmRvbSgxMDApKTtcblx0XHQvLyB9XG5cdFx0Ly8gSGF2ZSB3ZSB0YWtlbiBkZWNsYXJhdGl2ZSBwcm9ncmFtbWluZyB0byBmYXI/XG5cdFx0QXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoKSA9PiB0aGlzLnJhbmRvbXMucHVzaCh0aGlzLmdldFJhbmRvbSgxMDApKSk7XG5cdFx0Y29uc29sZS5sb2coYE9uSW5pdCAke3RoaXMuZGlzcGxheU5hbWV9IFBhcmVudGApO1xuXHR9XG5cblx0Z2V0UmFuZG9tKG1heDogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGBPbkRlc3Ryb3kgJHt0aGlzLmRpc3BsYXlOYW1lfSBQYXJlbnRgKTtcblx0fVxufVxuIl19
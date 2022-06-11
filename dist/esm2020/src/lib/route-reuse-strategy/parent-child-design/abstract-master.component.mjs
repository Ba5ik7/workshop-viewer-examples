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
AbstractMasterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: AbstractMasterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AbstractMasterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: AbstractMasterComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: AbstractMasterComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtbWFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9hYnN0cmFjdC1tYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUc3RCxNQUFNLE9BQWdCLHVCQUF1QjtJQUk1QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsMkJBQTJCO1FBQzNCLDRDQUE0QztRQUM1QywyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLGdEQUFnRDtRQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOztvSEFyQm9CLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLG9EQUR0QixFQUFFOzJGQUNILHVCQUF1QjtrQkFENUMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRwdWJsaWMgcmFuZG9tcyE6IG51bWJlcltdO1xuXHRwdWJsaWMgYWJzdHJhY3QgZGlzcGxheU5hbWU6IHN0cmluZztcblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLnJhbmRvbXMgPSBbXTtcblx0XHQvLyBjb25zdCBudW1iZXJPZkxpbmtzID0gNTtcblx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTGlua3M7IGkrKykge1xuXHRcdC8vIFx0dGhpcy5yYW5kb21zLnB1c2godGhpcy5nZXRSYW5kb20oMTAwKSk7XG5cdFx0Ly8gfVxuXHRcdC8vIEhhdmUgd2UgdGFrZW4gZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgdG8gZmFyP1xuXHRcdEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKCkgPT4gdGhpcy5yYW5kb21zLnB1c2godGhpcy5nZXRSYW5kb20oMTAwKSkpO1xuXHRcdGNvbnNvbGUubG9nKGBPbkluaXQgJHt0aGlzLmRpc3BsYXlOYW1lfSBQYXJlbnRgKTtcblx0fVxuXG5cdGdldFJhbmRvbShtYXg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhgT25EZXN0cm95ICR7dGhpcy5kaXNwbGF5TmFtZX0gUGFyZW50YCk7XG5cdH1cbn1cbiJdfQ==
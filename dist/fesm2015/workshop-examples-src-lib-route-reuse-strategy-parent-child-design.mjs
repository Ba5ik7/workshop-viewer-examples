import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/cdk/portal';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

class AbstractMasterComponent {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractMasterComponent, [{
            type: Component,
            args: [{ template: '' }]
        }], null, null);
})();

// import { ActivatedRoute } from '@angular/router';
class DetailsComponent {
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
DetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["shared-details"]], inputs: { displayName: "displayName" }, decls: 12, vars: 3, template: function DetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx.displayName, ": ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.routeId, "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.randomVal, "");
        }
    }, styles: ["[_nghost-%COMP%]{display:block;border:1px solid #066E98;padding:10px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsComponent, [{
            type: Component,
            args: [{ selector: 'shared-details', template: "<h2>{{displayName}}: <i>Details</i></h2>\n<div><b>Detail ID:</b> {{routeId}}</div> \n<div><b>Random value:</b> {{randomVal}}</div>\n", styles: [":host{display:block;border:1px solid #066E98;padding:10px}\n"] }]
        }], null, { displayName: [{
                type: Input
            }] });
})();

function SolutionOneExample_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 4);
        i0.ɵɵlistener("click", function SolutionOneExample_ng_container_6_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const random_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.emuRouteChanges(random_r2)); });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const random_r2 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Go to ", random_r2, " ");
    }
}
function SolutionOneExample_ng_template_7_Template(rf, ctx) { }
/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
class SolutionOneExample extends AbstractMasterComponent {
    constructor() {
        super();
        this.displayName = 'Solution One';
    }
    _ngOnInit() {
        this.sharedDetailsPortal = new ComponentPortal(DetailsComponent);
    }
    emuRouteChanges(random) {
        console.log(random);
        // this.sharedDetailsPortal.component.routeId = random;
    }
    ngAfterViewInit() {
    }
}
SolutionOneExample.ɵfac = function SolutionOneExample_Factory(t) { return new (t || SolutionOneExample)(); };
SolutionOneExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionOneExample, selectors: [["tmdjr-solution-one"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "solution-parent"], [1, "nav"], [4, "ngFor", "ngForOf"], [3, "cdkPortalOutlet"], [1, "nav-item", 3, "click"]], template: function SolutionOneExample_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementStart(3, "i");
            i0.ɵɵtext(4, "Parent Test 1");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 1);
            i0.ɵɵtemplate(6, SolutionOneExample_ng_container_6_Template, 3, 1, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, SolutionOneExample_ng_template_7_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.displayName, ": ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.randoms);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkPortalOutlet", ctx.sharedDetailsPortal);
        }
    }, dependencies: [i1.NgForOf, i2.CdkPortalOutlet], styles: [".solution-parent[_ngcontent-%COMP%]{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionOneExample, [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" (click)=\"emuRouteChanges(random)\">\n          Go to {{random}}\n        </div>\n     </ng-container>\n  </div>\n  <!-- <shared-details [routeId]=\"routeId\" [displayName]=\"displayName\"></shared-details> -->\n  <ng-template [cdkPortalOutlet]=\"sharedDetailsPortal\"></ng-template>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
        }], function () { return []; }, null);
})();

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Two
 */
class SolutionTwoExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionTwoExample.ɵfac = function SolutionTwoExample_Factory(t) { return new (t || SolutionTwoExample)(); };
SolutionTwoExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionTwoExample, selectors: [["tmdjr-solution-two"]], decls: 2, vars: 0, template: function SolutionTwoExample_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "solution-two works!");
            i0.ɵɵelementEnd();
        }
    } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionTwoExample, [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-two', template: "<p>solution-two works!</p>\n" }]
        }], function () { return []; }, null);
})();

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Three
 */
class SolutionThreeExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionThreeExample.ɵfac = function SolutionThreeExample_Factory(t) { return new (t || SolutionThreeExample)(); };
SolutionThreeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionThreeExample, selectors: [["tmdjr-solution-three"]], decls: 2, vars: 0, template: function SolutionThreeExample_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "solution-three works!");
            i0.ɵɵelementEnd();
        }
    } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionThreeExample, [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-three', template: "<p>solution-three works!</p>\n" }]
        }], function () { return []; }, null);
})();

const EXAMPLES = [
    SolutionOneExample,
    SolutionTwoExample,
    SolutionThreeExample
];
class ParentChildDesignModule {
}
ParentChildDesignModule.ɵfac = function ParentChildDesignModule_Factory(t) { return new (t || ParentChildDesignModule)(); };
ParentChildDesignModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ParentChildDesignModule });
ParentChildDesignModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        PortalModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PortalModule
                    ],
                    declarations: [...EXAMPLES, DetailsComponent],
                    exports: EXAMPLES,
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignModule, { declarations: [SolutionOneExample,
            SolutionTwoExample,
            SolutionThreeExample, DetailsComponent], imports: [CommonModule,
            PortalModule], exports: [SolutionOneExample,
            SolutionTwoExample,
            SolutionThreeExample] });
})();

/**
 * Generated bundle index. Do not edit.
 */

export { ParentChildDesignModule, SolutionOneExample, SolutionThreeExample, SolutionTwoExample };
//# sourceMappingURL=workshop-examples-src-lib-route-reuse-strategy-parent-child-design.mjs.map

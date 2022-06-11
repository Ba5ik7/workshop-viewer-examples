import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @title Feature A
 */
class FeatureAExample {
    constructor() { }
    ngOnInit() {
    }
}
FeatureAExample.ɵfac = function FeatureAExample_Factory(t) { return new (t || FeatureAExample)(); };
FeatureAExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatureAExample, selectors: [["tmdjr-feature-a"]], decls: 2, vars: 0, template: function FeatureAExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "feature-a works!");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureAExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-feature-a', template: "<p>feature-a works!</p>\n" }]
    }], function () { return []; }, null); })();

class FeatureAModule {
}
FeatureAModule.ɵfac = function FeatureAModule_Factory(t) { return new (t || FeatureAModule)(); };
FeatureAModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FeatureAModule });
FeatureAModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureAModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FeatureAExample
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FeatureAExample
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeatureAModule, { declarations: [FeatureAExample], imports: [CommonModule], exports: [FeatureAExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureAExample, FeatureAModule };
//# sourceMappingURL=workshop-examples-src-lib-feature-a.mjs.map

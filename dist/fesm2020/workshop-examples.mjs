import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
class SolutionOneExample {
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

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Two
 */
class SolutionTwoExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionTwoExample.ɵfac = function SolutionTwoExample_Factory(t) { return new (t || SolutionTwoExample)(); };
SolutionTwoExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionTwoExample, selectors: [["tmdjr-solution-two"]], decls: 2, vars: 0, template: function SolutionTwoExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "solution-two works!");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionTwoExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-solution-two', template: "<p>solution-two works!</p>\n" }]
    }], function () { return []; }, null); })();

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Three
 */
class SolutionThreeExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionThreeExample.ɵfac = function SolutionThreeExample_Factory(t) { return new (t || SolutionThreeExample)(); };
SolutionThreeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SolutionThreeExample, selectors: [["tmdjr-solution-three"]], decls: 2, vars: 0, template: function SolutionThreeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "solution-three works!");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SolutionThreeExample, [{
        type: Component,
        args: [{ selector: 'tmdjr-solution-three', template: "<p>solution-three works!</p>\n" }]
    }], function () { return []; }, null); })();

const EXAMPLES = [
    SolutionOneExample,
    SolutionTwoExample,
    SolutionThreeExample
];
class ParentChildDesignModule {
}
ParentChildDesignModule.ɵfac = function ParentChildDesignModule_Factory(t) { return new (t || ParentChildDesignModule)(); };
ParentChildDesignModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ParentChildDesignModule });
ParentChildDesignModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignModule, { declarations: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample], imports: [CommonModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] }); })();

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
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */
const EXAMPLE_COMPONENTS = {
    "feature-a": {
        "packagePath": "lib/feature-a/feature-a",
        "title": "Feature A",
        "componentName": "FeatureAExample",
        "files": [
            "feature-a-example.ts",
            "./feature-a-example.html",
            "./feature-a-example.css"
        ],
        "selector": "tmdjr-feature-a",
        "additionalComponents": [],
        "primaryFile": "feature-a-example.ts",
        "module": {
            "name": "FeatureAModule",
            "importSpecifier": "lib/feature-a"
        }
    },
    "solution-one": {
        "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-one",
        "title": "RouteReuseStrategy - Parent Child Design - Solution One",
        "componentName": "SolutionOneExample",
        "files": [
            "solution-one-example.ts",
            "./solution-one-example.html",
            "./solution-one-example.css"
        ],
        "selector": "tmdjr-solution-one",
        "additionalComponents": [],
        "primaryFile": "solution-one-example.ts",
        "module": {
            "name": "ParentChildDesignModule",
            "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
        }
    },
    "solution-three": {
        "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-three",
        "title": "RouteReuseStrategy - Parent Child Design - Solution Three",
        "componentName": "SolutionThreeExample",
        "files": [
            "solution-three-example.ts",
            "./solution-three-example.html",
            "./solution-three-example.css"
        ],
        "selector": "tmdjr-solution-three",
        "additionalComponents": [],
        "primaryFile": "solution-three-example.ts",
        "module": {
            "name": "ParentChildDesignModule",
            "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
        }
    },
    "solution-two": {
        "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-two",
        "title": "RouteReuseStrategy - Parent Child Design - Solution Two",
        "componentName": "SolutionTwoExample",
        "files": [
            "solution-two-example.ts",
            "./solution-two-example.html",
            "./solution-two-example.css"
        ],
        "selector": "tmdjr-solution-two",
        "additionalComponents": [],
        "primaryFile": "solution-two-example.ts",
        "module": {
            "name": "ParentChildDesignModule",
            "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
        }
    }
};

/**
 * Generated bundle index. Do not edit.
 */

export { EXAMPLE_COMPONENTS, FeatureAExample, FeatureAModule, ParentChildDesignModule, SolutionOneExample, SolutionThreeExample, SolutionTwoExample };
//# sourceMappingURL=workshop-examples.mjs.map

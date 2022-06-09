import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
class SolutionOneExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionOneExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SolutionOneExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionOneExample, selector: "tmdjr-solution-one", ngImport: i0, template: "<p>solution-one works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-one', template: "<p>solution-one works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Two
 */
class SolutionTwoExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionTwoExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionTwoExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SolutionTwoExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionTwoExample, selector: "tmdjr-solution-two", ngImport: i0, template: "<p>solution-two works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionTwoExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-two', template: "<p>solution-two works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution Three
 */
class SolutionThreeExample {
    constructor() { }
    ngOnInit() {
    }
}
SolutionThreeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionThreeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SolutionThreeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionThreeExample, selector: "tmdjr-solution-three", ngImport: i0, template: "<p>solution-three works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionThreeExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-three', template: "<p>solution-three works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

const EXAMPLES = [
    SolutionOneExample,
    SolutionTwoExample,
    SolutionThreeExample
];
class ParentChildDesignModule {
}
ParentChildDesignModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentChildDesignModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, declarations: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample], imports: [CommonModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] });
ParentChildDesignModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * @title Feature A
 */
class FeatureAExample {
    constructor() { }
    ngOnInit() {
    }
}
FeatureAExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FeatureAExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: FeatureAExample, selector: "tmdjr-feature-a", ngImport: i0, template: "<p>feature-a works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-feature-a', template: "<p>feature-a works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class FeatureAModule {
}
FeatureAModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureAModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, declarations: [FeatureAExample], imports: [CommonModule], exports: [FeatureAExample] });
FeatureAModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, decorators: [{
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
        }] });

class FeatureBComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureBComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureBComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FeatureBComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: FeatureBComponent, selector: "tmdjr-feature-b", ngImport: i0, template: "<p>feature-b works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureBComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-feature-b', template: "<p>feature-b works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class FeatureBModule {
}
FeatureBModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureBModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureBModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: FeatureBModule, declarations: [FeatureBComponent], imports: [CommonModule] });
FeatureBModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureBModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureBModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FeatureBComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

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

export { EXAMPLE_COMPONENTS, FeatureAExample, FeatureAModule, FeatureBComponent, FeatureBModule, ParentChildDesignModule, SolutionOneExample, SolutionThreeExample, SolutionTwoExample };
//# sourceMappingURL=workshop-examples.mjs.map

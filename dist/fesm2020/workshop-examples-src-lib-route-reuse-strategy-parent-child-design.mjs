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
SolutionOneExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionOneExample, selector: "tmdjr-solution-one", ngImport: i0, template: "<p>solution-one works! Kelly</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-one', template: "<p>solution-one works! Kelly</p>\n" }]
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
 * Generated bundle index. Do not edit.
 */

export { ParentChildDesignModule, SolutionOneExample, SolutionThreeExample, SolutionTwoExample };
//# sourceMappingURL=workshop-examples-src-lib-route-reuse-strategy-parent-child-design.mjs.map

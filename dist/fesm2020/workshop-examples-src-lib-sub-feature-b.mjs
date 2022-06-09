import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
 * Generated bundle index. Do not edit.
 */

export { FeatureBComponent, FeatureBModule };
//# sourceMappingURL=workshop-examples-src-lib-sub-feature-b.mjs.map

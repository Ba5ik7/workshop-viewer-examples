import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class FeatureAComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureAComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FeatureAComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: FeatureAComponent, selector: "tmdjr-feature-a", ngImport: i0, template: "<p>feature-a works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-feature-a', template: "<p>feature-a works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class FeatureAModule {
}
FeatureAModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureAModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, declarations: [FeatureAComponent], imports: [CommonModule] });
FeatureAModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FeatureAModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FeatureAComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureAComponent, FeatureAModule };
//# sourceMappingURL=workshop-examples-src-lib-feature-a.mjs.map

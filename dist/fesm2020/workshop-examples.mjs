import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';

class AbstractMasterComponent {
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

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
class SolutionOneExample extends AbstractMasterComponent {
    constructor() {
        super();
        this.displayName = 'Solution One';
    }
}
SolutionOneExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SolutionOneExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionOneExample, selector: "tmdjr-solution-one", usesInheritance: true, ngImport: i0, template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" [routerLink]=\"['', { outlets: { 'parent-child-design-details-outlet': [ displayName, random] } }]\">\n          Go to {{random}}\n        </div>\n     </ng-container> \n  </div>\n  \n  <router-outlet name=\"parent-child-design-details-outlet\"></router-outlet>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1$1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" [routerLink]=\"['', { outlets: { 'parent-child-design-details-outlet': [ displayName, random] } }]\">\n          Go to {{random}}\n        </div>\n     </ng-container> \n  </div>\n  \n  <router-outlet name=\"parent-child-design-details-outlet\"></router-outlet>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
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

class DetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(p => {
            this.routeId = p['detailId'];
            this.displayName = p['displayName'];
        });
        this.randomVal = Math.floor(Math.random() * 100);
        console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
    }
    ngOnDestroy() {
        console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
    }
}
DetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DetailsComponent, deps: [{ token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
DetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: DetailsComponent, selector: "shared-details", ngImport: i0, template: "<h2>{{displayName}}: <i>Details</i></h2>\n<div><b>Detail ID:</b> {{routeId}}</div> \n<div><b>Random value:</b> {{randomVal}}</div>\n", styles: [":host{display:block;border:1px solid #066E98;padding:10px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DetailsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'shared-details', template: "<h2>{{displayName}}: <i>Details</i></h2>\n<div><b>Detail ID:</b> {{routeId}}</div> \n<div><b>Random value:</b> {{randomVal}}</div>\n", styles: [":host{display:block;border:1px solid #066E98;padding:10px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }]; } });

const routes = [
    {
        path: '',
        component: SolutionOneExample,
        children: [
            {
                path: ':displayName/:detailId',
                component: DetailsComponent,
                outlet: 'parent-child-design-details-outlet',
                data: { alwaysRefresh: true }
            }
        ]
    }
];
class ParentChildDesignRoutingModule {
}
ParentChildDesignRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentChildDesignRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ParentChildDesignRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

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
        SolutionThreeExample], imports: [CommonModule,
        ParentChildDesignRoutingModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] });
ParentChildDesignModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, imports: [CommonModule,
        ParentChildDesignRoutingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ParentChildDesignRoutingModule
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

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { DetailsComponent } from './details/details.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class ParentChildDesignRoutingModule {
}
ParentChildDesignRoutingModule.ɵfac = function ParentChildDesignRoutingModule_Factory(t) { return new (t || ParentChildDesignRoutingModule)(); };
ParentChildDesignRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ParentChildDesignRoutingModule });
ParentChildDesignRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWNoaWxkLWRlc2lnbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9wYXJlbnQtY2hpbGQtZGVzaWduLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFHL0QsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsTUFBTSxFQUFFLG9DQUFvQztnQkFDNUMsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTthQUM5QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLDhCQUE4Qjs7NEdBQTlCLDhCQUE4QjtnRkFBOUIsOEJBQThCO29GQUgvQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUM3QixZQUFZO3VGQUVYLDhCQUE4QjtjQUoxQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCOzt3RkFDWSw4QkFBOEIsMENBRi9CLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU29sdXRpb25PbmVFeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi1vbmUvc29sdXRpb24tb25lLWV4YW1wbGUnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJywgXG4gICAgY29tcG9uZW50OiBTb2x1dGlvbk9uZUV4YW1wbGUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpkaXNwbGF5TmFtZS86ZGV0YWlsSWQnLFxuICAgICAgICBjb21wb25lbnQ6IERldGFpbHNDb21wb25lbnQsXG4gICAgICAgIG91dGxldDogJ3BhcmVudC1jaGlsZC1kZXNpZ24tZGV0YWlscy1vdXRsZXQnLFxuICAgICAgICBkYXRhOiB7IGFsd2F5c1JlZnJlc2g6IHRydWUgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50Q2hpbGREZXNpZ25Sb3V0aW5nTW9kdWxlIHsgfVxuIl19
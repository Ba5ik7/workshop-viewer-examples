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
ParentChildDesignRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentChildDesignRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
ParentChildDesignRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWNoaWxkLWRlc2lnbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmtzaG9wLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9wYXJlbnQtY2hpbGQtZGVzaWduLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFHL0QsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsTUFBTSxFQUFFLG9DQUFvQztnQkFDNUMsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRTthQUM5QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLDhCQUE4Qjs7MkhBQTlCLDhCQUE4Qjs0SEFBOUIsOEJBQThCLHdDQUYvQixZQUFZOzRIQUVYLDhCQUE4QixZQUgvQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUM3QixZQUFZOzJGQUVYLDhCQUE4QjtrQkFKMUMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNvbHV0aW9uT25lRXhhbXBsZSB9IGZyb20gJy4vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlJztcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsIFxuICAgIGNvbXBvbmVudDogU29sdXRpb25PbmVFeGFtcGxlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICc6ZGlzcGxheU5hbWUvOmRldGFpbElkJyxcbiAgICAgICAgY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBvdXRsZXQ6ICdwYXJlbnQtY2hpbGQtZGVzaWduLWRldGFpbHMtb3V0bGV0JyxcbiAgICAgICAgZGF0YTogeyBhbHdheXNSZWZyZXNoOiB0cnVlIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudENoaWxkRGVzaWduUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
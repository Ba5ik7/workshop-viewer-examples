import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { DetailsComponent } from './details/details.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'parent',
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
export class SolutionOneRoutingModule {
}
SolutionOneRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SolutionOneRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
SolutionOneRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRy9ELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLE1BQU0sRUFBRSxvQ0FBb0M7Z0JBQzVDLElBQUksRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7YUFDOUI7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyx3QkFBd0I7O3FIQUF4Qix3QkFBd0I7c0hBQXhCLHdCQUF3Qix3Q0FGekIsWUFBWTtzSEFFWCx3QkFBd0IsWUFIekIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTsyRkFFWCx3QkFBd0I7a0JBSnBDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTb2x1dGlvbk9uZUV4YW1wbGUgfSBmcm9tICcuL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZSc7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwYXJlbnQnLCBcbiAgICBjb21wb25lbnQ6IFNvbHV0aW9uT25lRXhhbXBsZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnOmRpc3BsYXlOYW1lLzpkZXRhaWxJZCcsXG4gICAgICAgIGNvbXBvbmVudDogRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgb3V0bGV0OiAncGFyZW50LWNoaWxkLWRlc2lnbi1kZXRhaWxzLW91dGxldCcsXG4gICAgICAgIGRhdGE6IHsgYWx3YXlzUmVmcmVzaDogdHJ1ZSB9XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTb2x1dGlvbk9uZVJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';
import { DetailsComponent } from './details/details.component';
import * as i0 from "@angular/core";
export { SolutionOneExample, SolutionTwoExample, SolutionThreeExample };
const EXAMPLES = [
    SolutionOneExample,
    SolutionTwoExample,
    SolutionThreeExample
];
export class ParentChildDesignModule {
}
ParentChildDesignModule.ɵfac = function ParentChildDesignModule_Factory(t) { return new (t || ParentChildDesignModule)(); };
ParentChildDesignModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ParentChildDesignModule });
ParentChildDesignModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        PortalModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    PortalModule
                ],
                declarations: [...EXAMPLES, DetailsComponent],
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignModule, { declarations: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample, DetailsComponent], imports: [CommonModule,
        PortalModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUUvRCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDckIsQ0FBQTtBQUVELE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDckIsQ0FBQTtBQVVELE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUFOaEMsWUFBWTtRQUNaLFlBQVk7dUZBS0gsdUJBQXVCO2NBUm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLGdCQUFnQixDQUFDO2dCQUM3QyxPQUFPLEVBQUUsUUFBUTthQUNsQjs7d0ZBQ1ksdUJBQXVCLG1CQWJsQyxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQixFQVFRLGdCQUFnQixhQUgxQyxZQUFZO1FBQ1osWUFBWSxhQVJkLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU29sdXRpb25PbmVFeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi1vbmUvc29sdXRpb24tb25lLWV4YW1wbGUnO1xuaW1wb3J0IHsgU29sdXRpb25Ud29FeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi10d28vc29sdXRpb24tdHdvLWV4YW1wbGUnO1xuaW1wb3J0IHsgU29sdXRpb25UaHJlZUV4YW1wbGUgfSBmcm9tICcuL3NvbHV0aW9uLXRocmVlL3NvbHV0aW9uLXRocmVlLWV4YW1wbGUnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG4gIFNvbHV0aW9uT25lRXhhbXBsZSxcbiAgU29sdXRpb25Ud29FeGFtcGxlLFxuICBTb2x1dGlvblRocmVlRXhhbXBsZVxufVxuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU29sdXRpb25PbmVFeGFtcGxlLFxuICBTb2x1dGlvblR3b0V4YW1wbGUsXG4gIFNvbHV0aW9uVGhyZWVFeGFtcGxlXG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBEZXRhaWxzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudENoaWxkRGVzaWduTW9kdWxlIHt9Il19
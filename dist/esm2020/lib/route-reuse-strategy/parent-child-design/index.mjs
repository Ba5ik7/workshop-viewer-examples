import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';
import { ParentChildDesignRoutingModule } from './parent-child-design-routing.module';
import * as i0 from "@angular/core";
export { SolutionOneExample, SolutionTwoExample, SolutionThreeExample };
const EXAMPLES = [
    SolutionOneExample,
    SolutionTwoExample,
    SolutionThreeExample
];
export class ParentChildDesignModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRXRGLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUNyQixDQUFBO0FBVUQsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLGlCQWJsQyxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQixhQUtsQixZQUFZO1FBQ1osOEJBQThCLGFBUmhDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CO3FIQVdULHVCQUF1QixZQU5oQyxZQUFZO1FBQ1osOEJBQThCOzJGQUtyQix1QkFBdUI7a0JBUm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osOEJBQThCO3FCQUMvQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvbHV0aW9uT25lRXhhbXBsZSB9IGZyb20gJy4vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlJztcbmltcG9ydCB7IFNvbHV0aW9uVHdvRXhhbXBsZSB9IGZyb20gJy4vc29sdXRpb24tdHdvL3NvbHV0aW9uLXR3by1leGFtcGxlJztcbmltcG9ydCB7IFNvbHV0aW9uVGhyZWVFeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi10aHJlZS9zb2x1dGlvbi10aHJlZS1leGFtcGxlJztcbmltcG9ydCB7IFBhcmVudENoaWxkRGVzaWduUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGFyZW50LWNoaWxkLWRlc2lnbi1yb3V0aW5nLm1vZHVsZSc7XG5cbmV4cG9ydCB7XG4gIFNvbHV0aW9uT25lRXhhbXBsZSxcbiAgU29sdXRpb25Ud29FeGFtcGxlLFxuICBTb2x1dGlvblRocmVlRXhhbXBsZVxufVxuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU29sdXRpb25PbmVFeGFtcGxlLFxuICBTb2x1dGlvblR3b0V4YW1wbGUsXG4gIFNvbHV0aW9uVGhyZWVFeGFtcGxlXG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUGFyZW50Q2hpbGREZXNpZ25Sb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRDaGlsZERlc2lnbk1vZHVsZSB7fSJdfQ==
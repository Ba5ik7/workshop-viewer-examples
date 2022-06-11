import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';
import { SolutionOneRoutingModule } from './solution-one-routing.module';
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
        SolutionOneRoutingModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] });
ParentChildDesignModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, imports: [CommonModule,
        SolutionOneRoutingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ParentChildDesignModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        SolutionOneRoutingModule
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXpFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUNyQixDQUFBO0FBVUQsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLGlCQWJsQyxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQixhQUtsQixZQUFZO1FBQ1osd0JBQXdCLGFBUjFCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CO3FIQVdULHVCQUF1QixZQU5oQyxZQUFZO1FBQ1osd0JBQXdCOzJGQUtmLHVCQUF1QjtrQkFSbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU29sdXRpb25PbmVFeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi1vbmUvc29sdXRpb24tb25lLWV4YW1wbGUnO1xuaW1wb3J0IHsgU29sdXRpb25Ud29FeGFtcGxlIH0gZnJvbSAnLi9zb2x1dGlvbi10d28vc29sdXRpb24tdHdvLWV4YW1wbGUnO1xuaW1wb3J0IHsgU29sdXRpb25UaHJlZUV4YW1wbGUgfSBmcm9tICcuL3NvbHV0aW9uLXRocmVlL3NvbHV0aW9uLXRocmVlLWV4YW1wbGUnO1xuaW1wb3J0IHsgU29sdXRpb25PbmVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zb2x1dGlvbi1vbmUtcm91dGluZy5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBTb2x1dGlvbk9uZUV4YW1wbGUsXG4gIFNvbHV0aW9uVHdvRXhhbXBsZSxcbiAgU29sdXRpb25UaHJlZUV4YW1wbGVcbn1cblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNvbHV0aW9uT25lRXhhbXBsZSxcbiAgU29sdXRpb25Ud29FeGFtcGxlLFxuICBTb2x1dGlvblRocmVlRXhhbXBsZVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNvbHV0aW9uT25lUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50Q2hpbGREZXNpZ25Nb2R1bGUge30iXX0=
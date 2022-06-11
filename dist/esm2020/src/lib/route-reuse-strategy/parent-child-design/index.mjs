import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';
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
ParentChildDesignModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignModule, { declarations: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample], imports: [CommonModule], exports: [SolutionOneExample,
        SolutionTwoExample,
        SolutionThreeExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRS9FLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUNyQixDQUFBO0FBU0QsTUFBTSxPQUFPLHVCQUF1Qjs7OEZBQXZCLHVCQUF1Qjt5RUFBdkIsdUJBQXVCOzZFQUxoQyxZQUFZO3VGQUtILHVCQUF1QjtjQVBuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzt3RkFDWSx1QkFBdUIsbUJBWmxDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CLGFBS2xCLFlBQVksYUFQZCxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTb2x1dGlvbk9uZUV4YW1wbGUgfSBmcm9tICcuL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZSc7XG5pbXBvcnQgeyBTb2x1dGlvblR3b0V4YW1wbGUgfSBmcm9tICcuL3NvbHV0aW9uLXR3by9zb2x1dGlvbi10d28tZXhhbXBsZSc7XG5pbXBvcnQgeyBTb2x1dGlvblRocmVlRXhhbXBsZSB9IGZyb20gJy4vc29sdXRpb24tdGhyZWUvc29sdXRpb24tdGhyZWUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNvbHV0aW9uT25lRXhhbXBsZSxcbiAgU29sdXRpb25Ud29FeGFtcGxlLFxuICBTb2x1dGlvblRocmVlRXhhbXBsZVxufVxuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU29sdXRpb25PbmVFeGFtcGxlLFxuICBTb2x1dGlvblR3b0V4YW1wbGUsXG4gIFNvbHV0aW9uVGhyZWVFeGFtcGxlXG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRDaGlsZERlc2lnbk1vZHVsZSB7fSJdfQ==
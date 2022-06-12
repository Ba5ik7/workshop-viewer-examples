import { ComponentPortal } from '@angular/cdk/portal';
import { AbstractMasterComponent } from '../abstract-master.component';
import { DetailsComponent } from '../details/details.component';
import * as i0 from "@angular/core";
/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
export declare class SolutionOneExample extends AbstractMasterComponent {
    displayName: string;
    routeId: any;
    sharedDetailsPortal: ComponentPortal<DetailsComponent>;
    constructor();
    _ngOnInit(): void;
    emuRouteChanges(random: number): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionOneExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionOneExample, "tmdjr-solution-one", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=solution-one-example.d.ts.map
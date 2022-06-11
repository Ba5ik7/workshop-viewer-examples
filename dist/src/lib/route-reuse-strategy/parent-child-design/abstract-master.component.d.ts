import { OnDestroy, OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare abstract class AbstractMasterComponent implements OnInit, OnDestroy {
    randoms: number[];
    abstract displayName: string;
    ngOnInit(): void;
    getRandom(max: number): number;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractMasterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AbstractMasterComponent, "ng-component", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=abstract-master.component.d.ts.map
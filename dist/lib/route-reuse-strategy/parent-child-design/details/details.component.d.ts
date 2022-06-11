import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DetailsComponent implements OnInit, OnDestroy {
    private route;
    routeId: any;
    displayName: any;
    randomVal: number;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DetailsComponent, "shared-details", never, {}, {}, never, never, false>;
}

import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { AbstractMasterComponent } from '../abstract-master.component';
import { DetailsComponent } from '../details/details.component';

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
@Component({
  selector: 'tmdjr-solution-one',
  templateUrl: './solution-one-example.html',
  styleUrls: ['./solution-one-example.css']
})
export class SolutionOneExample extends AbstractMasterComponent {
  displayName: string = 'Solution One';
  routeId!: any;
  sharedDetailsPortal!: ComponentPortal<DetailsComponent>;
  constructor() { super(); }

  override _ngOnInit(): void {
    this.sharedDetailsPortal = new ComponentPortal(DetailsComponent);
  }

  emuRouteChanges(random: number) {
		console.log(random);
    // this.sharedDetailsPortal.component.routeId = random;
	}

  ngAfterViewInit() {
  }

}

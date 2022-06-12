import { Component } from '@angular/core';
import { AbstractMasterComponent } from '../abstract-master.component';

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
  constructor() { super(); }

  emuRouteChanges(random: number) {
		console.log(random);
    this.routeId = random;
	}

}

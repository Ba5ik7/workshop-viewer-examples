import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
@Component({
  selector: 'tmdjr-solution-one',
  templateUrl: './solution-one-example.html',
  styleUrls: ['./solution-one-example.css']
})
export class SolutionOneExample implements  OnInit, OnDestroy {
	public randoms!: number[];
	public displayName!: string;

	ngOnInit(): void {
		this.randoms = [];
		// const numberOfLinks = 5;
		// for (let i = 0; i < numberOfLinks; i++) {
		// 	this.randoms.push(this.getRandom(100));
		// }
		// Have we taken declarative programming to far?
		Array.from({ length: 5 }, () => this.randoms.push(this.getRandom(100)));
		console.log(`OnInit ${this.displayName} Parent`);
	}

	getRandom(max: number): number {
		return Math.floor(Math.random() * max);
	}

	ngOnDestroy(): void {
		console.log(`OnDestroy ${this.displayName} Parent`);
	}
}

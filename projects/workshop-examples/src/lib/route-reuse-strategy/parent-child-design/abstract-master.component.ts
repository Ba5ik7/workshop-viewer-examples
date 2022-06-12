import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({ template: '' })
export abstract class AbstractMasterComponent implements OnInit, OnDestroy {
	public randoms!: number[];
	public abstract displayName: string;

	ngOnInit(): void {
		this.randoms = [];
		Array.from({ length: 5 }, () => this.randoms.push(this.getRandom(100)));
		console.log(`OnInit ${this.displayName} Parent`);
		this._ngOnInit();
	}

	_ngOnInit() {}

	getRandom(max: number): number {
		return Math.floor(Math.random() * max);
	}

	ngOnDestroy(): void {
		console.log(`OnDestroy ${this.displayName} Parent`);
	}
}


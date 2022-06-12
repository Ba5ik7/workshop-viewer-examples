import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  routeId!: any;
  @Input() displayName!: any;
  randomVal!: number;

  // constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.randomVal = Math.floor(Math.random() * 100);
    console.log(`OnInit ${this.displayName} Detail: ${this.routeId}`);
  }

  ngOnDestroy(): void {
    console.log(`OnDestroy ${this.displayName} Detail: ${this.routeId}`);
  }
}
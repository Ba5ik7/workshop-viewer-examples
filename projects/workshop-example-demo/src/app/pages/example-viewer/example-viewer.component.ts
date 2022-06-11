import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinct, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent implements OnDestroy {

  destory: Subject<boolean> = new Subject();
  categoryId!: string;

  constructor(activatedRoute: ActivatedRoute ) {
    console.log('HEllo');
    
    activatedRoute.params
    .pipe(takeUntil(this.destory), distinct())
    .subscribe(params => {
      console.log(params);
      
      this.categoryId = params['example']
    });
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

}

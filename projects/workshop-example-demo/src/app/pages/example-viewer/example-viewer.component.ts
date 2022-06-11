import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LiveExampleComponent } from './live-example/live-example.component';

@Component({
  selector: 'app-example-viewer',
  template: ''
})
export class ExampleViewerComponent implements OnDestroy {

  destory: Subject<boolean> = new Subject();
  section!: string;

  constructor(
    activatedRoute: ActivatedRoute,
    private appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {    
    activatedRoute.params
      .pipe(takeUntil(this.destory))
      .subscribe((data) => this.loadLiveExamples(data['section']));
  }

  loadLiveExamples(componentName: string): void {
      const portalHost = new DomPortalOutlet(this.elementRef.nativeElement, this.componentFactoryResolver, this.appRef, this.injector);
      const examplePortal = new ComponentPortal(LiveExampleComponent, this.viewContainerRef);
      const exampleViewer = portalHost.attach(examplePortal);
      const exampleViewerComponent = exampleViewer.instance as LiveExampleComponent;
      exampleViewerComponent.example = componentName;
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }
}

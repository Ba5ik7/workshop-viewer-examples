import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleViewerRoutingModule } from './example-viewer-routing.module';
import { ExampleViewerComponent } from './example-viewer.component';
import { LiveExampleComponent } from './live-example/live-example.component';


@NgModule({
  declarations: [
    ExampleViewerComponent,
    LiveExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleViewerRoutingModule
  ]
})
export class ExampleViewerModule { }

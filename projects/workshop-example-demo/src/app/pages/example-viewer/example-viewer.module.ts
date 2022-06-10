import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleViewerRoutingModule } from './example-viewer-routing.module';
import { ExampleViewerComponent } from './example-viewer.component';


@NgModule({
  declarations: [
    ExampleViewerComponent
  ],
  imports: [
    CommonModule,
    ExampleViewerRoutingModule
  ]
})
export class ExampleViewerModule { }

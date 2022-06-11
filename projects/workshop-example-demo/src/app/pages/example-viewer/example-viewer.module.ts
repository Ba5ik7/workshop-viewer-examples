import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleViewerComponent } from './example-viewer.component';
import { ExampleComponent } from './example/example.component';
import { ExampleViewerRoutingModule } from './example-viewer-routing.module';


@NgModule({
  declarations: [
    ExampleViewerComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleViewerRoutingModule
  ]
})
export class ExampleViewerModule { }

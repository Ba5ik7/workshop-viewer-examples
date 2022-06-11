import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleViewerComponent } from './example-viewer.component';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    ExampleViewerComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleViewerModule { }

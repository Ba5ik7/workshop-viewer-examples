import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleViewerComponent } from './example-viewer.component';

const routes: Routes = [
  {
    path: '/:section',
    component: ExampleViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExampleViewerRoutingModule { }

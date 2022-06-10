import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleViewerComponent } from './example-viewer.component';

const routes: Routes = [{ path: '', component: ExampleViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleViewerRoutingModule { }

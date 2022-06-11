import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionOneExample } from './solution-one/solution-one-example';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: 'parent', 
    component: SolutionOneExample,
    children: [
      {
        path: ':displayName/:detailId',
        component: DetailsComponent,
        outlet: 'parent-child-design-details-outlet',
        data: { alwaysRefresh: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionOneRoutingModule { }

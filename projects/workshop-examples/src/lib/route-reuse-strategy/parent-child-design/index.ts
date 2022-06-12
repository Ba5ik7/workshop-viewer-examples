import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';

import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';
import { DetailsComponent } from './details/details.component';

export {
  SolutionOneExample,
  SolutionTwoExample,
  SolutionThreeExample
}

const EXAMPLES = [
  SolutionOneExample,
  SolutionTwoExample,
  SolutionThreeExample
]

@NgModule({
  imports: [
    CommonModule,
    PortalModule
  ],
  declarations: [...EXAMPLES, DetailsComponent],
  exports: EXAMPLES,
})
export class ParentChildDesignModule {}
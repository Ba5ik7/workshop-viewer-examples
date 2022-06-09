import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolutionOneExample } from './solution-one/solution-one-example';
import { SolutionTwoExample } from './solution-two/solution-two-example';
import { SolutionThreeExample } from './solution-three/solution-three-example';

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
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class ParentChildDesignModule {}
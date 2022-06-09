import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAExample } from './feature-a/feature-a-example';


export { FeatureAExample } from './feature-a/feature-a-example';


@NgModule({
  declarations: [
    FeatureAExample
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureAExample
  ]
})
export class FeatureAModule { }

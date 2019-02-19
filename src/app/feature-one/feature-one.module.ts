import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FormOneComponent } from './components/form-one/form-one.component';
import { ContainerOneComponent } from './containers/container-one/container-one.component';

@NgModule({
  declarations: [FormOneComponent, ContainerOneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureOneRoutingModule,
    SharedModule
  ]
})
export class FeatureOneModule { }

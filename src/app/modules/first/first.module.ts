import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { SecondModule } from './modules/second/second.module';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SecondModule
  ]
})
export class FirstModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [CommonModule, FirstRoutingModule],
})
export class FirstModule {}

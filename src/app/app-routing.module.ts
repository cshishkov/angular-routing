import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'app-first', component: FirstComponent },
  { path: 'app-second', component: SecondComponent },
  {
    path: 'first-module',
    loadChildren: () =>
      import('./modules/first/first.module').then((mod) => mod.FirstModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

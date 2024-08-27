import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'first-component',
        component: FirstComponent,
      },
      {
        path: 'second-component',
        component: SecondComponent,
      },
    ],
  },
  {
    path: 'second-module',
    loadChildren: () =>
      import('./modules/second/second.module').then((mod) => mod.SecondModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}

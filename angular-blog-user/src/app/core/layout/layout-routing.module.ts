import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LoginCanActivate} from '../../common/util/login.canactivate';


const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    canActivate: [LoginCanActivate],
    loadChildren: () =>
      import('../../pages/pages-routing.module').then((m) => m.PagesRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
  constructor() {
  }
 }

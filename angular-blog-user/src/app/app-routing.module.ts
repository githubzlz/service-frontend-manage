import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginCanActivate} from './common/util/login.canactivate';
import {LoginComponent} from './core/login/login.component';
import {LayoutComponent} from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

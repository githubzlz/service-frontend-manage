import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebInfoComponent } from './web-info/web-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/index/index.module').then((m) => m.IndexModule),
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  },
  {
    path: 'other',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/other/other.module').then((m) => m.OtherModule),
      },
    ],
  },
  {
    path: 'write',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/write/write.module').then((m) => m.WriteModule),
      },
    ],
  },
  {
    path: 'webinfo',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/web-info/webinfo.module').then((m) => m.WebInfoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
  constructor() {}
}

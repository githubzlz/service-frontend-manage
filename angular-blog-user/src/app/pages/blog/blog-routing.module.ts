import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blogList.component';
import { BlogStatisticComponent } from './blog-statistic/blogStatistic.component';
import { ModuleComponent } from './modulemanage/module.component';
import {AttachmentComponent} from './attachment/attachment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bloglist',
  },
  {
    path: 'bloglist',
    component: BlogListComponent,
  },
  {
    path: 'blogstatistic',
    component: BlogStatisticComponent,
  },
  {
    path: 'typemanage',
    component: ModuleComponent,
  },
  {
    path: 'attachfile',
    component: AttachmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
  constructor() {}
}

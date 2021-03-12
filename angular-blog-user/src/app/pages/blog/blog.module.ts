import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/core/share/share.module';
import { BlogListComponent } from './blog-list/blogList.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogStatisticComponent } from './blog-statistic/blogStatistic.component';
import { ModuleComponent } from './modulemanage/module.component';
import { AttachmentComponent } from './attachment/attachment.component';
@NgModule({
  declarations: [
    BlogListComponent,
    BlogStatisticComponent,
    ModuleComponent,
    AttachmentComponent
  ],
  imports: [CommonModule, ShareModule, FormsModule, BlogRoutingModule],
})
export class BlogModule {}

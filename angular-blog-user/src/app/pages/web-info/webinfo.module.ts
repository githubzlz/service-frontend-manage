import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/core/share/share.module';
import { EditorMdModule } from 'src/app/core/editormd/editor-md.module';
import { FormsModule } from '@angular/forms';
import {WebInfoComponent} from './web-info.component';
import {WebInfoRoutingModule} from './webinfo-routing.module';

@NgModule({
  declarations: [WebInfoComponent],
  imports: [
    CommonModule,
    ShareModule,
    EditorMdModule,
    FormsModule,
    WebInfoRoutingModule
  ],
  providers:[
  ]
})
export class WebInfoModule {}

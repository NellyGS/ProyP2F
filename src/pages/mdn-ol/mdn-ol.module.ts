import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdnOlPage } from './mdn-ol';

@NgModule({
  declarations: [
    MdnOlPage,
  ],
  imports: [
    IonicPageModule.forChild(MdnOlPage),
  ],
})
export class MdnOlPageModule {}

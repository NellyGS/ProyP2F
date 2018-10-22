import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioedPage } from './bioed';

@NgModule({
  declarations: [
    BioedPage,
  ],
  imports: [
    IonicPageModule.forChild(BioedPage),
  ],
})
export class BioedPageModule {}

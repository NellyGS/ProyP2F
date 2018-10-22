import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiotcPage } from './biotc';

@NgModule({
  declarations: [
    BiotcPage,
  ],
  imports: [
    IonicPageModule.forChild(BiotcPage),
  ],
})
export class BiotcPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivPage } from './div';

@NgModule({
  declarations: [
    DivPage,
  ],
  imports: [
    IonicPageModule.forChild(DivPage),
  ],
})
export class DivPageModule {}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiAPage } from '../mi-a/mi-a';
import { DivPage } from '../div/div';
import { MdnOPage } from '../mdn-o/mdn-o';
import { AviPage } from '../avi/avi';
import { Bio1Page } from '../bio1/bio1';
import { BioedPage } from '../bioed/bioed';
import { BiotcPage } from '../biotc/biotc';
import { BioavPage } from '../bioav/bioav';
import { MitAlPage } from '../mit-al/mit-al';
import { DivLPage } from '../div-l/div-l';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  One = MiAPage
  Ed = DivPage
  Tc = MdnOPage
  Av = AviPage
  bio1 = Bio1Page
  bioed = BioedPage
  biotc = BiotcPage
  bioav = BioavPage
  MitAL = MitAlPage
  DivL =  DivLPage

  constructor(public navCtrl: NavController) {
  }
  
  clickOne (){
    this.navCtrl.push(this.One);
  }

  clickEd (){
    this.navCtrl.push(this.Ed);
  }

  clickTc (){
    this.navCtrl.push(this.Tc);
  }

  clickAv (){
    this.navCtrl.push(this.Av);
  }

  clickBioO (){
    this.navCtrl.push(this.bio1);
  }

  clickBioEd (){
    this.navCtrl.push(this.bioed);
  }

  clickBioTC (){
    this.navCtrl.push(this.biotc);
  }

  clickBioAv (){
    this.navCtrl.push(this.bioav);
  }

  clickMitAL(){
    this.navCtrl.push(this.MitAL);
  }
  clickDivl(){
    this.navCtrl.push(this.DivL);
  }

}

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
import { MdnOlPage } from '../mdn-ol/mdn-ol';
import { AviLPage } from '../avi-l/avi-l';
import { MitaOPage } from '../mita-o/mita-o';
import { DivOPage } from '../div-o/div-o';
import { MdnoOPage } from '../mdno-o/mdno-o';
import { AviOPage } from '../avi-o/avi-o';

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
  MdnOL = MdnOlPage
  AviL = AviLPage
  MitaO = MitaOPage
  DivO = DivOPage
  MdnoO = MdnoOPage
  AviO = AviOPage  

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
  clickMdnOL(){
    this.navCtrl.push(this.MdnOL);
  }

  clickAviL(){
    this.navCtrl.push(this.AviL);
  }

  clickMitAO (){
    this.navCtrl.push(this.MitaO);
  }
  
  clickDivO (){
    this.navCtrl.push(this.DivO);
  }

  clickMdnoO (){
    this.navCtrl.push(this.MdnoO);
  }

  clickAviO () {
    this.navCtrl.push(this.AviO); 
  }

  

}

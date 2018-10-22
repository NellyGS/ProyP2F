import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AviLPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avi-l',
  templateUrl: 'avi-l.html',
})
export class AviLPage {
  cancionesA = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesA= ['1.- Friend of me (2:39)' , '2.- Lonely together (3:02) ', '3.- You be loved (3:27) ', '4.- Without you (3:01)', '5.- What would I change it to (3:05)', '6.- So much better (Avicci Remix) (2:37)', ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AviLPage');
  }

}

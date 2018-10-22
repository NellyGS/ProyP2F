import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MdnOlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mdn-ol',
  templateUrl: 'mdn-ol.html',
})
export class MdnOlPage {
  cancionesMd = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesMd= ['1.- The One (2:57)' , '2.- Break up every night (3:27) ', '3.- Bloodtream (3:44) ', '4.- Dont say (3:48)', '5.- Something jut lik this (4:07)', '6.- My type (3:37)', '7.- It wont kill ya (3:37)', '8.- Paris (3:41)', '9.- Honest (3:28)', '10.- Wake up alone (3:35)', '11.- Young (3:44)', '12.- Last day alive (3:34)', ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MdnOlPage');
  }

}

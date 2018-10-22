import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MitAlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mit-al',
  templateUrl: 'mit-al.html',
})
export class MitAlPage {
cancionesM = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    this.cancionesM= ['1.- Hey angel (4:00)' , '2.- Drag me down (3:12) ', '3.- Perfect (3:50) ', '4.- Infinity (4:09)', '5.- End of the day (3:14)', '6.- If I could fly (3:50)', '7.- Long way down (3:12)', '8.- Never Enough (3:33)', '9.- Olivia (2:57)', '10.- What a feeling (3:20)', '11.- Love you goodbye (3:20)', '12.- I want to write you a song (2:59)', '13.- History (3:07)',]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MitAlPage');
  }

}

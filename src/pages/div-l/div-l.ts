import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DivLPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-div-l',
  templateUrl: 'div-l.html',
})
export class DivLPage {
  cancionesD = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesD= ['1.- Eraser (3:48)' , '2.- Castle on the hill (4:21) ', '3.- Dive (3:59) ', '4.- Shape of you (4:09)', '5.- Perfect (4:23)', '6.- Galway girl (2:48)', '7.- Happier (3:28)', '8.- New Man (3:09)', '9.- Hearts dont break round here  (4:09)', '10.- What do I know (3:57)', '11.- How would you feel (Paean) (4:41)', '12.- Supermarket flowers (3:41)', '13.- Barcelona (3:11)', '14.- Babia Be Ye Ye (2:57)', '15.- Nancy Mullingan (3:00)','16.- Save myself (3:11)',]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DivLPage');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BonnesAdressesPage } from '../bonnes-adresses/bonnes-adresses';

@Component({
  selector: 'page-depuis-le-site',
  templateUrl: 'depuis-le-site.html'
})
export class DepuisLeSitePage {

  constructor(public navCtrl: NavController) {
  }
  goToBonnesAdresses(params){
    if (!params) params = {};
    this.navCtrl.push(BonnesAdressesPage);
  }
}

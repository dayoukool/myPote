import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignalerUnDysfonctionnementPage } from '../signaler-un-dysfonctionnement/signaler-un-dysfonctionnement';

@Component({
  selector: 'page-sur-le-site',
  templateUrl: 'sur-le-site.html'
})
export class SurLeSitePage {

  constructor(public navCtrl: NavController) {
  }

  signalerUnDysfonctionnement(){
    this.navCtrl.push(SignalerUnDysfonctionnementPage,{});
 }
}

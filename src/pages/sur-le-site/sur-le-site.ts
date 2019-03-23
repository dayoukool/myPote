import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignalerUnDysfonctionnementPage } from '../signaler-un-dysfonctionnement/signaler-un-dysfonctionnement';
import { EtreGuidVersPage } from '../etre-guid-vers/etre-guid-vers';
import { MyPoteInfoPage } from '../my-pote-info/my-pote-info';

@Component({
  selector: 'page-sur-le-site',
  templateUrl: 'sur-le-site.html'
})
export class SurLeSitePage {

  constructor(public navCtrl: NavController) {
  }

  signalerUnDysfonctionnement(){
    this.navCtrl.push(SignalerUnDysfonctionnementPage,{});
  }goToMyPoteInfo(params){
  if (!params) params = {};
   this.navCtrl.push(MyPoteInfoPage);
  }goToEtreGuidVers(params){
  if (!params) params = {};
    this.navCtrl.push(EtreGuidVersPage);
  }
}

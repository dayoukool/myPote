import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPoteInfoPage } from '../my-pote-info/my-pote-info';

@Component({
  selector: 'page-etre-guid-vers',
  templateUrl: 'etre-guid-vers.html'
})
export class EtreGuidVersPage {

  constructor(public navCtrl: NavController) {
  }
  goToMyPoteInfo(params){
    if (!params) params = {};
    this.navCtrl.push(MyPoteInfoPage);
  }
}

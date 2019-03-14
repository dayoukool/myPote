import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LesSitesITCEPage } from '../les-sites-itce/les-sites-itce';
import { SiteDeXxxxPage } from '../site-de-xxxx/site-de-xxxx';

@Component({
  selector: 'page-vers-un-site',
  templateUrl: 'vers-un-site.html'
})
export class VersUnSitePage {

  constructor(public navCtrl: NavController) {
  }
  goToLesSitesITCE(params){
    if (!params) params = {};
    this.navCtrl.push(LesSitesITCEPage);
  }goToSiteDeXxxx(params){
    if (!params) params = {};
    this.navCtrl.push(SiteDeXxxxPage);
  }
}

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { LesSitesITCEPage } from '../pages/les-sites-itce/les-sites-itce';
import { SiteDeXxxxPage } from '../pages/site-de-xxxx/site-de-xxxx';


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private toastCtrl: ToastController, private nfc: NFC) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nfc.addTagDiscoveredListener(nfcEvent =>
        this.sesReadNFC(nfcEvent)).subscribe(data => {
                    console.log(data);
              
                });
    });
  }
  sesReadNFC(data): void {
    let toast = this.toastCtrl.create({
      message: 'NFC_WORKING',
      duration: 6000,
      position: 'bottom'
    });
    console.log('nfc working', data);
    toast.present();
  }
  goToLesSitesITCE(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LesSitesITCEPage);
  }goToSiteDeXxxx(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SiteDeXxxxPage);
  }
}


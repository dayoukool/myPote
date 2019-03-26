import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { LesSitesITCEPage } from '../pages/les-sites-itce/les-sites-itce';
import { SiteDeXxxxPage } from '../pages/site-de-xxxx/site-de-xxxx';
import { BeaconTestPage } from '../pages/beacon-test/beacon-test';
import { SurLeSitePage } from '../pages/sur-le-site/sur-le-site';

import { Storage } from '@ionic/storage';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { MyPoteInfoPage } from '../pages/my-pote-info/my-pote-info';
import { EtreGuidVersPage } from '../pages/etre-guid-vers/etre-guid-vers';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;
  
  constructor(private storage: Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private toastCtrl: ToastController, private nfc: NFC) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nfc.addTagDiscoveredListener(nfcEvent =>
        this.sesReadNFC(nfcEvent)).subscribe(data => {
          //vérifier le site
          console.log("nfc data",data);
          this.storage.get("searchType").then(searchType => {
            if (searchType) {
              this.storage.get("searchIdentifier").then(searchIdentifier => {
                if (searchIdentifier) {
                  this.navCtrl.setRoot(MyPoteInfoPage,searchIdentifier);
                }
                else{
                  this.navCtrl.setRoot(EtreGuidVersPage,searchType);
                }
              });
            }
            else{
              this.navCtrl.setRoot(SurLeSitePage);
            }
          });
            
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


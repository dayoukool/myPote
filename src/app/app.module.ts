import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { File } from '@ionic-native/File/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

// import { File } from '@ionic-native/File';
import { IonicStorageModule } from '@ionic/storage';
import { EtreGuidVersPage } from '../pages/etre-guid-vers/etre-guid-vers';
import { VersUnSitePage } from '../pages/vers-un-site/vers-un-site';
import { SurLeSitePage } from '../pages/sur-le-site/sur-le-site';
import { DepuisLeSitePage } from '../pages/depuis-le-site/depuis-le-site';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LesSitesITCEPage } from '../pages/les-sites-itce/les-sites-itce';
import { BonnesAdressesPage } from '../pages/bonnes-adresses/bonnes-adresses';
import { SiteDeXxxxPage } from '../pages/site-de-xxxx/site-de-xxxx';
import { SignalerUnDysfonctionnementPage } from '../pages/signaler-un-dysfonctionnement/signaler-un-dysfonctionnement';
import { MyPoteInfoPage } from '../pages/my-pote-info/my-pote-info';
import { BeaconTestPage } from '../pages/beacon-test/beacon-test';
import { SitesItceService } from '../services/sites-itce.service';

@NgModule({
  declarations: [
    MyApp,
    BeaconTestPage,
    EtreGuidVersPage,
    MyPoteInfoPage,
    VersUnSitePage,
    SurLeSitePage,
    DepuisLeSitePage,
    TabsControllerPage,
    LesSitesITCEPage,
    BonnesAdressesPage,
    SiteDeXxxxPage,
    SignalerUnDysfonctionnementPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BeaconTestPage,
    EtreGuidVersPage,
    MyPoteInfoPage,
    VersUnSitePage,
    SurLeSitePage,
    DepuisLeSitePage,
    TabsControllerPage,
    LesSitesITCEPage,
    BonnesAdressesPage,
    SiteDeXxxxPage,
    SignalerUnDysfonctionnementPage
  ],
  providers: [
    BluetoothLE,
      SitesItceService,
      StatusBar,
      SplashScreen,
      WebView,
      Camera,
      File,
      FilePath,
      Storage,
      NFC, 
      Ndef,
   {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
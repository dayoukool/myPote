import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VersUnSitePage } from '../pages/vers-un-site/vers-un-site';
import { SurLeSitePage } from '../pages/sur-le-site/sur-le-site';
import { DepuisLeSitePage } from '../pages/depuis-le-site/depuis-le-site';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LesSitesITCEPage } from '../pages/les-sites-itce/les-sites-itce';
import { BonnesAdressesPage } from '../pages/bonnes-adresses/bonnes-adresses';
import { SiteDeXxxxPage } from '../pages/site-de-xxxx/site-de-xxxx';
import { SitesItceService } from '../services/sites-itce.service'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    VersUnSitePage,
    SurLeSitePage,
    DepuisLeSitePage,
    TabsControllerPage,
    LesSitesITCEPage,
    BonnesAdressesPage,
    SiteDeXxxxPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VersUnSitePage,
    SurLeSitePage,
    DepuisLeSitePage,
    TabsControllerPage,
    LesSitesITCEPage,
    BonnesAdressesPage,
    SiteDeXxxxPage
  ],
  providers: [
    SitesItceService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
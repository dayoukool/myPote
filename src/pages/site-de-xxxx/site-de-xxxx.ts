import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'page-site-de-xxxx',
  templateUrl: 'site-de-xxxx.html',
  providers: [AppAvailability,InAppBrowser,Device]
})
export class SiteDeXxxxPage {
  site:any;

  constructor(
    public navCtrl: NavController,
    public plt: Platform, 
    public navParams: NavParams,
    public appAvailability : AppAvailability,
    public inAppBrowser : InAppBrowser,
    public device : Device,

  ) {
    this.site = navParams.get('site');
  }
  
  goToPlace():void {
    const latitude = this.site.position.lat;
    const longitude = this.site.position.long;
    let destination = latitude + ',' + longitude;

    if(this.plt.is('ios')){
      window.open('maps://?q=' + destination, '_system');
    } else {
      let label = encodeURI('ITCE Pierre Simon Laplace, Aix-en-provence');
      window.open('geo:0,0?q=' + destination /* + '(' + label + ')' */, '_system');
    }
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.inAppBrowser.create(httpUrl + username, '_system');
      return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
        let browser = this.inAppBrowser.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.inAppBrowser.create(httpUrl + username, '_system');
      }
    );
  }
  
  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }
  
  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }
  
  openFacebook(username: string) {
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }
}

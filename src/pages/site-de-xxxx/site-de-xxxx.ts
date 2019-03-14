import { Component } from '@angular/core';
import { Platform,NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-site-de-xxxx',
  templateUrl: 'site-de-xxxx.html'
})
export class SiteDeXxxxPage {
  site:any;

  constructor(public navCtrl: NavController,public plt: Platform, public navParams: NavParams) {
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
}

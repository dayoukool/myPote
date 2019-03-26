import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SiteDeXxxxPage } from '../site-de-xxxx/site-de-xxxx';
import { SitesItceService } from '../../services/sites-itce.service'
import { Storage } from '@ionic/storage';
// backToRefere Pages
import { SurLeSitePage } from '../sur-le-site/sur-le-site';

@Component({
  selector: 'page-les-sites-itce',
  templateUrl: 'les-sites-itce.html'
})
export class LesSitesITCEPage {
  sites:any[];

  ionViewWillEnter(){
    this.itceServ.getJSON().subscribe(data => {
      console.log(data);
      this.sites = data;
    })
  }
  constructor(private navParams: NavParams, private storage: Storage, public navCtrl: NavController, public itceServ: SitesItceService) {
  }
  goToSiteDeXxxx(event,siteId){
    this.storage.set('siteId',siteId)
    let site = this.itceServ.getSite(this.sites,siteId) ;
    console.log(siteId)
    console.log(this.navParams.get("action"), this.navParams.get("referer"))
    if(this.navParams.get("action")=="backToReferer"){
      switch (this.navParams.get("referer")){
        case "SurLeSitePage":
          console.log(this.sites,siteId);
          this.navCtrl.push(SurLeSitePage,{"site": site });
          break;
        default:
          this.navCtrl.push(SiteDeXxxxPage,{"site": site});
          break;
      }
    }
    else{
      this.navCtrl.push(SiteDeXxxxPage,{"site": site});
    }
  }
}

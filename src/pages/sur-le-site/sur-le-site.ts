import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignalerUnDysfonctionnementPage } from '../signaler-un-dysfonctionnement/signaler-un-dysfonctionnement';
import { EtreGuidVersPage } from '../etre-guid-vers/etre-guid-vers';
import { MyPoteInfoPage } from '../my-pote-info/my-pote-info';
import { LesSitesITCEPage } from '../les-sites-itce/les-sites-itce';
import { Storage } from '@ionic/storage';
import { SitesItceService } from '../../services/sites-itce.service'

@Component({
  selector: 'page-sur-le-site',
  templateUrl: 'sur-le-site.html'
})
export class SurLeSitePage {
  private site: any;

  constructor(private itceServ: SitesItceService, private storage: Storage,public navCtrl: NavController,public navParams: NavParams) {
  }
  
  ionViewWillEnter(){
    if(this.navParams.get('site')){
      console.log("site existant 1");
      this.site =this.navParams.get('site');
    }else{
      this.storage.get("siteId").then(siteId =>
      {
        console.log(siteId);
        if(siteId!=null){
          this.itceServ.getJSON().subscribe(sites=>{
            this.site = this.itceServ.getSite(sites, siteId);
            console.log("site existant 2",this.storage.get("siteId"),this.site);
          });
        }else{
          console.log("site inexistant");
          this.navCtrl.push(LesSitesITCEPage,{"referer":"SurLeSitePage","action": "backToReferer"});
        }
      });
    }
  }
  getSite(){
    return this.site || {"name":""}
  }
  signalerUnDysfonctionnement(){
    this.navCtrl.push(SignalerUnDysfonctionnementPage,{});
  }
  goToMyPoteInfo(params){
  if (!params) params = {};
   this.navCtrl.push(MyPoteInfoPage);
  }
  goToEtreGuidVers(searchType){
  if (!searchType) searchType = {};
    this.storage.set("searchType",searchType);
    this.navCtrl.push(EtreGuidVersPage,{"searchType":searchType,"site":this.site});
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { MyPoteInfoPage } from '../my-pote-info/my-pote-info';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-etre-guid-vers',
  templateUrl: 'etre-guid-vers.html'
})
export class EtreGuidVersPage {
  private searchIdentifier: string;
  searchType: any;
  site: any;

  ionViewWillEnter(){
    this.searchType = this.navParams.get("searchType");
    this.site = this.navParams.get("site");
  }

  constructor(private storage: Storage, private navParams: NavParams, public navCtrl: NavController) {
  }
  searchTypeTranslator(searchType:string){
    let frenchSearchType = "";
    switch (searchType) {
      case "people":
        frenchSearchType = 'un collègue';
        break;
      case "place":
        frenchSearchType = 'une salle';
        break;
      case "printer":
        frenchSearchType = 'une imprimante';
        break;
      case "toilets":
        frenchSearchType = 'les toilettes';
        break;
      default:
        break;
    }
    return frenchSearchType;
  }
  record(searchIdentifier : string){
    this.searchIdentifier = searchIdentifier;
  }
  goToMyPoteInfo(params){
    if (!params) params = {};
    this.storage.set("searchIdentifier",params);
    this.navCtrl.push(MyPoteInfoPage, params);
  }
}

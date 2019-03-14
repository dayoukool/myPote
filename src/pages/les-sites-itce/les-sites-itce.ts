import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SiteDeXxxxPage } from '../site-de-xxxx/site-de-xxxx';
import { SitesItceService } from '../../services/sites-itce.service'

@Component({
  selector: 'page-les-sites-itce',
  templateUrl: 'les-sites-itce.html'
})
export class LesSitesITCEPage {
  sites:any[];

  ngOnInit(){
    this.itceServ.getJSON().subscribe(data => {
      console.log(data);
      this.sites = data;
    })
  }
  constructor(public navCtrl: NavController, public itceServ: SitesItceService) {
  }
  goToSiteDeXxxx(event,site){
     this.navCtrl.push(SiteDeXxxxPage,{
       site:site
     });
  }
}

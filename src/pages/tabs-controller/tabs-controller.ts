import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VersUnSitePage } from '../vers-un-site/vers-un-site';
import { SurLeSitePage } from '../sur-le-site/sur-le-site';
import { DepuisLeSitePage } from '../depuis-le-site/depuis-le-site';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = VersUnSitePage;
  tab2Root: any = SurLeSitePage;
  tab3Root: any = DepuisLeSitePage;
  constructor(public navCtrl: NavController) {
  }
  
}

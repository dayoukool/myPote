import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconTestPage } from './beacon-test';


@NgModule({
  declarations: [
    BeaconTestPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconTestPage),
  ],
})
export class BeaconTestPageModule {
  
}

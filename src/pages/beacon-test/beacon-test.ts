import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

/**
 * Generated class for the BeaconTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beacon-test',
  templateUrl: 'beacon-test.html',
  providers:[IBeacon]
})
export class BeaconTestPage {

  constructor(public bluetoothle: BluetoothLE, public plt: Platform, public navCtrl: NavController, public navParams: NavParams, private ibeacon: IBeacon, private alertCtrl: AlertController) { 
    this.plt.ready().then((readySource) => {

      console.log('Platform ready from', readySource);
   
      this.bluetoothle.initialize().then(ble => {
        console.log('ble', ble.status) // logs 'enabled'
        this.bluetoothle.startScan(
        {
          "services": [],
          "allowDuplicates": true,
          "scanMode": bluetoothle.SCAN_MODE_LOW_LATENCY,
          "matchMode": bluetoothle.MATCH_MODE_AGRESSIVE,
          "matchNum": bluetoothle.MATCH_NUM_MAX_ADVERTISEMENT,
          "callbackType": bluetoothle.CALLBACK_TYPE_ALL_MATCHES,
        }).subscribe(res =>{
          console.log('scan result',res);
        });
      });
    });
  }
  
  // ngOnInit(){
  //   this.ibeacon.requestAlwaysAuthorization().then(info => {
  //     console.log('ibeacon initialized',info)
  //   });
  //   let delegate = this.ibeacon.Delegate()
  //   delegate.didRangeBeaconsInRegion()
  //     .subscribe(
  //       data => console.log('didRangeBeaconsInRegion: ', data),
  //       error => console.error()
  //     );
  //   delegate.didStartMonitoringForRegion()
  //     .subscribe(
  //       data => console.log('didStartMonitoringForRegion: ', data),
  //       error => console.error()
  //     );
  //   delegate.didEnterRegion()
  //     .subscribe(
  //       data => {
  //         console.log('didEnterRegion: ', data);
  //       }
  //     );
    
  //   let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');
    
  //   this.ibeacon.startMonitoringForRegion(beaconRegion)
  //     .then(
  //       () => console.log('Native layer received the request to monitoring'),
  //       error => console.error('Native layer failed to begin monitoring: ', error)
  //     );
  // }

  


}

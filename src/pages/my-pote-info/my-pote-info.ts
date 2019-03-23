import { Component } from '@angular/core';
import { NavController, Platform , ToastController, AlertController} from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'page-my-pote-info',
  templateUrl: 'my-pote-info.html'
})
export class MyPoteInfoPage {
  tagId: string;
  constructor(public navCtrl: NavController,private nfc: NFC, private ndef: Ndef, private platform: Platform,
    private toastCtrl: ToastController, private alertCtrl: AlertController) {
    // this.platform.ready().then(() => { 
    //   this.cekNFC();
    // })
  }

  cekNFC() {
    this.nfc.enabled().then(() => {
      this.addListenNFC();
    })
      .catch(err => {
      let alert = this.alertCtrl.create({
      subTitle:'NFC_DISABLED_ON_NFC',
      buttons: [{ text: 'OK' }, {
      text: 'GO_SETTING',
      handler: () => {
        this.nfc.showSettings();
      }
    }]
    });

    alert.present();
    });
    }  

    addListenNFC() {
      this.nfc.addTagDiscoveredListener(nfcEvent => this.sesReadNFC(nfcEvent)).subscribe(data => {
        console.log('tag discovered',data);
          if (data && data.tag && data.tag.id) {
              let tagId = this.nfc.bytesToHexString(data.tag.id);
              if (tagId) {
                  this.tagId= tagId;
              } else {
                  let toast = this.toastCtrl.create({
                    message: 'NFC_NOT_DETECTED',
                    duration: 2000,
                    position: 'bottom'
                  });
                  console.log('nfc not working', data);
                  toast.present();
                  
                }
              }
            });
          }
          
          sesReadNFC(data): void {
            let toast = this.toastCtrl.create({
              message: 'NFC_WORKING',
              duration: 6000,
              position: 'bottom'
            });
            console.log('nfc working', data);
      toast.present();

  }
  
  failNFC(err) {
      let toast = this.toastCtrl.create({
        message: 'NFC Failed :' + JSON.stringify(err),
        duration: 6000,
        position: 'bottom'
      });
      toast.present();      
  }

}

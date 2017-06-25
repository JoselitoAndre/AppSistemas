import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-extensao',
  templateUrl: 'extensao.html',
})
export class ExtensaoPage {

  extensoes: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    this.extensoes = db.list('/extensoes');
    }

    addExtensao(){
  let prompt = this.alertCtrl.create({
    title: 'Informação',
    message: "Digita ai",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.extensoes.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
  }

}

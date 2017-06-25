import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-financiamentos',
  templateUrl: 'financiamentos.html',
})
export class FinanciamentosPage {

  financiamentos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    this.financiamentos = db.list('/financiamentos');
    }

  addFinanciamento(){
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
          this.financiamentos.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
  }

}

import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-matrizCurricular',
  templateUrl: 'matrizCurricular.html',
})

export class matrizCurricularPage {

  matrizes: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    this.matrizes = db.list('/matrizCurricular');
    }

  addMatriz(){
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
          this.matrizes.push({
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
  }

}

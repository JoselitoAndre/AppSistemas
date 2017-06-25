import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-infra-curso',
  templateUrl: 'infra-curso.html',
})

export class InfraCursoPage {

  infras: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    this.infras = db.list('/infraestrutura');
    }

  addInfraestrutura(){
  let prompt = this.alertCtrl.create({
    title: 'Informação',
    message: "Digita ai",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      {
        name: 'descricao',
        placeholder: 'Descricao'
      }
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
          this.infras.push({
            title: data.title,
            descricao:data.descricao
          });
        }
      }
    ]
  });
  prompt.present();
  }

}

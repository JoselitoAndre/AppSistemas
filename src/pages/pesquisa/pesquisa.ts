import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NavController, AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {
  pesquisas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    this.pesquisas = db.list('/pesquisas');
    }

  addPesquisa(){
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
          this.pesquisas.push({
            title: data.title,
            descricao: data.descricao
          });
        }
      }
    ]
  });
  prompt.present();
  }

}

import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { NavController } from 'ionic-angular';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, AlertController } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {

  cursos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, db: AngularFireDatabase) {
    //this.items = db.list('/items');
    this.cursos = db.list('/cursos');
}

addCurso(){
let prompt = this.alertCtrl.create({
title: 'Informação',
message: "Digita aí",
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
      this.cursos.push({
        title: data.title
      });
    }
  }
]
});
prompt.present();
}



}

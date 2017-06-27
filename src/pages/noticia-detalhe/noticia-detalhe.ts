import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { NavController } from 'ionic-angular';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the NoticiaDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-noticia-detalhe',
  templateUrl: 'noticia-detalhe.html',
})
export class NoticiaDetalhePage {

  dados: FirebaseListObservable<any>;
  selectedItem: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    this.dados = db.list('/noticiasHome');

  }
  
  ionViewDidLoad() {
    console.log(this.dados);
  }

}

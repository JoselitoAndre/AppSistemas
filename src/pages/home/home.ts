import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { NavController } from 'ionic-angular';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {NavController,AlertController,NavParams} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import {NoticiaDetalhePage} from '../../pages/noticia-detalhe/noticia-detalhe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
   dados: FirebaseListObservable<any>;

   selectedItem: any;
   
    

  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController, db: AngularFireDatabase, private socialSharing: SocialSharing) {
    this.dados = db.list('/noticiasHome');
    //this.selectedItem = navParams.get('item');
    
    

    

  }

//  itemTapped(event,item){
//     this.navCtrl.push(VideosPage);    
//   }

  itemTapped(event,dados){
    this.navCtrl.push(NoticiaDetalhePage,{
      dados: dados
    });    
  }
  


  regularShare(){
    this.socialSharing.share("Noticia do Aplicativo do Curso de Sistemas de Informação da Facisa",null,null,null);
  }

  //função para cadastro da noticia
  addDado(){
  let prompt = this.alertCtrl.create({
    title: 'Informação',
    message: "Digita ai",
    inputs: [
      {
        name: 'titulo',
        placeholder: 'Titulo'
      },
      {
        name: 'descricao',
        placeholder: 'Descrição'
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
          this.dados.push({
            titulo: data.titulo,
            descricao: data.descricao

          });
        }
      }
    ]
  });
  prompt.present();
  }


}

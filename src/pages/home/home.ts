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
<<<<<<< HEAD

splash = true;
dados: FirebaseListObservable<any>;
selectedItem: any;

=======
  
   dados: FirebaseListObservable<any>;

   selectedItem: any;
   
    
>>>>>>> 74ca455d8f28024a3b837c5031279ecd3a7ba58e

  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController, db: AngularFireDatabase, private socialSharing: SocialSharing) {
    this.dados = db.list('/noticiasHome');
    //this.selectedItem = navParams.get('item');
<<<<<<< HEAD

  }


  ionViewDidLoad() {
      setTimeout(() => this.splash = false, 4000);
    }


//  itemTapped(event,item){
//     this.navCtrl.push(VideosPage);
=======
    
    

    

  }

//  itemTapped(event,item){
//     this.navCtrl.push(VideosPage);    
>>>>>>> 74ca455d8f28024a3b837c5031279ecd3a7ba58e
//   }

  itemTapped(event,dados){
    this.navCtrl.push(NoticiaDetalhePage,{
      dados: dados
<<<<<<< HEAD
    });
  }

=======
    });    
  }
  
>>>>>>> 74ca455d8f28024a3b837c5031279ecd3a7ba58e


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

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CursoPage } from '../pages/curso/curso';
import { ExtensaoPage } from '../pages/extensao/extensao';
import { FinanciamentosPage } from '../pages/financiamentos/financiamentos';
import { InfraCursoPage } from '../pages/infra-curso/infra-curso';
import { matrizCurricularPage } from '../pages/matrizCurricular/matrizCurricular';
import { PesquisaPage } from '../pages/pesquisa/pesquisa';
import { VideosPage } from '../pages/videos/videos';
import {NoticiaDetalhePage} from '../pages/noticia-detalhe/noticia-detalhe';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig  = {

    apiKey: "AIzaSyB74L3pFZfpHT90KpLIF7y_iFHKm5t9AcY",
    authDomain: "mobilebase-ed7c1.firebaseapp.com",
    databaseURL: "https://mobilebase-ed7c1.firebaseio.com",
    projectId: "mobilebase-ed7c1",
    storageBucket: "mobilebase-ed7c1.appspot.com",
    messagingSenderId: "543963942923"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    matrizCurricularPage,
    CursoPage,
    ExtensaoPage,
    FinanciamentosPage,
    InfraCursoPage,
    PesquisaPage,
    VideosPage,
    NoticiaDetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    matrizCurricularPage,
    CursoPage,
    ExtensaoPage,
    FinanciamentosPage,
    InfraCursoPage,
    PesquisaPage,
    VideosPage,
    NoticiaDetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {matrizCurricularPage } from '../pages/matrizCurricular/matrizCurricular';
import {VideosPage } from '../pages/videos/videos';
import {ExtensaoPage} from '../pages/extensao/extensao';
import {FinanciamentosPage} from '../pages/financiamentos/financiamentos';
import {InfraCursoPage} from '../pages/infra-curso/infra-curso';
import {PesquisaPage} from '../pages/pesquisa/pesquisa';
import {CursoPage} from '../pages/curso/curso';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

public rootPage: any = HomePage;

public pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',                    component: HomePage,             icon: 'home' },
      { title: 'Matriz Curricular',       component: matrizCurricularPage, icon: 'clipboard'  },
      { title: 'Curso',                   component: CursoPage,            icon: 'flask'  },
      { title: 'Cursos de Extensão',      component: ExtensaoPage ,        icon: 'briefcase' },
      { title: 'Infraestrutura do Curso', component: InfraCursoPage,       icon: 'map'  },
      { title: 'Projetos',                component: PesquisaPage,         icon: 'settings'  },
      { title: 'Financiamentos',          component: FinanciamentosPage,   icon: 'card'  },
      { title: 'Videos',                  component: VideosPage,           icon: 'film'  }

    ];

  }

  goToPage(page){
    this.nav.setRoot(page);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

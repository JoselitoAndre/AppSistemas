import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfraCursoPage } from './infra-curso';

@NgModule({
  declarations: [
    InfraCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfraCursoPage),
  ],
  exports: [
    InfraCursoPage
  ]
})
export class InfraCursoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoPage } from './curso';

@NgModule({
  declarations: [
    CursoPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoPage),
  ],
  exports: [
    CursoPage
  ]
})
export class CursoPageModule {}

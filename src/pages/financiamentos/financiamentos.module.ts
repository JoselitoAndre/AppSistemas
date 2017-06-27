import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanciamentosPage } from './financiamentos';

@NgModule({
  declarations: [
    FinanciamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanciamentosPage),
  ],
  exports: [
    FinanciamentosPage
  ]
})
export class FinanciamentosPageModule {}

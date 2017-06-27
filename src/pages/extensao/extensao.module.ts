import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtensaoPage } from './extensao';

@NgModule({
  declarations: [
    ExtensaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtensaoPage),
  ],
  exports: [
    ExtensaoPage
  ]
})
export class ExtensaoPageModule {}

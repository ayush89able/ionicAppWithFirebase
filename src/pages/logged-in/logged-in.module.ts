import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedInPage } from './logged-in';

@NgModule({
  declarations: [
    LoggedInPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggedInPage),
  ],
})
export class LoggedInPageModule {}

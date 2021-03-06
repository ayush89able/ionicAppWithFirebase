import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../../pages/post/post';
import { AllPostsPage } from '../../pages/all-posts/all-posts';
import { ProfilePage } from '../../pages/profile/profile';
import { UploadImagePage } from '../../pages/upload-image/upload-image';

 
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root=PostPage;
  tab2Root=AllPostsPage;
  tab3Root=UploadImagePage;
  tab4Root=ProfilePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}

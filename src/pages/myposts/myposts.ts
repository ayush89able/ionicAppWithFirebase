import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider} from '../../providers/firebase/firebase';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the MypostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myposts',
  templateUrl: 'myposts.html',
})
export class MypostsPage {
  myPostData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider, public fireData: FirebaseProvider) {
    this.fireData.fetchMyPosts();
    this.getPosts();
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypostsPage');
  }
  getPosts()
  {
      this.fireData.fetchMyPosts().then((data)=>{
      this.myPostData=this.global.myPosts;
      console.log(this.myPostData);
    })
  }  


}

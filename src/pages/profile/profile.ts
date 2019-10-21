import { LoginPage } from './../login/login';
import { FIREBASE_CONFIG } from './../../app/app.firebase.config';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  username:string;
  email:string;
  age:number;
  occupation:string;

  imagedata:any;
  logoimagedata:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider,
              public fireData:FirebaseProvider) {
    this.username=global.userNAME;
    this.email=this.global.Email;
    this.age=this.global.Age;
    this.occupation=this.global.Occupation;

    console.log(this.global.Email);
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  ionViewWillEnter(){
    this.getImageLogoUrl();
    this.imagedata=this.global.imageDATA;
    this.logoimagedata=this.global.logoIMAGEDATA;
    console.log(this.imagedata);
    console.log(this.logoimagedata);
  }

  getImageLogoUrl()
  {
    this.fireData.getPicsData().then((data)=>{
      console.log("pic url data",data);
    })
    .catch((error)=>{
      console.log(error);
      });
  }
  
  Logout()
  {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
    this.navCtrl.push(LoginPage);
  }
  

}


// uploadProfile(data, picType) {
//   var storageLocation = "";
//   if (picType == "logo") {
//     storageLocation = '/photos/logo/';
//     this.fireData.uploadProfile(data, storageLocation).then((url) => {
//       console.log("url imageUpload", url)
//       this.logoImageData = url;
//       this.showSuccesfulUploadAlert();
//     })
//   } else if (picType == "backgroundImage") {
//     storageLocation = '/photos/background/';
//     this.fireData.uploadProfile(data, storageLocation).then((url) => {
//       console.log("url back", url)
//       this.backgroundImage = url;
//       this.showSuccesfulUploadAlert();
//     })
//   }
// }
import { TabsPage } from './../tabs/tabs';
import { MypostsPage } from './../myposts/myposts';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from "firebase";
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { GlobalProvider } from './../../providers/global/global';
import {AllPostsPage} from '../all-posts/all-posts'
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({   
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  // rootPage:any = TabsPage;
  fbdata:any;
  postForm:any;
  userID:any;
  NameData:any;
  username:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
   public alertCtrl: AlertController, public fireData: FirebaseProvider, public global:GlobalProvider) {
    this.initialize();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
    this.getName();
    

    
  }

  initialize()
  {
    this.postForm=this.formBuilder.group({
      postTitle:['',Validators.compose([Validators.required])],
      postBody:['',Validators.compose([Validators.required])]
    })
  }

  addPostIdToProvider( ){

  var formaData =  this.postForm
  this.fireData.addPostFire( formaData).then((data)=>{
    
  })
  
  .catch(error=>{
    console.log(error);
  })
  this.initialize();
  this.showAlertOnPost(); 
} 

  getName()
  { 
  this.fireData.getuserName().then((data)=>{
  this.NameData=data;
  console.log(this.NameData);
  this.global.Age=this.NameData[0];
  this.username=this.NameData[2];
  this.global.Occupation=this.NameData[3];
  this.global.userNAME=this.username;
  console.log('Name=',this.username);
  console.log('Name=',this.global.userNAME);
  })
  }

  showAlertOnPost(){
    let alert=this.alertCtrl.create({
      title: 'Posted Successfull',
      buttons: ['Ok'],      
    });
    alert.present();
  }

  onClickWatchMyPosts()
  {
    this.navCtrl.push(MypostsPage);
  }

}


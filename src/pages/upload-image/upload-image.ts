import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the UploadImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {
  logo: any;
	imageData: string = '';
  backgroundImage: any;
  logoImageData: any;
  
  uid:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireData:FirebaseProvider,
              public global:GlobalProvider, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadImagePage');
  }

  onImageSelect(event, picType) {
    this.logo = 'default';
    this.imageData = event.src.split(',')[1];
    console.log('image data', this.imageData);
    this.uploadProfile( this.imageData,picType);
    
}


uploadProfile(data, picType) {
  var storageLocation = "";
  this.uid=this.global.userID;
  if (picType == "logo") {
    storageLocation = '/users/'+this.uid+'/photos/logo/';
    this.fireData.uploadProfile(data, storageLocation).then((url) => {
      console.log("url imageUpload", url)
      this.logoImageData = url;
      this.global.logoIMAGEDATA=this.logoImageData;
      console.log("global logo data",this.global.logoIMAGEDATA);
      this.showSuccesfulUploadAlert();
    })
  } else if (picType == "backgroundImage") {
    storageLocation = '/users/'+this.uid+'/photos/background/';
    this.fireData.uploadProfile(data, storageLocation).then((url) => {
      console.log("url back", url)
      this.backgroundImage = url;
      this.global.imageDATA=this.backgroundImage;
      console.log("global image data",this.global.imageDATA);
      this.showSuccesfulUploadAlert();
    })
  }
}

showSuccesfulUploadAlert() {
  let alert = this.alertCtrl.create({
    title: 'Uploaded!',
    subTitle: 'Picture is uploaded ',
    buttons: ['OK']
  });
  alert.present();

  // clear the previous photo data in the variable

}

onImgRemoved(event) {
  this.logo = null;
}

getImageLogoUrl()
{
  this.fireData.addImageUrl().then((data)=>{
  
  
  })
  .catch((error)=>{
    console.log(error);
    });
}

done()
{
  this.getImageLogoUrl();
}


}

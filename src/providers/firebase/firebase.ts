import { GlobalProvider } from './../global/global';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from "lodash";



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider { 
  postId:any;
  userId:any; 
  userName:any;
  picsurl:any;

  constructor( public global:GlobalProvider) {
    console.log('Hello FirebaseProvider Provider');
  }

    addPostFire(formData) {
		return new Promise((resolve, reject) => {
		
			var dbRef = firebase.database().ref('/users/' + this.global.userID).child('Posts').push();

      var uniquePostKey = dbRef.key;
      // this.postId = uniquePostKey;
      this.global.postID=uniquePostKey;

			console.log("Unique post key=", dbRef.key)
			// Add post Data to the user
			dbRef.set({
				PostTitle: formData.value.postTitle,
        PostBody: formData.value.postBody,
        UserId: this.global.userID,
        PostId: uniquePostKey,
      
			}, () => {

				// Add allPosts Globally
				var gDbRef = firebase.database().ref('/allPosts/').child(uniquePostKey);
				  gDbRef.set({
					PostTitle: formData.value.postTitle,
          PostBody: formData.value.postBody,
          Name: this.global.userNAME,
          UserId: this.global.userID,
				}, () => {
					resolve({ success: true });

				});
			});
		});
  }
  
      // this method is called for registeration of member
      addUserFire(formData)
      {
      return new Promise((resolve, reject) => {
      var dbRef = firebase.database().ref('/users/' + this.global.userID)
      console.log("user key=", dbRef.key)
			// Add userData to the user
			dbRef.set({
			  Name: formData.value.name,
        UserId: this.global.userID,
        Email: formData.value.email,
        Age: this.global.Age,
        Occupation: this.global.Occupation,
   
			});
		});
  }
  
  getuserName()
  {
    return new Promise((resolve,reject)=>{
      var uid = this.global.userID;
      console.log(uid);
      var dbRef= firebase.database().ref('/users/' + uid)
      dbRef.once('value',(Name)=>{
      this.userName=_.toArray(Name.val());
      console.log(this.userName);
      resolve( this.userName);
      

      }).catch(error=>{
        reject(error);
      });
    });
  }

  fetchAllPosts()
  {
    return new Promise((resolve,reject)=>{
      // var uid=this.global.userID;
      var dbref=firebase.database().ref('/allPosts')
      dbref.on('value',(posts)=>{
        var allPostsArr=_.toArray(posts.val());
        console.log('all posts on fireData',allPostsArr);
        this.global.allPosts=allPostsArr;
        console.log('global data for all posts',this.global.allPosts);
        resolve(allPostsArr);
      })
    });
  }

  fetchMyPosts()
  {
    return new Promise((resolve,reject)=>{
      var uid=this.global.userID;
      var dbref=firebase.database().ref('/users/'+uid+'/Posts/')
      dbref.on('value',(posts)=>{
        var myPostsArr=_.toArray(posts.val());
        console.log('my posts on fireData',myPostsArr);
        this.global.myPosts=myPostsArr;
        console.log('global data for my post',this.global.myPosts);
        resolve(myPostsArr);
      })
    });
  }

  uploadProfile(data, storageLocation) {
		var filename = (new Date()).getTime() + '.jpg';
		let uploadTask = firebase.storage().ref(storageLocation + filename).putString(data, 'base64', { contentType: 'image/jpeg' });
		return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', (snapshot) =>{

			}, (err) => {
				reject(false);
			}, () => {
				console.log(uploadTask.snapshot.downloadURL);

				resolve(uploadTask.snapshot.downloadURL);
				return;

			});
		});
  }

  addImageUrl()
  {
    var uniquePicsKey;
  return new Promise((resolve, reject) => {
  var dbRef = firebase.database().ref('/users/' + this.global.userID).child('Pics').push()
  var uniquePicsKey=dbRef.key
  console.log("unique pic key=",dbRef.key);
  this.global.picsID=uniquePicsKey;
  console.log("global pics id",this.global.picsID);
  // var dbRefTwo = firebase.database().ref('/users/' + this.global.userID +'/Pics/'+ uniquePicsKey)
  dbRef.set({
    ImageUrl: this.global.imageDATA,
    LogoUrl: this.global.logoIMAGEDATA,
    PicsUrl: uniquePicsKey,
    
  }, () => {
    
  });
});
}

getPicsData()
{
  return new Promise((resolve,reject)=>{
    var uid = this.global.userID;
    console.log(uid);
    var dbRef= firebase.database().ref('/users/' + uid + '/Pics/')
    dbRef.once('value',(picUrl)=>{
    this.picsurl=_.toArray(picUrl.val());
    console.log(this.picsurl);
    this.global.picsData=this.picsurl;
    resolve( picUrl);
    

    }).catch(error=>{
      reject(error);
    });
  });
}

  
}



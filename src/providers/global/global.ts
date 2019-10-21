
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  userID:string='';
  postID:string='';
  userNAME:string='';
  allPosts:any;
  myPosts:any;
  Email:string;
  Age:number;
  Occupation: string;
  picsID:string;
  picsData:any;

  logoIMAGEDATA:any;
  imageDATA:any;

  constructor() {
    console.log('Hello GlobalProvider Provider');
    console.log(this.userID);
  }

}

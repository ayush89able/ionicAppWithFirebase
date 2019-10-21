import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { AllPostsPage} from './../pages/all-posts/all-posts'
import { MypostsPage} from '../pages/myposts/myposts';
import { PostPage } from './../pages/post/post';
import { LoggedInPage } from './../pages/logged-in/logged-in';
import { ProfilePage} from './../pages/profile/profile';
import { TabsPage } from './../pages/tabs/tabs';
import { UploadImagePage} from './../pages/upload-image/upload-image';

import { AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { HttpModule } from '@angular/http';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { GlobalProvider } from '../providers/global/global';

import { ImageUploadModule } from "angular2-image-upload";
import { PhotoViewer } from '@ionic-native/photo-viewer';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoggedInPage,
    PostPage,
    AllPostsPage,
    MypostsPage,
    ProfilePage,
    TabsPage,
    UploadImagePage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
    ImageUploadModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoggedInPage,
    PostPage,
    AllPostsPage,
    MypostsPage,
    ProfilePage,
    TabsPage,
    UploadImagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    GlobalProvider,
    PhotoViewer,
  ]
})
export class AppModule {} 

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { RoomPage } from '../pages/room/room';
import { HomePage } from '../pages/home/home';

const config = {
    apiKey: "AIzaSyDspITZuKbzr2G_xwED5_cJWz7eZ61fO2c",
    authDomain: "bigmomma-chat.firebaseapp.com",
    databaseURL: "https://bigmomma-chat.firebaseio.com",
    projectId: "bigmomma-chat",
    storageBucket: "bigmomma-chat.appspot.com",
    messagingSenderId: "44575375340"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = RoomPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}


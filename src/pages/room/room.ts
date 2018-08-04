import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { RegisterRoomPage } from '../register-room/register-room'
import { HomePage } from '../home/home'
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

	rooms = [];
	ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.ref.on('value', resp => {
	    this.rooms = [];
	    this.rooms = snapshotToArray(resp);
	    console.log(this.rooms);
  	});
  }

  ionViewDidLoad() {
    console.log(this.rooms);

  }

  	registerRoom() {
	  this.navCtrl.push(RegisterRoomPage);
	}

	joinRoom(key) {
	  this.navCtrl.setRoot(HomePage, {
	    key:key,
	    nickname:"faizal"
	  });
	}

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

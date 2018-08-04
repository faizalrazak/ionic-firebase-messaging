import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from '../room/room'
import * as firebase from 'Firebase';
/**
 * Generated class for the RegisterRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-room',
  templateUrl: 'register-room.html',
})
export class RegisterRoomPage {

	data = { roomname:'' };
	ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterRoomPage');
  }

  	addRoom() {
	  let newData = this.ref.push();
	  newData.set({
	    roomname:this.data.roomname
	  });
	  console.log(newData.path.pieces_[1])
	  this.navCtrl.pop();
	}

}

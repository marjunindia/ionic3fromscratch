import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the GreetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greeting',
  templateUrl: 'greeting.html',
})
export class GreetingPage {

  personName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast:ToastController) {
  }

  showGreeting(name:string){
    console.log(name);
    console.log(this.personName);
    this.toast.create({
      message:'Hello '+name,duration:3000}).present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetingPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigatetosecond():void{
    this.navCtrl.push('SecondPage',  {message:'hello from the home page'});
  }

  ionViewDidLoad() {
    console.log('Fired only when a view is stored in memory. This event is NOT fired on entering a view that is already cached. It’s a nice place for init related tasks.');
  }
  ionViewWillEnter(){
    console.log('It’s fired when entering a page, before it becomes the active one. Use it for tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.)');
  }
  ionViewDidEnter(){
    console.log('Fired when entering a page, after it becomes the active page. Quite similar to the previous one.')
  }
  ionViewWillLeave(){
    console.log('Fired when you leave a page, before it stops being the active one. Use it for things you need to run every time you are leaving a page (deactivate event listeners, etc.)');
  }
  ionViewDidLeave(){
    console.log('Fired when you leave a page, after it stops being the active one. Similar to the previous one.')
  }
  ionViewWillUnload(){
      console.log('Fired when a view is going to be completely removed (after leaving a non-cached view)');
  }

  // Nav guards
  // It is important to highlight that Nav Guards are executed before any other lifecycle event method.

  ionViewCanEnter(){
    console.log(' Fired before entering into a view, allows you to control whether the view can be accessed or not (returning true or false)')
  }

  ionViewCanLeave(){
    console.log(' Fired before leaving a view, allows you to control whether the view can be left or not');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GithubsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-githubsearch',
  templateUrl: 'githubsearch.html',
})
export class GithubsearchPage {
  username:string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GithubsearchPage');
  }

  getUserInformation():void{
    this.navCtrl.push('ProfileSearchResultsPage',{username:this.username});
  }
}

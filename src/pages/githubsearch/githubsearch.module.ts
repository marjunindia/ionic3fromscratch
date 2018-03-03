import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GithubsearchPage } from './githubsearch';

@NgModule({
  declarations: [
    GithubsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(GithubsearchPage),
  ],
})
export class GithubsearchPageModule {}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../../models/user.interface';
import {USER_LIST} from '../../mocks/user.mock';


import  'rxjs/add/operator/map';
import  'rxjs/add/observable/of';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }

  /*
    Finding the username  from within userlist,equal to  username passed in
    returning the results as an observable
  */
  mockGetUserInformation(username:string):Observable<User>{
  return Observable.of(USER_LIST.filter(user=>user.name==username)[0]);
  }
 
}

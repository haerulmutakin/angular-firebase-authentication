import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().onAuthStateChanged(function(userId) {
        (userId) ? resolve(userId) : reject('No user logged in');
      });
    });
  }
}

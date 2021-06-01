import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  signOut() {
    window.sessionStorage.clear();
    window.sessionStorage.removeItem(TOKEN_KEY);
    this.loggedIn.next(false);

  }

  public saveToken(token: string):void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    let token:any = sessionStorage.getItem(TOKEN_KEY);
    if(token!=null){
      this.loggedIn.next(true)
    }
      return token;
    }
}

import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  URL = 'http://localhost:8080/api/auth/';
  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<any> {
    return this.http.post(this.URL + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, this.httpOptions);
  }

  register(user:any): Observable<any> {
    return this.http.post(this.URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, this.httpOptions);
  }
}


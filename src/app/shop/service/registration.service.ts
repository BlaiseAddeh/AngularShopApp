import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  userRestAPI = 'http://localhost:3000/user';

  registerUser(user) {
   return this.http.post(this.userRestAPI, user);
  }

}

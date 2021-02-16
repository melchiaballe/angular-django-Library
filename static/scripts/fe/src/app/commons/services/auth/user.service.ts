import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { AUTH_USER, CHANGE_PASSWORD, AUTH_DEACTIVATE, CHANGE_EMAIL } from '../../constants/api.constants';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) { }

  /* USER UPDATE
   * @desc : sends a request to the backend server to update
   *         the user's information.
   */
  update(data) {
    return this.http.post(AUTH_USER, data)
      .toPromise()
      .then(resp => { this.auth.user = new User(resp); return resp; })
      .catch(err => { return Promise.reject(err); })
    ;
  }

  updatePassword(data){
    return this.http.put(CHANGE_PASSWORD, data)
      .toPromise()
      .then(resp => { return resp; } )
      .catch(err => { return Promise.reject(err); })
  }

  updateEmail(data){
    return this.http.put(CHANGE_EMAIL, data)
      .toPromise()
      .then(resp => { return resp; } )
      .catch(err => { return Promise.reject(err); })
  }

  addPassword(data){
    return this.http.post(CHANGE_PASSWORD, data)
      .toPromise()
      .then(resp => { return resp; } )
      .catch(err => { return Promise.reject(err); })
  }

  deactivate(data){
    return this.http.post(AUTH_DEACTIVATE, data)
    .toPromise()
    .then(resp => { return resp; } )
    .catch(err => { return Promise.reject(err); })
  }


}

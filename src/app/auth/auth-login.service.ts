/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private _isAuthenticated = false;

  constructor(private fireAuth: AngularFireAuth) { }

  createUser(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public setAuthenticated(isAuthenticated: boolean) {
    this._isAuthenticated = isAuthenticated;
  }
}

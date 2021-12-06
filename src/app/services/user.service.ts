import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public profileImage = '../../../../assets/icon/default-user.svg';

  constructor() { }
}

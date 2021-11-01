import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/auth/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor(private auth: AuthLoginService, private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClick(): void{
    this.auth.login(this.email, this.password).then((response)=>{
      this.userLoggedFlow(response);
    });
  }

  onCreateUserButtonClick(): void{
    this.auth.createUser(this.email, this.password).then((response)=>{
      this.userLoggedFlow(response);
    });
  }

  private userLoggedFlow(response: any) {
    const uid = response.user.uid;

    if (uid) {
      this.auth.setAuthenticated(true);
      this.router.navigateByUrl('/home');
    }
  }
}

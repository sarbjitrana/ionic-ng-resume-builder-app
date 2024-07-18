import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe();
   // this.router.navigate(['/tabs']);
  }
}

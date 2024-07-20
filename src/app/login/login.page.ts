import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController,private authService: AuthService,private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe();
   // this.router.navigate(['/tabs']);
  }
  navigateToSignup() {
    this.navCtrl.navigateForward('/signup');
  }

  navigateToForgotPassword() {
    this.navCtrl.navigateForward('/forgot-password');
  }
}

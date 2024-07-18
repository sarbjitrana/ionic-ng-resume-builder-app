// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: any = null;
  private apiUrl = 'http://localhost:3000';
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(this.apiUrl+'/auth/login', { email, password })
      .pipe(tap(response => {
        this.token = response.access_token;
        this.authStatusListener.next(true);
        this.router.navigate(['/tabs']);
      }));
  }

  register(email: string, password: string) {
    return this.http.post<{ access_token: string }>(this.apiUrl+'/auth/register', { email, password })
      .pipe(tap(response => {
        this.token = response.access_token;
        this.authStatusListener.next(true);
        this.router.navigate(['/tabs']);
      }));
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }
}

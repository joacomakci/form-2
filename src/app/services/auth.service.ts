import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/auth/admin/login';
  private signupUrl = 'http://your-api-url/signup';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email: username, password });
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.signupUrl, { username, email, password });
  }
}

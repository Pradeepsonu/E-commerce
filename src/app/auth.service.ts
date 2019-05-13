import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const loginInfo = {
        username: username,
        password: password
      }
      const token = await this.http.post("http://localhost:3000/auth/login", loginInfo).toPromise()
      return true;
    } catch (err) {
      console.log(err)
    }
  }

  insert(user: any) {
    return this.http.post("http://localhost:3000/auth/register", user).toPromise();
  }
}

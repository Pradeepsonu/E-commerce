import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  text;
  success;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  async login() {
    try {
      const isValid: boolean = await this.authService.login(this.username, this.password)
      if (isValid) {
        this.router.navigate(['dashboard'])
      }
      else {

        this.success = false;

        this.text = "Invalid Credentials"
      }

    } catch (err) {
      console.log(err)
    }
  }

  Cancel() {
    this.username = '';
    this.password = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    })
  }

  get f() {
    return this.signupForm.controls
  }

  async onSubmit() {
    try {
      debugger;
      this.submitted = true;
      if (this.signupForm.invalid) return
      await this.authService.insert(this.signupForm.value)
      alert("User registered Successfully");
      this.navigateToLogin()
    }
    catch (err) {
      console.log(err)
      alert(err)

    }
  }
  navigateToLogin() {
    this.router.navigate([''])
  }
}

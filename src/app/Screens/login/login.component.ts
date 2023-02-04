import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup | any;
  hasFormErrors = false;
  loginSuccesFlag = false;
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userFB: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {

    this.myForm = this.userFB.group({
      username: ['', [Validators.required]],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    const username = this.myForm.controls['username'].value.trim();
    const passw = this.myForm.controls['password'].value.trim();
    this.authService.signin(username, passw);
  }
}

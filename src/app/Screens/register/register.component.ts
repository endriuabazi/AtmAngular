import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  myForm: FormGroup | any;
  hasFormErrors = false;
  loginSuccesFlag = false;
  hide = true;
  constructor(
    private authService: AuthService,
    private userFB: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Create form
    this.myForm = this.userFB.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],

      email: ['', [Validators.required, , Validators.email]],
      phone: ['', [Validators.required]],

      age: ['', [Validators.required]],

      password: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    const data = {
      username: this.myForm.value.username,
      name: this.myForm.value.name,
      surname: this.myForm.value.surname,
      email: this.myForm.value.email,
      age: this.myForm.value.age,
      password: this.myForm.value.password,
    };

    this.authService.signup(data);
  }
}

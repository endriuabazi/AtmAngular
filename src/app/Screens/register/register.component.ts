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
    private router: Router,
    private userFB: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Create form
    this.myForm = this.userFB.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],

      email: ['', [Validators.required]],

      age: ['', [Validators.required]],

      password: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    const username = this.myForm.controls['username'].value.trim();
    const passw = this.myForm.controls['password'].value.trim();
    return fetch(
      `https://localhost:7018/api/Client/login?username=${username}&password=${passw}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log(response.json());

          this.router.navigate(['/home', username]);
        } else {
          console.log('Error');
          alert('Error');
        }
      })

      .catch((error) => {
        console.error(error);
      });
  }
}

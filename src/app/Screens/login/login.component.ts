import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  myForm: FormGroup|any;
  hasFormErrors = false;
  loginSuccesFlag = false;
  hide = true;

  constructor(private authService: AuthService,private router: Router, private userFB: FormBuilder) {
  
  }
  

  ngOnInit() {
    // Create form
    this.myForm = this.userFB.group({
        username: [
            '',
            [
                Validators.required,
               
            ],
        ],
        password: [
            null,
            Validators.compose([
                Validators.required,
              
            ]),
        ],
    });
}



  // onSubmit() {
  //   const controls = this.myForm.controls;
  //   const username = this.myForm.controls['username'].value.trim();
  //   const passw = this.myForm.controls['password'].value.trim();
  //   if (this.myForm.invalid) {
  //         Object.keys(controls).forEach((controlName) =>
  //             controls[controlName].markAsTouched()
  //         );
  //         this.hasFormErrors = true;
  //         return;
  //     }
  //   this.authService.login(username, passw).subscribe(
  //       (data) => {
  //         console.log(typeof(data));
  //         console.log(data);
  //         if (data == 'Login succesfull!') {
  //           this.router.navigate(['/home',username]);
  //       }
  //       else {
          
  //                 console.log("Error");
  //                 this.openDialog();
  //               }
  //       }
  //     );
  // }

 


  onSubmit(){

    const username = this.myForm.controls['username'].value.trim();
    const passw = this.myForm.controls['password'].value.trim();
    return fetch(
      `https://localhost:7018/api/Client/login?username=${username}&password=${passw}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log(response.json());
  
          this.router.navigate(['/home',username]);
        } else {
          console.log("Error");
          alert("Error");
       
        }
      })
  
      .catch((error) => {
        console.error(error);
      });
  };




}

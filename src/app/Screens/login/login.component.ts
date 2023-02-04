import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private authService: AuthService,private router: Router, private userFB: FormBuilder,private toastr: ToastrService) {
  
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
          this.toastr.success("Login successfully");
          localStorage.setItem('username', username);
          localStorage.setItem('isLoggedIn', 'true');

       
          this.router.navigate(['/home',username]);
        
        } else {
          console.log("Error");
          this.toastr.error("Incorrect username or password");
       
        }
      })
  
      .catch((error) => {
        console.error(error);
        this.toastr.error("Incorrect username or password");
      });
  };




}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Client } from '../Interfaces/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  private baseUrl = `${environment.backendUrl}`;

  signin(username: string, password: string) {
    fetch(
      `${this.baseUrl}/api/Client/login?username=${username}&password=${password}`,
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
          this.toastr.success('Login successfully');
          localStorage.setItem('username', username);
          localStorage.setItem('isLoggedIn', 'true');

          this.router.navigate(['/home', username]);
        } else {
          console.log('Error');
          this.toastr.error('Incorrect username or password');
        }
      })

      .catch((error) => {
        console.error(error);
        this.toastr.error('Incorrect username or password');
      });
  }

  signup(data:any){

    // api/Client/PostClient


    fetch(`${this.baseUrl}/api/Client/PostClient`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 201) {
          this.toastr.success('Registered successfully');
          return response.json();
        } else {
        
          throw new Error('Something went wrong');
          
        }
      })
      .catch(error => {
        console.error(error);
        this.toastr.error("Username already taken");
      });

  }



}

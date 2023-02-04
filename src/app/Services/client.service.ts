import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
 
  constructor(private http: HttpClient,private toastr: ToastrService,  private router: Router) { }
  private baseUrl = `${environment.backendUrl}`;

  
  getClientbyUsername(username: string){

    return this.http.get(`${this.baseUrl}/api/Client/GetClientByUsername?username=${username}`);
    }


editProfile(username: string,data:any){

  fetch(`${this.baseUrl}/api/Client/editProfile?username=${username}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status === 200) {
        const userName = localStorage.getItem('username');
        this.toastr.success('Profile edited success!');
        this.router.navigate(['/home',username]);
        return response.json();
      } else {
        this.toastr.error("Profile edit failed.");
        throw new Error('Something went wrong');
        
      }
    })
    .catch(error => {
      console.error(error);
    
    });

}


changepass(username: string, password: string,resetpassword: string){


    fetch(`${this.baseUrl}/api/Client/changePass?username=${username}&newPassword=${password}&resetPassword=${resetpassword}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
    })
      .then(response => {
        if (response.status === 200) {
          this.toastr.success('Password changed successfully!');
          this.router.navigate(['']);
          return response.json();
        } else {
          this.toastr.error("Password change failed.");
          throw new Error('Something went wrong');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
}


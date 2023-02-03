import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private toastr: ToastrService,private router: Router) { }
  private baseUrl = `${environment.backendUrl}`;
  
  login(username: string, password: string){
    const headers = new HttpHeaders({ Accept: 'application/json','Content-Type': 'application/json' });

    const loginUrl = `${this.baseUrl}/api/Client/login?username=${username}&password=${password}`;
    return this.http.post(loginUrl, {}, {headers: { Accept: 'application/json','Content-Type': 'application/json'}});
  }


  signin(username: string, password: string){

     fetch(
      `${this.baseUrl}/api/Client/login?username=${username}&password=${password}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ) .then((response) => {
      if (response.status === 200) {
        console.log(response);
        console.log(response.json());
        this.toastr.success("Login successfully");
        this.router.navigate(['/home',username]);
       
        return true;

      } else {
        console.log("Error");
        this.toastr.error("Incorrect username or password");
  return false;
      }
    })

    .catch((error) => {
      console.error(error);
      this.toastr.error("Incorrect username or password");
      return false;
    });
  }
}


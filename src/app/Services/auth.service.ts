import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
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
        return true;

      } else {
        console.log("Error");
        alert("Error");
  return false;
      }
    })

    .catch((error) => {
      console.error(error);
      return false;
    });
  }
}


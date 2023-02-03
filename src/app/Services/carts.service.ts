import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(private http: HttpClient) { }
  private baseUrl = `${environment.backendUrl}`;
  

  getCartsbyClient(username: string){

  return this.http.get(`${this.baseUrl}/api/Cart/GetCartsFromClients?username=${username}`);
  }

  
withdraw(username: string , amount: number){
  fetch(
    `${this.baseUrl}/api/Cart/withdraw?cartName=${username}&amount=${amount}`,
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
      alert("Transaction completed successfully");
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

  deposit(username: string, amount: number){
    fetch(
      `${this.baseUrl}/api/Cart/deeposit?cartName=${username}&amount=${amount}`,
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
        alert("Transaction completed successfully");
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


getCartByName(name: string){

  // https://localhost:7018/api/Cart/GetCartByName?cartname=4444

  return this.http.get(`${this.baseUrl}/api/Cart/GetCartByName?cartname=${name}`);

}





}


export interface Cart {

    
  id: string;
  cvv: number; 
  cartNumber: string;
  name: string,
  surname: string,
  currency: string;
  balance: number;


}

function deposit(username: string, string: any, amount: number, number: any) {
  throw new Error('Function not implemented.');
}

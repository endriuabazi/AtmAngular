import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartsService } from 'src/app/Services/carts.service';
interface Lista {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  cartName: any;
  currency: any;
  panelOpenState = false;
  withdrawForm: FormGroup|any;
  depositForm: FormGroup|any;
  sendForm: FormGroup|any;
  balance: any;
  // amountList  : Lista[] = [
  //   {value: 1000, viewValue: '1000'},
  //   {value: 2000, viewValue: '2000'},
  //   {value: 5000, viewValue: '5000'},
  //   {value: 10000, viewValue: '10000'},
  //   {value: 20000, viewValue: '20000'},
  //   {value: 30000, viewValue: '30000'},
  // ];

  constructor(private route: ActivatedRoute , private router: Router , private cartService:CartsService, private userFB: FormBuilder,private userFBW: FormBuilder) { }
  
  ngOnInit(){
    this.cartName = this.route.snapshot.paramMap.get('id');
    this.getBalance()
  

    this.withdrawForm = this.userFB.group({
     
      amount: [
          null,
          Validators.compose([
              Validators.required,
            
          ]),
      ],
  });

  this.depositForm = this.userFBW.group({
     
    amount: [
        null,
        Validators.compose([
            Validators.required,
          
        ]),
    ],
});
  }

  withdraw(){
    const amount = this.withdrawForm.controls['amount'].value;
this.cartService.withdraw(this.cartName, amount);

this.cartService.getCartByName(this.cartName).subscribe((data:any) => {

  this.balance = data.balance;
  this.currency = data.currency;
  
      });


  }

  deposit(){
    const amount = this.depositForm.controls['amount'].value;
this.cartService.deposit(this.cartName, amount);
this.getBalance();
  }

  getBalance(){

    this.cartService.getCartByName(this.cartName).subscribe((data:any) => {

      this.balance = data.balance;
      this.currency = data.currency;
      
          });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CartsService } from 'src/app/Services/carts.service';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent  implements OnInit{
  myForm: FormGroup | any;
  userName:any;
  surname:any;
  name:any;
  phone:any;
  age:any;
  email:any;
  hasFormErrors = false;
  loginSuccesFlag = false;
  hide = true;
  constructor(
    private authService: AuthService,
    private userFB: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute , 
   private clientService: ClientService,
    private router: Router
  ) {}
 

  isDisabled = true; // or true, depending on your desired initial state

  ngOnInit() {
    this.userName = localStorage.getItem('username');

   const bisha= this.clientService.getClientbyUsername(this.userName).subscribe((data:any) => {
      this.surname = data[0].surname;
      this.name= data[0].name;
      this.email = data[0].email;
      this.age = data[0].age;
      this.phone = data[0].phone;
      console.log(data);

    
 // Create form
 this.myForm = this.userFB.group({
  username: [this.userName],
  name: [this.name],
  surname: [this.surname],

  email: [this.email],
  phone: [this.phone],

  age: [this.age],


});
    });


  }

  onSubmit() {
    const data = {
     
      name: this.myForm.value.name,
      surname: this.myForm.value.surname,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
      username: this.myForm.value.username,
      age: this.myForm.value.age,
  
 
    };

    this.clientService.editProfile(this.userName,data)
  }
  

}

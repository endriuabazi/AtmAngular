import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent {
  myForm: FormGroup | any;
  hasFormErrors = false;
  loginSuccesFlag = false;
  hide = true;
username: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userFB: FormBuilder,
    private toastr: ToastrService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.myForm = this.userFB.group({
      newpass: [null,  Validators.compose([Validators.required])],
      resetpass: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
     
    const npass = this.myForm.controls['newpass'].value.trim();
    const rpass = this.myForm.controls['resetpass'].value.trim();
  this.clientService.changepass(this.username,npass,rpass);
  }
}

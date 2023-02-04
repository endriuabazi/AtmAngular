import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  username = localStorage.getItem('username');
  constructor(private router: Router) {}
  goToEditProfile() {
    this.router.navigate(['/editProfile', this.username]);
  }
  goToChangePass() {
    this.router.navigate(['/changePass', this.username]);
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }
}

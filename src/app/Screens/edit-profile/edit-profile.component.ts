import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  username = localStorage.getItem('username');

}

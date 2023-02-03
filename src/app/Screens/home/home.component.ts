import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, CartsService } from 'src/app/Services/carts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: any;
  carts: any;
  constructor(private route: ActivatedRoute , private cartService:CartsService , private router: Router) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('id');
    this.cartService.getCartsbyClient(this.username).subscribe(carts => {
      this.carts = carts;
    });

  }
goToActions(cartName: string){

  this.router.navigate(['/actions',cartName]);

}

logout(){
  this.router.navigate(['']);
}

}

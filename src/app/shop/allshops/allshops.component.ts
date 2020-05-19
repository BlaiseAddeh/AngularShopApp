import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allshops',
  templateUrl: './allshops.component.html',
  styleUrls: ['./allshops.component.css']
})
export class AllshopsComponent implements OnInit {

  searchString = '';
  shops: any = [];

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit(): void {
    this.shopService.getAllShops().subscribe(response => {
        console.log(response);
        this.shops = response;
    }, error => {
        console.log(error);
    });
  }

  shopDetailPage = (shop) => {
    console.log(shop);
    this.router.navigate(['/shopdetail', shop.id]);
  }

}

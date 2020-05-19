import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit {

  clickedShopid = 0;

  constructor(private activeRoute: ActivatedRoute,
              private shopService: ShopService) { }

  ngOnInit(): void {
    console.log(this.activeRoute);
    console.log(this.activeRoute.snapshot.params.shopid);
    // tslint:disable-next-line:radix
    this.clickedShopid = parseInt(this.activeRoute.snapshot.params.shopid);
    this.shopService.getShopById(this.clickedShopid).subscribe(
      response => {
         console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}

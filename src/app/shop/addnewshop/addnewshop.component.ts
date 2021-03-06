import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-addnewshop',
  templateUrl: './addnewshop.component.html',
  styleUrls: ['./addnewshop.component.css']
})
export class AddnewshopComponent implements OnInit {

  newShop: any = {};
  shopOwner = 'Shop Owner';
  shopName = '';
  address1 = '';
  address2 = '';
  city = '';
  state = '';
  pincode = '';
  services1 = '';
  services2 = '';
  description = '';
  shopPicture = '';

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  addNewShop = (newshop) => {
    console.log(newshop);
    this.shopService.addNewShop(newshop)
                    .subscribe(response => {
                        console.log(response);
                        this.resetShopForm();
                    }, error => {
                        console.log(error);
                    });
  }

  resetShopForm = () => {
    this.newShop = {};
    this.shopOwner = 'Shop Owner';
    this.shopName = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.pincode = '';
    this.services1 = '';
    this.services2 = '';
    this.description = '';
    this.shopPicture = '';
  }


}

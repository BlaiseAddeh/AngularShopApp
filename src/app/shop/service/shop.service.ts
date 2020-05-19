import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  shopRestAPI = 'http://localhost:3000/shop';

  addNewShop(shop) {
    return this.http.post(this.shopRestAPI, shop);
   }

   getAllShops() {
     return this.http.get(this.shopRestAPI);
   }

   getShopById(id) {
     return this.http.get(this.shopRestAPI + '/' + id);
   }

}

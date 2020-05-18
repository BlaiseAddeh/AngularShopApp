import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllshopsComponent } from './shop/allshops/allshops.component';
import { AddnewshopComponent } from './shop/addnewshop/addnewshop.component';
import { ShopdetailComponent } from './shop/shopdetail/shopdetail.component';
import { AboutusComponent } from './shop/aboutus/aboutus.component';
import { ContactusComponent } from './shop/contactus/contactus.component';
import { HomeComponent } from './shop/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'allshops',
    component: AllshopsComponent
  },
  {
    path: 'addnewshop',
    component: AddnewshopComponent
  },
  {
    path: 'shopdetail',
    component: ShopdetailComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

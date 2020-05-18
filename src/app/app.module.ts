import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shop/header/header.component';
import { SlideshowComponent } from './shop/slideshow/slideshow.component';
import { RegistrationComponent } from './shop/registration/registration.component';
import { ShoutoutComponent } from './shop/shoutout/shoutout.component';
import { AllshopsComponent } from './shop/allshops/allshops.component';
import { AddnewshopComponent } from './shop/addnewshop/addnewshop.component';
import { ShopdetailComponent } from './shop/shopdetail/shopdetail.component';
import { ContactusComponent } from './shop/contactus/contactus.component';
import { AboutusComponent } from './shop/aboutus/aboutus.component';
import { HomeComponent } from './shop/home/home.component';
import { FooterComponent } from './shop/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    RegistrationComponent,
    ShoutoutComponent,
    AllshopsComponent,
    AddnewshopComponent,
    ShopdetailComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupService } from './signup.service';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CardsComponent } from './cards/cards.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeapplianceComponent } from './homeappliance/homeappliance.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { FootwearComponent } from './footwear/footwear.component';
import { CartComponent } from './cart/cart.component';
import { AlertComponent } from './alert/alert.component';
import { DemoMaterialModule } from './demo-material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { ProductService } from './product.service';
import { OrderService } from './order.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    CarouselComponent,
    ProductsComponent,
    CardsComponent,
    ElectronicsComponent,
    AccessoriesComponent,
    ClothesComponent,
    HomeapplianceComponent,
    GroceriesComponent,
    FootwearComponent,
    CartComponent,
    AlertComponent,
    MessageComponent,
    ModalComponent,


  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [AuthService, ProductService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeapplianceComponent } from './homeappliance/homeappliance.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { FootwearComponent } from './footwear/footwear.component';
import { CartComponent } from './cart/cart.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'accessory',
    component: AccessoriesComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'homeappliance',
    component: HomeapplianceComponent
  },
  {
    path: 'groceries',
    component: GroceriesComponent
  },
  {
    path: 'footwear',
    component: FootwearComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart/message',
    component: MessageComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

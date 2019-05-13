import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToElectronics() {
    this.router.navigate(['electronics'])
  }

  navigateToAccessory() {
    this.router.navigate(['accessory'])
  }

  navigateToClothes() {
    this.router.navigate(['clothes'])
  }

  navigateToHome() {
    this.router.navigate(['homeappliance'])
  }

  navigateToGrocery() {
    this.router.navigate(['groceries'])
  }

  navigateToFootwear() {
    this.router.navigate(['footwear'])
  }
}

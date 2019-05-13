import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() content = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate([''])
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

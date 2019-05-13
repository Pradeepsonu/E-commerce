import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeappliance',
  templateUrl: './homeappliance.component.html',
  styleUrls: ['./homeappliance.component.css']
})
export class HomeapplianceComponent implements OnInit {
  television = [];
  fridges = [];
  washings = [];
  acs = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    const tvs = await this.productService.gethomeAppliance()
    const fridges = await this.productService.getFridges()
    const washings = await this.productService.getWashings()
    const acs = await this.productService.getAcs()
    this.television = tvs['tv'];
    this.fridges = fridges['fridge'];
    this.washings = washings['wash'];
    this.acs = acs['ac'];

    console.log(tvs)
  }
  addCart() {
    this.router.navigate(['cart'])
  }
}

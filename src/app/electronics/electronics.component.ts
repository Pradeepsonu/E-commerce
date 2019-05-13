import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  mobiles = []
  tabs = []
  laptops = []
  searchText;
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {

    const mobiles = await this.productService.getElectronics()
    const tabs = await this.productService.getTabs()
    const laptop = await this.productService.getLaptops()
    this.mobiles = mobiles['mobiles']
    this.tabs = tabs['tabs']
    this.laptops = laptop['laptops']
    console.log(mobiles);
    console.log(tabs);
    console.log(laptop);

  }

  addCart() {
    this.router.navigate(['cart'])
  }

}

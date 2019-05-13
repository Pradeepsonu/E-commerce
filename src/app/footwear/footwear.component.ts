import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  menfootwear = [];
  womenfootwear = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    const mens = await this.productService.getFootwear()
    const womens = await this.productService.getWomen()
    this.menfootwear = mens['men'];
    this.womenfootwear = womens['women'];
  }

  addCart() {
    this.router.navigate(['cart'])
  }

}

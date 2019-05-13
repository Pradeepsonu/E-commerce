import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  mens = [];
  womens = [];
  kids = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    const mens = await this.productService.getClothes()
    const womens = await this.productService.getWomens()
    const kids = await this.productService.getKids()
    this.mens = mens['mens'];
    this.womens = womens['womens'];
    this.kids = kids['kids'];
  }
  addCart() {
    this.router.navigate(['cart'])
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  groceries = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    const grocery = await this.productService.getGrocery()
    this.groceries = grocery['grocery'];
  }
  addCart() {
    this.router.navigate(['cart'])
  }
}

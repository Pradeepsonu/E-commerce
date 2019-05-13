import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  headphones = [];
  backcovers = [];
  drives = [];
  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    const headphones = await this.productService.getAccessory()
    const covers = await this.productService.getCovers()
    const drives = await this.productService.getDrives()
    this.headphones = headphones['heads'];
    this.backcovers = covers['covers'];
    this.drives = drives['drives'];
  }
  addCart() {
    this.router.navigate(['cart'])
  }
}

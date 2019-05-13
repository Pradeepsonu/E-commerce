import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  insert(product: any) {
    return this.http.post("http://localhost:3000/product", product).toPromise();
  }
  getElectronics() {
    return this.http.get("http://localhost:3000/electronics").toPromise();
  }

  getTabs() {
    return this.http.get("http://localhost:3000/electronics/tabs").toPromise();
  }
  getLaptops() {
    return this.http.get("http://localhost:3000/electronics/laptops").toPromise();
  }

  getAccessory() {
    return this.http.get("http://localhost:3000/accessory").toPromise();
  }

  getCovers() {
    return this.http.get("http://localhost:3000/accessory/backcover").toPromise()
  }
  getDrives() {
    return this.http.get("http://localhost:3000/accessory/drives").toPromise()
  }
  getClothes() {
    return this.http.get("http://localhost:3000/clothes").toPromise();
  }
  getWomens() {
    return this.http.get("http://localhost:3000/clothes/womens").toPromise();
  }
  getKids() {
    return this.http.get("http://localhost:3000/clothes/kids").toPromise();
  }
  gethomeAppliance() {
    return this.http.get("http://localhost:3000/homeappliance").toPromise();
  }
  getFridges() {
    return this.http.get("http://localhost:3000/homeappliance/fridge").toPromise();
  }
  getWashings() {
    return this.http.get("http://localhost:3000/homeappliance/washings").toPromise();
  }
  getAcs() {
    return this.http.get("http://localhost:3000/homeappliance/ac").toPromise();
  }
  getGrocery() {
    return this.http.get("http://localhost:3000/grocery").toPromise();
  }
  getFootwear() {
    return this.http.get("http://localhost:3000/footwear").toPromise();
  }

  getWomen() {
    return this.http.get("http://localhost:3000/footwear/women").toPromise();
  }

}

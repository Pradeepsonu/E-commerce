import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      product: ['', Validators.required],
      code: ['', Validators.required],
      quantity: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      landmark: ['', Validators.required]
    })
  }
  get f() {
    return this.orderForm.controls
  }
  async onSubmit() {
    try {
      this.submitted = true;
      if (this.orderForm.invalid) return
      await this.orderService.insert(this.orderForm.value)
      alert("Order Placed Successfully");
      this.router.navigate(['cart/message'])
    }
    catch (err) {
      console.log(err)
      alert(err)

    }
  }
}

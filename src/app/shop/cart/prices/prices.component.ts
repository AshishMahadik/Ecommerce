import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pluck } from 'rxjs';
import { Product } from '../store/product';
import { CustomerService } from '../../services/customer/customer.service';
import { CartService } from '../../services/cart/cart.service';
import { emptycart } from '../store/cart.actions';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  constructor(private customerservice: CustomerService, private cartservice: CartService,
    private store: Store<{ cart: { product: Product[] } }>, private router: Router) { }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  storeproducts: Observable<any> = this.store.select('cart');
  storeprice: Observable<any> = this.store.select('cart').pipe(pluck('price'));
  storelogin: Observable<any> = this.store.select('cart').pipe(pluck('login'));

  deliveryFee = 99;
  flag = false;
  addressid: any = null;

  ngOnInit(): void {
    this.flag = localStorage.getItem('loginuser') ? true : false;
  }

  placeorder() {
    let payload = {
      items: [],
      deliveryFee: this.deliveryFee,
      total: 0,
      address: {}
    }
    document.querySelectorAll('input[name=listGroupRadio]').forEach((item: any) => {
      if (item.checked) {
        this.addressid = item.value;
      }
    });
    if (this.addressid) {
      this.storeproducts.subscribe(res => {
        payload.total = res?.price || 0;
        payload.items = res?.products || [];
      });
      this.customerservice.getaddress(localStorage.getItem('loginuser')!).subscribe((data: any) => {
        console.log(data);
        const { _id, ...newaddress } = data!.at(this.addressid) || {};
        payload.address = newaddress;
        this.cartservice.creat(localStorage.getItem('loginuser')!, payload).subscribe(
          res => {
            // console.log(res);
            this.store.dispatch(emptycart());
            this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
            this.router.navigate(['shop', 'cart', 'confirm', res?.order?._id]);
          },
          err => {
            console.log(err);
          }
        );
      });
    }
    else {
      this.Toast.fire({
        icon: 'error',
        title: 'Please select an address to proceed'
      })
    }
  }
}

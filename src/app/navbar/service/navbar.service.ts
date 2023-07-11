import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerService } from 'src/app/shop/services/customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private service: CustomerService) { }

  flag = new BehaviorSubject<boolean>(false) ;
  customerlogin = new BehaviorSubject<string|undefined>(localStorage.getItem('loginuser')||undefined);
  sellerlogin = new BehaviorSubject<string | undefined>(localStorage.getItem('activeuser') || undefined);
  img = new BehaviorSubject<string | undefined>(undefined);

  changeprofilestate() {
    this.customerlogin.next(localStorage.getItem('loginuser')!);
    this.customerlogin.subscribe(data => {
      this.service.get(data||'').subscribe(res => {
        this.img.next(res.picture);
      });
    })
    

  }
}

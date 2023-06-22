import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../cart/store/cart.reducer';


@NgModule({
  declarations: [
    ShopComponent,
    ListOfProductsComponent,
    SingleProductComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent,
    CustomerProfileComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ImageCropperModule,
    NgxDropzoneModule,
    FormsModule,
    HomeModule,
    StoreModule.forFeature('cart', cartReducer)
  ]
})
export class ShopModule { }
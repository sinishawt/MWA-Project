import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ViewPendingSellersComponent } from './components/admin/view-pending-sellers/view-pending-sellers.component';
import { ViewPendingReviewsComponent } from './components/admin/view-pending-reviews/view-pending-reviews.component';
import { SellerComponent } from './components/seller/seller.component';
import { ManageProductsComponent } from './components/seller/manage-products/manage-products.component';
import { AddProductComponent } from './components/seller/manage-products/add-product/add-product.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { ViewCartComponent } from './components/buyer/view-cart/view-cart.component';
import { LoginComponent } from './components/login/login.component';
import { ViewProductsComponent } from './components/view-products/view-products.component'
import { EditProductComponent } from './components/seller/manage-products/edit-product/edit-product.component';
import { MaintainOrdersComponent } from './components/seller/maintain-orders/maintain-orders.component';
import { ViewOrdersComponent } from './components/buyer/view-orders/view-orders.component';
import { ShippingAddressComponent } from './components/buyer/shipping-address/shipping-address.component';
import { PaymentSettingsComponent } from './components/buyer/payment-settings/payment-settings.component';
import { NotificationsComponent } from './components/buyer/notifications/notifications.component';


const routes: Routes = [
  {path:'',
  component: AppComponent ,
  children:[
    {
      path: '',
       redirectTo:'product',
      pathMatch:'full'
    },
    {
      path: 'product',
      component:ProductListComponent,
   
    },

    {
      path: 'signup',
      component: SignUpComponent
    },

    {
      path : 'viewProduct',
      component : ViewProductsComponent

    },

    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: 'admin/view-pending-sellers',
      component: ViewPendingSellersComponent
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'admin/view-pending-reviews',
      component: ViewPendingReviewsComponent
    },
    {
      path: 'seller',
      component: SellerComponent
    },
    {
      path: 'seller/manage-products',
      component: ManageProductsComponent
    },
    {
      path: 'seller/manage-products/add-products',
      component: AddProductComponent
    },
    {
      path: 'seller/manage-products/edit-products',
      component: EditProductComponent
    },
    {
      path: 'seller/maintain-order',
      component: MaintainOrdersComponent
    },
    {
      path: 'buyer',
      component: BuyerComponent
    },
    {
      path: 'buyer/view-cart',
      component: ViewCartComponent
    },
    {
      path: 'buyer/view-orders',
      component: ViewOrdersComponent
    },
    {
      path: 'buyer/shipping-address',
      component: ShippingAddressComponent
    },
    {
      path: 'buyer/payment-settings',
      component: PaymentSettingsComponent
    },
    {
      path: 'buyer/notifications',
      component: NotificationsComponent
    },
    
    
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

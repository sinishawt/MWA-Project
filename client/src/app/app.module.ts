import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product.service';
import { CourselComponent } from './common/coursel';
import { NavComponent } from './common/navbar';
import { SideBarComponent } from './common/sidebar';
import { AdminComponent } from './components/admin/admin.component';
import { ViewPendingSellersComponent } from './components/admin/view-pending-sellers/view-pending-sellers.component';
import { ViewPendingReviewsComponent } from './components/admin/view-pending-reviews/view-pending-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CourselComponent,
    NavComponent,
    SideBarComponent,
    AdminComponent,
    ViewPendingSellersComponent,
    ViewPendingReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

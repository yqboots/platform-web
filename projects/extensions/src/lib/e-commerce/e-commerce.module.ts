import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqWidgetModule} from '@yq/components';

import {EcommerceProductsComponent} from './products/products.component';
import {EcommerceProductsService} from './products/products.service';
import {EcommerceProductComponent} from './product/product.component';
import {EcommerceProductService} from './product/product.service';
import {EcommerceOrdersComponent} from './orders/orders.component';
import {EcommerceOrdersService} from './orders/orders.service';
import {EcommerceOrderComponent} from './order/order.component';
import {EcommerceOrderService} from './order/order.service';
import {ECommerceFakeDbService} from './e-commerce-fake-db.service';

const routes: Routes = [
  {
    path: 'products',
    component: EcommerceProductsComponent,
    resolve: {
      data: EcommerceProductsService
    }
  },
  {
    path: 'products/:id',
    component: EcommerceProductComponent,
    resolve: {
      data: EcommerceProductService
    }
  },
  {
    path: 'products/:id/:handle',
    component: EcommerceProductComponent,
    resolve: {
      data: EcommerceProductService
    }
  },
  {
    path: 'orders',
    component: EcommerceOrdersComponent,
    resolve: {
      data: EcommerceOrdersService
    }
  },
  {
    path: 'orders/:id',
    component: EcommerceOrderComponent,
    resolve: {
      data: EcommerceOrderService
    }
  }
];

@NgModule({
  declarations: [
    EcommerceProductsComponent,
    EcommerceProductComponent,
    EcommerceOrdersComponent,
    EcommerceOrderComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(ECommerceFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,

    NgxChartsModule,

    YqSharedModule,
    YqWidgetModule
  ],
  providers: [
    EcommerceProductsService,
    EcommerceProductService,
    EcommerceOrdersService,
    EcommerceOrderService
  ]
})
export class EcommerceModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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

import {FuseSharedModule} from '@fuse/core';
import {FuseWidgetModule} from '@fuse/components';

import {EcommerceProductsComponent} from '@fuse/extensions/e-commerce/products/products.component';
import {EcommerceProductsService} from '@fuse/extensions/e-commerce/products/products.service';
import {EcommerceProductComponent} from '@fuse/extensions/e-commerce/product/product.component';
import {EcommerceProductService} from '@fuse/extensions/e-commerce/product/product.service';
import {EcommerceOrdersComponent} from '@fuse/extensions/e-commerce/orders/orders.component';
import {EcommerceOrdersService} from '@fuse/extensions/e-commerce/orders/orders.service';
import {EcommerceOrderComponent} from '@fuse/extensions/e-commerce/order/order.component';
import {EcommerceOrderService} from '@fuse/extensions/e-commerce/order/order.service';

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
        RouterModule.forChild(routes),

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

        FuseSharedModule,
        FuseWidgetModule
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

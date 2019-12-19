import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'shop-list',
                loadChildren: () => import('../shop-list/shop-list.module').then(m => m.ShopListPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: 'shop-list',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter { }
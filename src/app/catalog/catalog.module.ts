import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryRootComponent} from './category-root/category-root.component';


const routes: Routes = [
  {
    path: 'category',
    data: {
      breadcrumbs: true,
      text: 'Category'
    },
    children: [
      {
        path: '',
        component: CategoryListComponent,
        data: {
          breadcrumbs: true,
          text: 'List'
        }
      },
      {
        path: ':categoryId',
        component: CategoryDetailComponent,
        data: {
          breadcrumbs: true,
          text: 'CatId'
        },
        children:[
          {
            path: 'detail/:productId',
            component: ProductDetailComponent,
            data: {
              breadcrumbs: true,
              text: 'prodId'
            }
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: [CategoryDetailComponent, ProductDetailComponent, CategoryListComponent, CategoryRootComponent]
})
export class CatalogModule { }

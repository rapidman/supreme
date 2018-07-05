import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from './category-list/category-list.component';


const routes: Routes = [
  {
    path: 'category',
    data: {
      breadcrumb: 'Category'
    },
    children: [
      {
        path: '',
        component: CategoryListComponent,
        data: {
          breadcrumb: ''
        }
      },
      {
        path: ':id',
        component: CategoryDetailComponent,
        data: {
          breadcrumb: 'CatId'
        },
        children:[
          {
            path: 'detail/:id',
            component: ProductDetailComponent,
            data: {
              breadcrumb: 'ProdId'
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
  declarations: [CategoryDetailComponent, ProductDetailComponent, CategoryListComponent]
})
export class CatalogModule { }

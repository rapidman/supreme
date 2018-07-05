import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {CatalogModule} from "./catalog/catalog.module";
import {McBreadcrumbsModule} from "ngx-breadcrumbs";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/category',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      enableTracing: true
    }),
    McBreadcrumbsModule.forRoot(),
    BrowserModule,
    CatalogModule,
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*************************************************************
 *  APP MODULE — ROOT MODULE OF THE ANGULAR APPLICATION
 *
 *  This file is the HEART of the Angular app.
 *  It registers:
 *   ✔ Components (pages/screens)
 *   ✔ Global services
 *   ✔ HTTP interceptors
 *   ✔ Routing module
 *************************************************************/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*************************************************************
 * ROUTING + ROOT COMPONENT
 *************************************************************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*************************************************************
 * ANGULAR HTTP + FORMS MODULES
 *************************************************************/
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/*************************************************************
 * PAGE COMPONENT IMPORTS
 * (Must be declared before use in routing)
 *************************************************************/
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

/*************************************************************
 * PRODUCT SERVICE COMPONENT PAGES
 *************************************************************/
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

/*************************************************************
 * AUTH INTERCEPTOR (Adds Authorization: Bearer <token>)
 *************************************************************/
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  /***********************************************************
   * DECLARATIONS — all components belonging to this module.
   ***********************************************************/
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent
  ],

  /***********************************************************
   * IMPORTS — supporting Angular modules for functionality.
   ***********************************************************/
  imports: [
    BrowserModule,        // Required for browser apps
    AppRoutingModule,     // Routing between pages
    HttpClientModule,     // API calls
    FormsModule           // ngModel support
  ],

  /***********************************************************
   * PROVIDERS — global services & interceptors.
   ***********************************************************/
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  /***********************************************************
   * BOOTSTRAP — starting point of Angular app.
   ***********************************************************/
  bootstrap: [AppComponent]
})
export class AppModule {}

/*************************************************************
 *  APP MODULE — ROOT MODULE OF THE ANGULAR APPLICATION
 *
 *  Registers:
 *   ✔ Components (pages)
 *   ✔ Global services
 *   ✔ HTTP interceptor (JWT)
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
 * AUTH MODULE COMPONENTS
 *************************************************************/
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

/*************************************************************
 * PRODUCT MODULE COMPONENTS
 *************************************************************/
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

/*************************************************************
 * NAVBAR COMPONENT
 *************************************************************/
import { NavbarComponent } from './components/navbar/navbar.component';

/*************************************************************
 * AUTH INTERCEPTOR (Attaches Bearer Token Automatically)
 *************************************************************/
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  /***********************************************************
   * DECLARATIONS — All components used in the application.
   ***********************************************************/
  declarations: [
    AppComponent,

    // Auth
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProfileComponent,

    // Products
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,

    // Navbar
    NavbarComponent
  ],

  /***********************************************************
   * IMPORTS — Angular modules that enable app features.
   ***********************************************************/
  imports: [
    BrowserModule,        // Mandatory for browser-based apps
    AppRoutingModule,     // Handles route navigation
    HttpClientModule,     // Enables HTTP calls
    FormsModule           // Enables ngModel + forms
  ],

  /***********************************************************
   * PROVIDERS — Global services & HTTP interceptor.
   ***********************************************************/
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  /***********************************************************
   * BOOTSTRAP — Starting point of the Angular application.
   ***********************************************************/
  bootstrap: [AppComponent]
})
export class AppModule {}

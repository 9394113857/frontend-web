/*************************************************************
 * APP ROUTING MODULE — Controls page navigation.
 *
 * Angular loads components based on URL routes.
 *
 * Example:
 *   /login          → LoginComponent
 *   /products       → ProductsComponent (AuthGuard protected)
 *************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*************************************************************
 * IMPORT PAGE COMPONENTS
 *************************************************************/
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';

/*************************************************************
 * PRODUCT COMPONENTS
 *************************************************************/
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

/*************************************************************
 * ROUTE GUARD — blocks routes if user NOT logged in
 *************************************************************/
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  /***********************
   * DEFAULT ROUTE
   ***********************/
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  /***********************
   * PUBLIC ROUTES
   ***********************/
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  /***********************
   * AUTH PROTECTED ROUTES
   ***********************/
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },

  /***********************
   * PRODUCT ROUTES (CRUD)
   ***********************/
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'products/create', component: CreateProductComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: EditProductComponent, canActivate: [AuthGuard] }
];

/*************************************************************
 * EXPORT ROUTING MODULE
 *************************************************************/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

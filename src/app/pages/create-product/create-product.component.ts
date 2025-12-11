import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  model: Product = {
    name: '',
    price: 0,
    description: '',
    imageUrl: ''
  };

  saving = false;
  errorMsg = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  save() {
    this.errorMsg = '';

    if (!this.model.name || this.model.price <= 0) {
      this.errorMsg = 'Product name and valid price are required';
      return;
    }

    this.saving = true;

    this.productService.create(this.model).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.message || 'Failed to create product';
      }
    });
  }
}

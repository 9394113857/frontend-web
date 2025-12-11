import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent {

  form = {
    name: "",
    price: 0,
    description: ""
  };

  constructor(private productService: ProductService, private router: Router) {}

  create() {
    this.productService.create(this.form).subscribe({
      next: () => {
        alert("Product created!");
        this.router.navigate(['/products']);
      },
      error: err => alert(err.error.message)
    });
  }
}

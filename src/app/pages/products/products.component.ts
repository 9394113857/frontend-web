import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe({
      next: (res: any) => this.products = res,
      error: (err) => alert(err.error?.message || "Failed to load products")
    });
  }

  editProduct(id: number) {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number) {
    if (!confirm("Are you sure?")) return;

    this.productService.delete(id).subscribe({
      next: () => {
        alert("Product deleted");
        this.loadProducts();
      },
      error: err => alert(err.error?.message || "Delete failed")
    });
  }
}

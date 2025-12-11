import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product | null = null;
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.errorMsg = '';
    this.productService.getAll().subscribe({
      next: (res: any) => {
        this.products = res || [];
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Failed to load products';
        this.loading = false;
      }
    });
  }

  viewProduct(product: Product) {
    this.selectedProduct = product;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeDetails() {
    this.selectedProduct = null;
  }

  editProduct(id: number | undefined) {
    if (!id) return;
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number | undefined) {
    if (!id) return;

    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(id).subscribe({
      next: () => {
        this.successMsg = 'Product deleted successfully';
        setTimeout(() => this.successMsg = '', 2000);
        this.loadProducts();
      },
      error: (err) => {
        alert(err?.error?.message || 'Delete failed');
      }
    });
  }
}

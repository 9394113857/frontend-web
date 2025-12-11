import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id!: number;
  model: Product = { name: '', price: 0, description: '', imageUrl: '' };
  loading = false;
  saving = false;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  load() {
    this.loading = true;

    this.productService.getOne(this.id).subscribe({
      next: (res: any) => {
        this.model = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Failed to load product';
        this.loading = false;
      }
    });
  }

  save() {
    this.errorMsg = '';

    if (!this.model.name || this.model.price <= 0) {
      this.errorMsg = 'Product name and valid price are required';
      return;
    }

    this.saving = true;

    this.productService.update(this.id, this.model).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.message || 'Failed to update product';
      }
    });
  }
}

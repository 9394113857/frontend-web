import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {

  id!: number;
  form: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getOne(this.id).subscribe(res => this.form = res);
  }

  update() {
    this.productService.update(this.id, this.form).subscribe(() => {
      alert("Product updated!");
      this.router.navigate(['/products']);
    });
  }
}

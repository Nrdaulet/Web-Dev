import { Component, effect, input } from '@angular/core';
import { Product } from '../models/intfaces';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  displayProducts: Product[] = [];

  constructor() {
    effect(() => {
      this.displayProducts = [...this.products()];
    });
  }

  removeItem(id: number) {
    this.displayProducts = this.displayProducts.filter(p => p.id !== id);
  }
}

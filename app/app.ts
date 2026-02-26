import { Component, signal } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { Propros } from './services/propros';
import { Category, Product } from './models/intfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private propros: Propros) {
    this.categories = this.propros.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.propros.getProductsByCategory(id);
  }
}


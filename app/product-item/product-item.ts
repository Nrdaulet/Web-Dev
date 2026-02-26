import { Component, input, output } from '@angular/core';
import { Product } from '../models/intfaces';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  product = input.required<Product>(); // Входные данные [cite: 30, 60]
  remove = output<number>(); // Событие удаления [cite: 31, 65]

  onLike() {
    this.product().like++; // Логика лайка [cite: 64, 73]
  }

  onDelete() {
    this.remove.emit(this.product().id); // Отправляем ID родителю [cite: 78, 89]
  }
}

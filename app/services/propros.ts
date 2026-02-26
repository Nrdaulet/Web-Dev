import { Injectable } from '@angular/core';
import { Category, Product } from '../models/intfaces';
import {CATEGORIES,PRODUCTS} from '../data/prodata'

@Injectable({
  providedIn: 'root',
})
export class Propros {
  private categories: Category[]=CATEGORIES;
  private products: Product[]=PRODUCTS;

  getCategories():Category[]{
    return this.categories;
  }

  getProductsByCategory(categoryId:number):Product[]{
    return this.products.filter(p=> p.category.id === categoryId);
  }
}

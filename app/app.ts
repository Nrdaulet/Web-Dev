import {Component,signal} from '@angular/core';
import{PRODUCTS} from './data/products';
import {Product} from './models/product.models';

@Component({
  selector:'app-root',
  template:`
    <div class="grid">
      @for (p of products;track p.id) {
        <div class="card">
          <img [src]="p.image" alt=""/>
          <h2>{{p.name}}</h2>
          <p>{{p.description}}</p>
          <p><b>{{p.price}}₸</b></p>
          <div>
            @for (s of stars; track s) {
              <span [style.color]="p.rating >=s ? 'gold':'#ccc'">★</span>
            }
          </div>
          <a [href]="p.link" target="_blank" rel="noopener noreferrer">
            Open on Kaspi
            <div style="">
              <button (click)="shareWhatsApp(p)">Share WhatsApp</button>
              <button (click)="shareTelegram(p)">Share Telegram</button>
            </div>
          </a>
        </div>
      }
    </div>
  `,
  styleUrl:'./app.css'
})

export class App{
  protected readonly title =signal('online-store');
  products:Product[]=PRODUCTS;
  stars=[1,2,3,4,5];
  shareWhatsApp(product: any){
    const text=`Check out this product: ${product.link}`;
    const url=`https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: any){
    const url=`
    https://t.me/share/url?url=${encodeURIComponent(product.link)}`+
      `&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }

}

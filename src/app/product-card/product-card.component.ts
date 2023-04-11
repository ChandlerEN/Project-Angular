import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  constructor(private productsService: ProductsService) { }

  onAddLike() {
    this.productsService.onAddLike(this.myProduct);
  }

  priceSelected: number = 400;
  onSizeSelected(e: any) {
    this.priceSelected = e.target.value;
  }
}
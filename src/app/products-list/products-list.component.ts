import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styles: []
})
export class ProductsListComponent implements OnInit{
  products!: Product[];
  search: string = "";
  title: string = 'angular-app';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.search = "";
    this.products = this.productsService.products;
    this.title = 'angular-app';
  }
}

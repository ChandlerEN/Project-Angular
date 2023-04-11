import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styleUrls: ['product-list.component.css']
})
export class ProductsListComponent implements OnInit{
  products!: Product[];
  search: string = "";
  title: string = 'angular-app';
  order: string = "asc";

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.search = "";
    this.products = this.productsService.products;
    this.title = 'Samsung Store';
  }

  SortOrder() {
    if (this.order === "asc") {
      this.order = "desc";
    } else {
      this.order = "asc";
    }
  }
}

import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
        1,
        'Arrietty',
        'Un film Ghibli',
        'https://toutelaculture.com/wp-content/uploads/2011/01/affiche6.jpg',
        new Date('2021-01-01'),
        [{size: 'XL', price: 2300}, {size: 'L', price: 2500}, {size: 'M', price: 2700}, {size: 'S', price: 2900}, {size: 'XS', price: 3100}],
        0,
        false
    ),
    new Product(
        2,
        'Chai pas',
        'Pas un film Ghibli',
        'https://toutelaculture.com/wp-content/uploads/2011/01/affiche10.jpg',
        new Date('2021-04-11'),
        [{size: 'XL', price: 2300}, {size: 'L', price: 2500}, {size: 'M', price: 2700}, {size: 'S', price: 2900}, {size: 'XS', price: 3100}],
        0,
        false
    ),
    new Product(
        3,
        'Chai pas',
        'Pas un film Ghibli',
        'https://toutelaculture.com/wp-content/uploads/2011/01/affiche15.jpg',
        new Date('2022-10-22'),
        [{size: 'XL', price: 2300}, {size: 'L', price: 2500}, {size: 'M', price: 2700}, {size: 'S', price: 2900}, {size: 'XS', price: 3100}],
        0,
        false
    ),
  ]

  onAddLike(products: Product): void {
    if (products.isLiked) {
      products.likes--;
    }
    else
    {
      products.likes++;
    }
    products.isLiked = !products.isLiked;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: number): Product {
    let checkId = this.products.find((product) => product.id === id);
    if(checkId === undefined){
        throw new Error('Id not found');
    }
    else {
      return checkId;
    }
  }
}

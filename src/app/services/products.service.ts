import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
        1,
        'Samsung Galaxy S20',
        'Téléphone haute gamme de Samsung.',
        'https://med.csmobiles.com/500170-large_default/samsung-galaxy-s20-fe-g780-128gb-dual-sim-blanco.jpg',
        new Date('2020-01-20'),
        [{size: 'FE', price: 400}, {size: 'CLASSIQUE', price: 500}, {size: 'ULTRA', price: 900}],
        "🤍",
        false
    ),
    new Product(
        1,
        'Samsung Galaxy S23',
        'Téléphone haute gamme de Samsung.',
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61xk5l4aXOL._AC_SS450_.jpg',
        new Date('2023-01-16'),
        [{size: 'FE', price: 400}, {size: 'CLASSIQUE', price: 600}, {size: 'ULTRA', price: 900}],
        "🤍",
        false
    ),
    new Product(
        2,
        'Samsung Galaxy S21',
        'Téléphone haute gamme de Samsung.',
        'https://media.ldlc.com/r1600/ld/products/00/05/92/04/LD0005920487_1.jpg',
        new Date('2021-01-18'),
        [{size: 'FE', price: 400}, {size: 'CLASSIQUE', price: 600}, {size: 'ULTRA', price: 900}],
        "🤍",
        false
    ),
    new Product(
        3,
        'Samsung Galaxy S22',
        'Téléphone haute gamme de Samsung.',
        'https://media.ldlc.com/r1600/ld/products/00/05/92/88/LD0005928897_1.jpg',
        new Date('2022-01-17'),
        [{size: 'FE', price: 400}, {size: 'CLASSIQUE', price: 600}, {size: 'ULTRA', price: 900}],
        "🤍",
        false
    ),
  ]

  onAddLike(products: Product): void {
    if (products.isLiked) {
      products.likeStatus = "🤍";
    }
    else
    {
      products.likeStatus = "❤️";
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

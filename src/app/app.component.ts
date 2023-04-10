import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product.model";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
    title: string = 'angular-app';
}

import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SortByNameListPipe } from './pipes/sort-by-name-list.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SortByNamePipe,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    SortByNameListPipe,
  ],
    exports:[
        SortByDatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
    ],
  providers: [{
    provide: LOCALE_ID,
      useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
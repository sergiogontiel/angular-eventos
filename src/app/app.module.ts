import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpBackend, HttpClient } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptores/base-url.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { ProductDetailGuard } from './guards/product-detail.guard';
import { LeaveContactFormGuard } from './guards/leave-contact-form.guard';
import { ProductListResolveGuard } from './guards/product-list-resolve.guard';
import { CanDeactivateGuardAll } from './guards/can-deactivate';
=======
import { EventosShowComponent } from './eventos-show/eventos-show.component';
>>>>>>> 9174318350ccacaa77f3a9132d3df51fec9a1afa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductListComponent,
    ProductFilterPipe,
    ProductItemComponent,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpBackend],
        useFactory: translateHttpLoaderFactory
      }
    })
  ],
  providers: [
      ProductDetailGuard,
      LeaveContactFormGuard,
      ProductListResolveGuard,
      CanDeactivateGuardAll,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend));
}
=======
    EventosShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 9174318350ccacaa77f3a9132d3df51fec9a1afa

import { from } from 'rxjs';
import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { LeaveContactFormGuard } from './guards/leave-contact-form.guard';
import { ProductListResolveGuard } from './guards/product-list-resolve.guard';
import { CanDeactivateGuardAll } from './guards/can-deactivate';


export const APP_ROUTES: Route[]=[
  { path: 'welcome', component: WelcomeComponent, canDeactivate: [CanDeactivateGuardAll] },
  { path: 'products', component: ProductListComponent, canActivate: [ProductDetailGuard], resolve: [ProductListResolveGuard] },
// :id es un parámetro (id del producto)
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactFormComponent, canDeactivate: [LeaveContactFormGuard] },
// Ruta por defecto (vacía) -> Redirigir a /welcome
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
// Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
]

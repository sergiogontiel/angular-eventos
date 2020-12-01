import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveContactFormGuard implements CanDeactivate<ContactFormComponent> {
  canDeactivate(
    component: ContactFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean> | Promise<boolean> {
    return confirm('¿Seguro que quieres abandonar esta página?');
  }

}

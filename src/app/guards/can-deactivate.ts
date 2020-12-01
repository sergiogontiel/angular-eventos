import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface componentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardAll implements CanDeactivate<componentDeactivate>
{
  canDeactivate(
    component: componentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return component.canDeactivate ? component.canDeactivate() : true;
    }
}

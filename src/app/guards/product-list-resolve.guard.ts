import { Injectable } from '@angular/core';
import { Resolve, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolveGuard implements Resolve<any> {

  constructor(private productService: ProductService, activateRoute: ActivatedRoute, private router: Router){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.productService.getProductos();
  }

}

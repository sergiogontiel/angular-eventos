import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';
import { catchError, map } from 'rxjs/operators';
import { ResponseOk, ResponsesProducto, ResponsesProductos } from '../interfaces/responses';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productoURL:string="productos";

  constructor(private http:HttpClient) { }

  getProductos():Observable<ResponsesProductos>{
    return this.http.get<ResponsesProductos>(this.productoURL);
  }

  getProducto(idProducto:number): Observable<ResponsesProducto> {
    return this.http.get<ResponsesProducto>(this.productoURL+"/"+idProducto)
  }


  changeRating(idProducto:number,rating:number){
    return this.http.put<ResponseOk>(this.productoURL+"/rating/"+idProducto, {rating:rating});
  }

}

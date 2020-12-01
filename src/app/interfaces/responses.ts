import { IProducto } from './i-producto';

export interface ResponsesProductos {
  productos: IProducto[];
}

export interface ResponsesProducto {
  producto: IProducto;
}

export interface ResponseOk{
  ok:boolean;
  error:string;
}

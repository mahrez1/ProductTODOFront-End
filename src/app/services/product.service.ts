import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: Product, imageUrl: File): Observable<Product> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    formData.append('imageUrl', imageUrl);
  
    console.log('Product:', product);
  
    return this.http.post<Product>(
      'http://localhost:8080/OverView/product/addProduct',
      formData
    );
  }
  ;
  }


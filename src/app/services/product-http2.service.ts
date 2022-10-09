import { BaseHttpService } from './bese.http.service';
import { Product } from '../models/products.model';

export class ProductHttpService2 extends BaseHttpService<Product> {
  doSomething() {
    this.getAll();
    this.url;
  }
  constructor( url: string) {
    super(url)
  }
}

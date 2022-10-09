// import { BaseHttpService } from './bese.http.service';
import { Product } from '../models/products.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { ProductHttpService2 } from './product-http2.service';

export class ProductClassService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService2(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto);
  }

  constructor() {}
}

import axios from 'axios';
import { Category } from './../models/category.model';
import { Product } from './../models/products.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url);
  const rta = await productService.getAll();
  console.log(rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    description: 'dddedededed',
    images: [],
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log(rta2.length);
})();

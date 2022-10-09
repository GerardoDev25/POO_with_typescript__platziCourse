import axios from 'axios';
import { Category } from './../models/category.model';
import { Product } from './../models/products.model';

export class BaseHttpService<TypeClase> {
  // data: TypeClase[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClase[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data.map((e)=>{e.})

// const service = new BaseHttpService<number>();
// service.data.map((e)=>e.toFixed())

// const service = new BaseHttpService<Category>();
// service.getAll();

(async () => {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url);
  const rta = await productService.getAll();
  console.log(rta.length);
  
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log(rta2.length);
})();

import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/products.model';

export class ProductHttpService implements ProductService {
  constructor() {}
  private URL = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.URL}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.URL, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this.URL}/${id}`);
    return data;
  }
}

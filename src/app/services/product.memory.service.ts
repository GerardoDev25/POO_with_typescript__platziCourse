import faker from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/products.model';

export class ProductMemoryService {
  private products: Product[] = [];

  constructor() {}

  getall(): Product[] {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find((item) => item.id === id);
  }
}

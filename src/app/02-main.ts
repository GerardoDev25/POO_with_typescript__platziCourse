import { ProductMemoryService } from './services/product.memory.service';

const productService = new ProductMemoryService();

productService.create({
  price: 12,
  categoryId: 12,
  description: 'descriptoin',
  images: [''],
  title: 'title',
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, { title: 'title change' });
const rta = productService.findOne(productId);
console.log(rta);

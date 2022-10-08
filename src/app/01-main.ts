import axios from 'axios';
import { Product } from '../models/products.model';

(async () => {
  async function getProducts() {
    // const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');

    // return data;

    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');

    return data as Product[];
  }

  console.log('-'.repeat(20));
  const productsAsync = await getProducts();
  productsAsync.map(({ id, title }) => {
    console.log(`${id} - ${title}`);
  });
})();

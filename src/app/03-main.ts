import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productsSevice = new ProductHttpService();

  try {
    console.log('-'.repeat(20));
    const products = await productsSevice.getAll();
    // console.log(products.map((e) => e));

    const productId = products[0].id;
    const productUpdate = await productsSevice.update(productId, {
      price: 1000,
      title: 'title product change',
      description: 'product description changed',
    });
    console.log(productUpdate);
  } catch (error) {
    console.log(error);
  }
})();

import axios from 'axios';

(async (e) => {
  function dayay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');

    return promise;
  }

  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');

    return promise.data;
  }

  // console.log('-'.repeat(20));
  // const rta = await dayay(3000);
  // console.log(rta);

  // console.log('-'.repeat(20));
  // const products = await getProducts();
  // console.log(products.data);

  console.log('-'.repeat(20));
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();

import { GET_ALL_PRODUCTS_API } from '@/constants/productApiRequest';

export default async function getProducts() {
  const response = await fetch(GET_ALL_PRODUCTS_API);
  const productList = await response.json();
  return productList;
}

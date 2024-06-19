import { GET_ALL_PRODUCTS_API } from '@/constants/GET_ALL_PRODUCTS_API';

export default async function getProducts() {
  const response = await fetch(GET_ALL_PRODUCTS_API);
  const productList = await response.json();
  return productList;
}

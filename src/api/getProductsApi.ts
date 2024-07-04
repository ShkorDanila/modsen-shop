import { PRODUCT_API_URL } from '@/constants/productApiRequest';

export async function getProducts() {
  const response = await fetch(PRODUCT_API_URL);
  const productList = await response.json();
  return productList;
}

export async function getProduct(id: number) {
  const response = await fetch(PRODUCT_API_URL + "/" + id);
  const product = await response.json();
  return product;
}

export async function getSimilarProducts(category: string) {
  const response = await fetch(PRODUCT_API_URL + "/category/" + category)
  const productList = await response.json()
  return productList.length == 0 ? null : productList
}
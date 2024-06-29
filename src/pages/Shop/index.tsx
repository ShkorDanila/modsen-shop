import React, { useEffect, useState } from 'react';

import FilterBar from '@/components/FilterBar';

import { CardsWrapper, HeaderShop, ProductsSection, ShopPageWrapper } from './styled';
import { IProductList, setProductList } from '@/store/productListSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@/components/Card';
const ShopPage: React.FC = () => {

  const [currentPruductList, setCurrentProductList] = useState<IProductList[]>([])
  const [maxValue, setMaxValue] = useState<number>(0)
  const [categories, setCategories] = useState([])
  const productList = useSelector((state: any) => state.productList.value);
  const filterOptions = useSelector((state: any) => state.filterOptions.value);

  useEffect(() => {
    setCurrentProductList(productList);
    if(productList.length > 0){
      const priceArr = productList.map((item: any) => { return item.price});
      const maxVal = priceArr.reduce((accumulator: number, initialValue: number) => { return Math.max(accumulator, initialValue)}, priceArr[0])
      setMaxValue(maxVal)
      const catigoriesSet: any = new Set(productList.map((item: any) => {return item.category}))
      setCategories(Array.from(catigoriesSet))
    }
  }, [productList]);


  useEffect(() => {
    
    async function useShopBy () {
      if(filterOptions.shopBy != undefined && filterOptions.shopBy != "None") {
        return productList.filter((item: any) => item.category == filterOptions.shopBy.toLowerCase())
      }
      else {
        return productList
      }
    }
    
    async function useCurrentPricePreset () {
      let shopedByList = await useShopBy()
      return shopedByList.filter((item: any) => item.price >= filterOptions.minPrice && item.price <= filterOptions.maxPrice)
    }

    async function useSort () {
      let shopedAndPricedList = await useCurrentPricePreset()

      if(filterOptions.sortBy == "None" || filterOptions.sortBy == undefined){
        setCurrentProductList(shopedAndPricedList)
        return;
      }

      if(filterOptions.sortBy.toLowerCase() == "price") {
        setCurrentProductList(shopedAndPricedList.sort((a:any,b:any) => {return a.price-b.price}))
      }
      if(filterOptions.sortBy.toLowerCase() == "price (desc)") {
        setCurrentProductList(shopedAndPricedList.sort((a:any,b:any) => {return b.price-a.price}))
      }
      if(filterOptions.sortBy.toLowerCase() == "rating") {
        setCurrentProductList(shopedAndPricedList.sort((a:any,b:any) => {return a.rating.rate-b.rating.rate}))
      }
      if(filterOptions.sortBy.toLowerCase() == "rating (desc)") {
        setCurrentProductList(shopedAndPricedList.sort((a:any,b:any) => {return b.rating.rate-a.rating.rate}))
      }
    }

    useSort()
    
  }, [filterOptions])


  return (
    <>
    <ShopPageWrapper>
      <HeaderShop>Shop</HeaderShop>
      <ProductsSection>
        <FilterBar {...{maxValueOfPrice: maxValue+1, categoriesList: categories}}/>
        { currentPruductList.length > 0 &&
        <CardsWrapper>
          {
            currentPruductList.map((item, iterator) => {return <Card id={item.id} title={item.title} price={item.price} image={item.image} key={iterator}/>})
          }
        </CardsWrapper>
      }
      </ProductsSection>
    </ShopPageWrapper>
    </>
  );
};
export default ShopPage;

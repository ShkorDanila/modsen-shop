import React, { useEffect, useState } from 'react';
import * as styled from './styled';
import ProductPhotoOverview from '@/components/ProductPhotoOverview';
import { IProduct } from '@/store/productListSlice';
import { PRODUCT_API_URL } from '@/constants/productApiRequest';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProduct, getSimilarProducts } from '@/api/getProductsApi';
import MobileSlider from '@/components/MobileSlider';
import { FaStar } from "react-icons/fa"
import Card from '@/components/Card';

const ProductPage:React.FC = () => {

    const [product, setProduct] = useState<IProduct | null>(null)
    const { id } = useParams()
    const [isFull, setIsFull] = useState(false)
    const [similarItemsList, setSimilarItemsList] = useState<IProduct[] | null>()
    

    useEffect(() => {

        getProduct(Number(id)).then((productResp) => {
            setProduct(productResp);
            getSimilarProducts(productResp.category).then((productList) =>
            setSimilarItemsList(productList.filter((productItem: IProduct) => 
                productItem.title != productResp.title
            )))
            return;
        })
        
    }, [id])


    return <>
    { product != null &&
        <styled.ProductWrapper>
            
        <styled.ProductInfoSection>

            <styled.PhotoSection>
                <ProductPhotoOverview urls={Array(5).fill(product.image)}/>
                <MobileSlider urls={Array(5).fill(product.image)}></MobileSlider>
            </styled.PhotoSection>

            <styled.FastInfoSection>
                <styled.MainInfoWrapper>
                <styled.ProductTitle>{product.title}</styled.ProductTitle>
                
                <styled.ProductCost>{product.price}$</styled.ProductCost>
                
                <styled.RatingContainer>
                <styled.StarContainer>
                    {
                        [...Array(5)].map((star, index) => {
                            return (
                                <FaStar color={index+1 <= Math.round(product.rating.rate) ? "#ffd700" : "gray"} />
                            )
                        })
                    }
                </styled.StarContainer>
                <styled.ReviewCounter>{product.rating.count} review{product.rating.count != 1 ? "s" : ""}</styled.ReviewCounter>
                </styled.RatingContainer>

                <styled.ProductDescription isFull={isFull}>{product.description}</styled.ProductDescription>
                <styled.ViewMoreButton onClick={() => setIsFull(prevState => !prevState)}>{!isFull ? "View All" : "Close"}</styled.ViewMoreButton>
                </styled.MainInfoWrapper>
                <styled.ProductCategories>
                    <styled.ProductCategoriesTitle>Categories:&nbsp; </styled.ProductCategoriesTitle>
                    <styled.ProductCategoriesNames>{product.category}</styled.ProductCategoriesNames>
                </styled.ProductCategories>
            </styled.FastInfoSection>

        </styled.ProductInfoSection>
        <styled.SimilarItemsSection>
            <styled.SimilarItemsTitle>Similar items</styled.SimilarItemsTitle>
            <styled.SimilarItemsContainer>
                { similarItemsList == null &&
                    <h1>No Matches</h1>
                }
                {
                    similarItemsList != null &&
                    similarItemsList.slice(0,3).map((product) => <Card {...product}></Card>)
                }
            </styled.SimilarItemsContainer>
        </styled.SimilarItemsSection>

    </styled.ProductWrapper>
    }
    </>
}
export default ProductPage;
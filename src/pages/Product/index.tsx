import React, { useEffect, useState } from 'react';
import * as styled from './styled';
import ProductPhotoOverview from '@/components/ProductPhotoOverview';
import { IProduct } from '@/store/productListSlice';
import { PRODUCT_API_URL } from '@/constants/productApiRequest';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProduct } from '@/api/getProductsApi';
import MobileSlider from '@/components/MobileSlider';
import { FaStar } from "react-icons/fa"

const ProductPage:React.FC = () => {

    const [product, setProduct] = useState<IProduct | null>(null)
    const { id } = useParams()
    const [isFull, setIsFull] = useState(false)
    

    useEffect(() => {

        getProduct(Number(id)).then((productResp) => setProduct(productResp))
        
        
    }, [])


    return <>
    { product != null &&
        <styled.ProductWrapper>
            
        <styled.ProductInfoSection>

            <styled.PhotoSection>
                <ProductPhotoOverview urls={Array(5).fill(product.image)}/>
                <MobileSlider urls={Array(5).fill(product.image)}></MobileSlider>
            </styled.PhotoSection>

            <styled.FastInfoSection>

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
            </styled.FastInfoSection>

        </styled.ProductInfoSection>


    </styled.ProductWrapper>
    }
    </>
}
export default ProductPage;
import React, { useEffect, useState } from 'react';
import { ProductWrapper, ProductInfoSection, PhotoSection, FastInfoSection } from './styled';
import ProductPhotoOverview from '@/components/ProductPhotoOverview';
import { IProduct } from '@/store/productListSlice';
import { PRODUCT_API_URL } from '@/constants/productApiRequest';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProduct } from '@/api/getProductsApi';

const ProductPage:React.FC = () => {

    const [product, setProduct] = useState<IProduct | null>(null)
    const { id } = useParams()
    

    useEffect(() => {

        getProduct(Number(id)).then((productResp) => setProduct(productResp))
        
    }, [])

    return <>
    { product != null &&
        <ProductWrapper>
        <ProductInfoSection>

            <PhotoSection>
                <ProductPhotoOverview urls={Array(5).fill(product.image)}/>
            </PhotoSection>

            <FastInfoSection>

                Тут описание

            </FastInfoSection>

        </ProductInfoSection>
    </ProductWrapper>
    }
    </>
}
export default ProductPage;
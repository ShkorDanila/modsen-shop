import React from 'react';
import { ProductWrapper, ProductInfoSection, PhotoSection, FastInfoSection } from './styled';
import ProductPhotoOverview from '@/components/ProductPhotoOverview';

const ProductPage:React.FC = () => {

    return <ProductWrapper>
        <ProductInfoSection>

            <PhotoSection>
                <ProductPhotoOverview/>
            </PhotoSection>

            <FastInfoSection>

                Тут описание

            </FastInfoSection>

        </ProductInfoSection>
    </ProductWrapper>
}
export default ProductPage;
import React, { useEffect, useState } from 'react';
import { MainPhoto, PhotosWrapper, SingleSmallPhoto, SmallPhotos } from './styled';

interface IPhotosProps {
    urls: string[];
}

const ProductPhotoOverview = ({urls} : IPhotosProps) => {

    const [currentPicture, setCurrentPicture] = useState<string>("")
    const [sidePictures, setSidePictures] = useState<string[]>([])

    useEffect(() => {
        setCurrentPicture(urls[0])
        setSidePictures(urls.slice(0,urls.length-1))
    }, [])

    return (
        <PhotosWrapper>
            <SmallPhotos>
                { sidePictures.map((url, iterator) => <SingleSmallPhoto key={iterator} photoId={1} link={url}></SingleSmallPhoto>)}
            </SmallPhotos>
            <MainPhoto link={currentPicture} photoId={1}>

            </MainPhoto>
        </PhotosWrapper>
    )
}
export default ProductPhotoOverview;
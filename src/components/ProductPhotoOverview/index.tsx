import React, { ChangeEvent, useEffect, useState } from 'react';
import { MainPhoto, MainPhotoWrapper, PhotoWrapper, PhotosWrapper, SingleSmallPhoto, SmallPhotos } from './styled';

export interface IPhotosProps {
    urls: string[];
}

const ProductPhotoOverview = ({urls} : IPhotosProps) => {

    const [currentPicture, setCurrentPicture] = useState<string>("")
    const [sidePictures, setSidePictures] = useState<string[]>([])

    useEffect(() => {
        setCurrentPicture(urls[0])
        setSidePictures(urls.slice(0,urls.length-1))
    }, [])


    function handleSidePictureClick (iterator: number) {
        setCurrentPicture(sidePictures[iterator])
        setSidePictures((lastArray) => lastArray.map((item, i) => i == iterator ? currentPicture : item))
    }

    return (
        <PhotosWrapper>
            <SmallPhotos>
                { sidePictures.map((url, iterator) => <PhotoWrapper key={iterator}><SingleSmallPhoto 
                onClick={() => handleSidePictureClick(iterator)} key={iterator} photoId={iterator} link={url}></SingleSmallPhoto></PhotoWrapper>)}
            </SmallPhotos>
            <MainPhotoWrapper><MainPhoto link={currentPicture} photoId={1}/></MainPhotoWrapper>
        </PhotosWrapper>
    )
}
export default ProductPhotoOverview;
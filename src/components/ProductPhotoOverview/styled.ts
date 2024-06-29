import styled from "styled-components";

interface IPhotoInfo {
    id: number;
    link: string;
}

export const PhotosWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 30px;
`

export const SmallPhotos = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`

export const MainPhoto = styled.div`

`
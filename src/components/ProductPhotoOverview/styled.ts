import styled from "styled-components";

interface IPhotoInfo {
    photoId: number;
    link: string;
}

interface IPhotoId {
  photoId: number;
}

export const PhotosWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 10px;
    @media (width <= ${props => props.theme.device_sizing.size.tablet}) {
      display: none;
    }
`

export const SmallPhotos = styled.div `
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`

export const MainPhoto = styled.div<IPhotoInfo>`
    -webkit-tap-highlight-color: transparent;
  background-image: url(${(props) => props.link});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 90%;
  height: 90%;
`

export const SingleSmallPhoto = styled.div<IPhotoInfo>`
  -webkit-tap-highlight-color: transparent;
  background-image: url(${(props) => props.link});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 5rem;
  height: 5rem;
  
`

export const PhotoWrapper = styled.div`
  padding: 10px;
  width: fit-content;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`

export const MainPhotoWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`
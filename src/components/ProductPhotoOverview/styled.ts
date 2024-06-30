import styled from "styled-components";

interface IPhotoInfo {
    photoId: number;
    link: string;
}

export const PhotosWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 10px;
`

export const SmallPhotos = styled.div `
    display: flex;
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
    height: 100%;
  @media (width > ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 100%;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 100%;
  }
`

export const SingleSmallPhoto = styled.div<IPhotoInfo>`
  -webkit-tap-highlight-color: transparent;
  background-image: url(${(props) => props.link});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (width > ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 5rem;
    height: 5rem;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 30rem;
    height: 30rem;
  }
`
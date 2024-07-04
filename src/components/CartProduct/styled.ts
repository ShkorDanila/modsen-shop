import styled from "styled-components";

interface IPhoto {
    url: string;   
}

export const CartProductWrapper = styled.div`
     width: 100%;
     height: fit-content;
     padding-top: 10px;
     display: flex;
    @media(width <= ${props => props.theme.device_sizing.size.mobileM}){  
        justify-content: center;
    }
`

export const Hr = styled.hr`
  width: 100%;
  color: ${(props) => props.theme.neutral_colours.grey};
  transition: 0.2s ease-in-out;
`;

export const SmallImage = styled.div<IPhoto>`
    width: 8rem;
    height: 8rem;
    -webkit-tap-highlight-color: transparent;
    cursor: help;
    background-image: url(${(props) => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 5px;
`

export const InnerWrapper = styled.div`
    width: 100%;
    @media(width <= ${props => props.theme.device_sizing.size.mobileM}){  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.3rem;
    }
    height: fit-content;
    display: flex;
    gap: 30px;

`

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    justify-content: space-around;
`

export const RemoveProductButton = styled.button`
    all:unset;
`

export const ProductTitle = styled.h2`
    all:unset;
`

export const ProductCost = styled.h3`
    all:unset;
`
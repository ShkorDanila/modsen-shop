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
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.accent};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ProductTitle = styled.h2`
    margin: 0;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[2].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
    }
`

export const ProductCost = styled.h3`
    margin: 0;
    width: fit-content;
    height: fit-content;
    margin: 0;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    line-height: ${(props) => props.theme.typefaces.pc.heading[3].line_height};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    line-height: ${(props) =>
      props.theme.typefaces.mobile.body.small.line_height};
  }

  color: ${(props) => props.theme.main_colours.accent};
`
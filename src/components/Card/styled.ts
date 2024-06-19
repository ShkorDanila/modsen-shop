import theme from "@/utils/static_theme";
import styled from "styled-components";

interface IProductImage {
    image: string;
  }

export const StyledCard = styled.div`
    overflow: hidden;
    position: relative;
    padding: 0.5rem;
    width: 100%;
    display: grid;
    border-radius: 15px;
    grid-auto-flow: row;
    background-color: white;
    @media (width > ${theme.device_sizing.size.laptop}) {
        width: 377px;
        height: 502px;
    };
    @media (width <= ${theme.device_sizing.size.laptop}) {
        width: 136px;
        height: 218px;
    };
`

export const ProductImage = styled.div<IProductImage>`
    
    -webkit-tap-highlight-color: transparent;
    cursor: help;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
    @media (width > ${theme.device_sizing.size.laptop}) {
        width: 377px;
        height: 380px;
    };
    @media (width <= ${theme.device_sizing.size.laptop}) {
        width: 136px;
        height: 136px;
    };
`

export const TitleHeader = styled.h3`
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-family: ${theme.typefaces.font_primary};
    @media (width > ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.pc.heading[3].weight};
        font-size: ${theme.typefaces.pc.heading[3].size};
    };
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.mobile.heading[3].weight};
        font-size: ${theme.typefaces.mobile.heading[3].size};
        line-height: 22px;
    };

    
    color: ${theme.light.main_colours.black}
`

export const PriceHeader = styled.h3`
    margin: 0;
    font-family: ${theme.typefaces.font_primary};
    @media (width > ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.pc.heading[1].weight};
        font-size: ${theme.typefaces.pc.heading[3].size};
        line-height: ${theme.typefaces.pc.heading[3].line_height};
    };
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.mobile.body.small.weight};
        font-size: ${theme.typefaces.mobile.body.small.size};
        line-height: ${theme.typefaces.mobile.body.small.line_height};
    };

    color: ${theme.light.main_colours.accent}
`

export const HoverEffectDiv = styled.button`
    all: unset;
    top: 0.5rem;
    cursor: pointer;
    right: 0.5rem;
    background-color: ${theme.light.main_colours.black};
    color: ${theme.light.main_colours.white};
    position: absolute;
    padding: 0.3rem;
    border: black solid 1px;
    border-radius: 3px;

    

    font-family: ${theme.typefaces.font_primary};
    @media (width > ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.pc.heading[1].weight};
        font-size: ${theme.typefaces.pc.heading[3].size};
        line-height: ${theme.typefaces.pc.heading[3].line_height};

        translate: 200%;
    ${StyledCard}:hover && {
        translate: none;
        transition: translate 0.3s ease-in-out;
    }
    :hover {
        background-color: ${theme.light.main_colours.white};
        color: ${theme.light.main_colours.black};
        transition: 0.3s ease-in-out;
    }
    };
    @media (width <= ${theme.device_sizing.size.tablet}) {
        font-weight: ${theme.typefaces.mobile.body.small.weight};
        font-size: ${theme.typefaces.mobile.body.small.size};
        line-height: ${theme.typefaces.mobile.body.small.line_height};

        :active {
        background-color: ${theme.light.main_colours.white};
        color: ${theme.light.main_colours.black};
        transition: 0.01s ease-in-out;
    }
    };

`
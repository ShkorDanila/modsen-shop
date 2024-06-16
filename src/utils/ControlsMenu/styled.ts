import styled from "styled-components"
import theme from "../static_theme"

export const ShopHeading = styled.h5`
    font-family: ${theme.typefaces.font_primary};
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
    line-height: ${theme.typefaces.pc.heading[5].line_height};
    text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};
    
    
    @media (width < ${theme.device_sizing.size.mobileL}) {
        display: none;
    };

    color: ${props => props.theme.main_colours.black};
`

export const ControlsDesktopContainer = styled.div`
    font-family: ${theme.typefaces.font_primary};
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
    line-height: ${theme.typefaces.pc.heading[5].line_height};
    text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items:center;
    
    @media (width < ${theme.device_sizing.size.mobileL}) {
        display: none;
    };

    color: ${props => props.theme.main_colours.black};
`

export const ControlsMobileContainer = styled.div`
    font-family: ${theme.typefaces.font_primary};
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
    line-height: ${theme.typefaces.pc.heading[5].line_height};
    text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};
    
    
    @media (width > ${theme.device_sizing.size.mobileL}) {
        display: none;
    };

    color: ${props => props.theme.main_colours.black};
`

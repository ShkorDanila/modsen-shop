import styled from "styled-components";
import theme from "@/utils/static_theme";

export const LogoHeaderThemed = styled.span`
    font-family: ${theme.typefaces.font_logo};
    @media (width > ${theme.device_sizing.size.mobileL}) {
        font-size: ${theme.typefaces.pc.logo.size};
        font-weight: ${theme.typefaces.pc.logo.weight};
    };
    @media (width < ${theme.device_sizing.size.mobileL}) {
        font-size: ${theme.typefaces.mobile.logo.size};
        font-weight: ${theme.typefaces.mobile.logo.weight};
    };
    color: ${props => props.theme.main_colours.black};


`

export const LogoHeaderAccent = styled.span`
    font-family: ${theme.typefaces.font_logo};
    @media (width > ${theme.device_sizing.size.mobileL}) {
        font-size: ${theme.typefaces.pc.logo.size};
        font-weight: ${theme.typefaces.pc.logo.weight};
    };
    @media (width < ${theme.device_sizing.size.mobileL}) {
        font-size: ${theme.typefaces.mobile.logo.size};
        font-weight: ${theme.typefaces.mobile.logo.weight};
    };

    color: ${theme.light.main_colours.accent}
`

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
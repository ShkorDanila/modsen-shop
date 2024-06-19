import styled from 'styled-components';
import theme from '@/utils/static_theme';

export const LogoHeaderThemed = styled.span`
  font-family: ${theme.typefaces.font_logo};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.logo.size};
    font-weight: ${theme.typefaces.pc.logo.weight};
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.logo.size};
    font-weight: ${theme.typefaces.mobile.logo.weight};
  }
  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
  user-select: none;
`;

export const LogoHeaderAccent = styled.span`
  user-select: none;
  font-family: ${theme.typefaces.font_logo};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.logo.size};
    font-weight: ${theme.typefaces.pc.logo.weight};
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.logo.size};
    font-weight: ${theme.typefaces.mobile.logo.weight};
  }

  color: ${theme.light.main_colours.accent};
  transition: 0.2s ease-in-out;
`;

export const NavElementsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main_colours.white};
  transition: 0.2s ease-in-out;

  @media (width <= ${theme.device_sizing.size.tablet}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${(props) => props.theme.main_colours.white};
  transition: 0.2s ease-in-out;
`;

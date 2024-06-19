import styled from 'styled-components';
import theme from '../../utils/static_theme';

export const ShopHeading = styled.h5`
  font-family: ${theme.typefaces.font_primary};
  font-size: ${theme.typefaces.pc.heading[5].size};
  font-weight: ${theme.typefaces.pc.heading[5].weight};
  line-height: ${theme.typefaces.pc.heading[5].line_height};
  text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};

  @media (width <= ${theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const ControlsDesktopContainer = styled.div`
  font-family: ${theme.typefaces.font_primary};
  font-size: ${theme.typefaces.pc.heading[5].size};
  font-weight: ${theme.typefaces.pc.heading[5].weight};
  line-height: ${theme.typefaces.pc.heading[5].line_height};
  text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;

  @media (width <= ${theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const ControlsMobileContainer = styled.div`
  font-family: ${theme.typefaces.font_primary};
  font-size: ${theme.typefaces.pc.heading[5].size};
  font-weight: ${theme.typefaces.pc.heading[5].weight};
  line-height: ${theme.typefaces.pc.heading[5].line_height};
  text-indent: ${theme.typefaces.pc.heading[5].paragraph_spacing};

  @media (width > ${theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
`;

export const Path = styled.path`
  fill: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const Rect = styled.rect`
  fill: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const Svg = styled.svg`
  cursor: pointer;
  display: grid;
  align-items: center;
`;

export const SideMenuButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  display: grid;
  place-items: center;
`;

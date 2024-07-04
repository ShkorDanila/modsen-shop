import styled from 'styled-components';

export const ShopHeading = styled.h5`
  text-decoration: none;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
  font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  line-height: ${(props) => props.theme.typefaces.pc.heading[5].line_height};
  text-indent: ${(props) =>
    props.theme.typefaces.pc.heading[5].paragraph_spacing};

  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const ControlsDesktopContainer = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
  font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  line-height: ${(props) => props.theme.typefaces.pc.heading[5].line_height};
  text-indent: ${(props) =>
    props.theme.typefaces.pc.heading[5].paragraph_spacing};
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;

  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const ControlsMobileContainer = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
  font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  line-height: ${(props) => props.theme.typefaces.pc.heading[5].line_height};
  text-indent: ${(props) =>
    props.theme.typefaces.pc.heading[5].paragraph_spacing};

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }

  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
`;

export const SideMenuButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  display: grid;
  place-items: center;
`;

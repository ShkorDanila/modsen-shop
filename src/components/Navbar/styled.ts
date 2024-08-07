import styled from 'styled-components';

export const LogoHeaderThemed = styled.span`
  font-family: ${(props) => props.theme.typefaces.font_logo};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.pc.logo.size};
    font-weight: ${(props) => props.theme.typefaces.pc.logo.weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.logo.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.logo.weight};
  }
  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
  user-select: none;
`;

export const LogoHeaderAccent = styled.span`
  user-select: none;
  font-family: ${(props) => props.theme.typefaces.font_logo};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.pc.logo.size};
    font-weight: ${(props) => props.theme.typefaces.pc.logo.weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.logo.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.logo.weight};
  }

  color: ${(props) => props.theme.main_colours.accent};
  transition: 0.2s ease-in-out;
`;

export const NavElementsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main_colours.white};
  transition: 0.2s ease-in-out;

  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
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

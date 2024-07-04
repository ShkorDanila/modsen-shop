import styled, { css, keyframes } from 'styled-components';

interface ISideMenuStyled {
  isOpened: boolean;
}

const slideIn = keyframes`
  from {
    width: 0%;
    opacity: 0%;
  }

  to {
    width: 85%;
    opacity: 100%;
  }
`;

const animationIn = css`
  animation: ${slideIn} 0.6s ease-out;
  width: 85%;
  height: 100vh;
  display: visible;
`;

const animationOut = css`
  width: 0%;
  display: none;
`;

export const SideMenuStyled = styled.div<ISideMenuStyled>`
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }
  flex-grow: 1;
  width: 85%;
  height: 100%;
  flex: 1;
  background-color: transparent;
  transition: all 0.3 ease;

  ${(props) => props.isOpened && animationIn}
  ${(props) => !props.isOpened && animationOut}
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

export const StyledMenuOption = styled.h1`
  font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
  font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
  line-height: ${(props) =>
    props.theme.typefaces.mobile.heading[1].line_height};
  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.main_colours.black};
`;

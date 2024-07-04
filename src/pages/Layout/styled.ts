import styled from 'styled-components';

interface IMenuProps {
  isOpened: boolean;
}

export const LayoutContainer = styled.div <{isOpened: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.main_colours.white};
  transition: 0.2s ease-in-out;
  padding-left: 3%;
  padding-right: 3%;
  ${props => props.isOpened && `height: 100%`}
`;

export const Header = styled.header<{isOpened: boolean}>`
  width: 100%;
  ${props => props.isOpened && `height: 100%`}
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const Main = styled.main<IMenuProps>`
  width: 100%;
  overflow: visible;
  height: 100%;
  flex: 1;
  ${(props) => props.isOpened && 'display: none;'}
`;

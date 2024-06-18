import styled from 'styled-components';

interface IMenuProps {
  isOpened: boolean;
}

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.main_colours.white};
  transition: 0.2s ease-in-out;
  height: 100%;
  padding-left: 3%;
  padding-right: 3%;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const Main = styled.main<IMenuProps>`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  flex: 1;
  ${(props) => props.isOpened && 'display: none;'}
`;

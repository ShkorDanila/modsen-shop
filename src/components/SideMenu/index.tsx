import React from 'react';
import { SideMenuStyled, StyledMenuOption, Ul } from './styled';
import { useSelector } from 'react-redux';
const SideMenu: React.FC = () => {
  return (
    <SideMenuStyled
      isOpened={useSelector((state: any) => state.isMenuOpened.value)}
    >
      <nav>
        <Ul>
          <li>
            <StyledMenuOption>Home</StyledMenuOption>
          </li>
          <li>
            <StyledMenuOption>Shop</StyledMenuOption>
          </li>
          <li>
            <StyledMenuOption>Contact</StyledMenuOption>
          </li>
        </Ul>
      </nav>
    </SideMenuStyled>
  );
};
export default SideMenu;

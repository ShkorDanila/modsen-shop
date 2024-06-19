import React from 'react';
import {
  LogoContainer,
  LogoHeaderAccent,
  LogoHeaderThemed,
  NavbarContainer,
  NavElementsContainer,
} from './styled';
import ControlsMenu from '@/components/ControlsMenu';
import SideMenu from '@/components/SideMenu';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavElementsContainer>
        <LogoContainer>
          <LogoHeaderAccent>Modsen S</LogoHeaderAccent>
          <LogoHeaderThemed>HOPPE</LogoHeaderThemed>
        </LogoContainer>
        <ControlsMenu></ControlsMenu>
      </NavElementsContainer>
      <SideMenu></SideMenu>
    </NavbarContainer>
  );
};
export default Navbar;

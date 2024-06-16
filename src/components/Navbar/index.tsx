import React from 'react';
import { LogoHeaderAccent, LogoHeaderThemed, NavbarContainer } from './styled';
import ControlsMenu from '@/utils/ControlsMenu';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>
        <LogoHeaderAccent>Modsen S</LogoHeaderAccent>
        <LogoHeaderThemed>HOPPE</LogoHeaderThemed>
      </div>
      <ControlsMenu></ControlsMenu>
    </NavbarContainer>
  )
};
export default Navbar;

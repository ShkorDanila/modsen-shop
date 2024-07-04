import React from 'react';

import ControlsMenu from '@/components/ControlsMenu';
import SideMenu from '@/components/SideMenu';
import { StyledLink } from '@/utils/StyledLink';

import { Hr } from '../Footer/styled';
import {
  LogoContainer,
  LogoHeaderAccent,
  LogoHeaderThemed,
  NavbarContainer,
  NavElementsContainer,
} from './styled';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavElementsContainer>
        <LogoContainer>
          <StyledLink to={'home'}>
            <LogoHeaderAccent>Modsen S</LogoHeaderAccent>
            <LogoHeaderThemed>HOPPE</LogoHeaderThemed>
          </StyledLink>
        </LogoContainer>
        <ControlsMenu></ControlsMenu>
      </NavElementsContainer>
      <Hr></Hr>
      <SideMenu></SideMenu>
    </NavbarContainer>
  );
};
export default Navbar;

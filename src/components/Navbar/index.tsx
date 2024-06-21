import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Hr } from '../Footer/styled';
import {
  LogoContainer,
  LogoHeaderAccent,
  LogoHeaderThemed,
  NavbarContainer,
  NavElementsContainer,
} from './styled';
import ControlsMenu from '@/components/ControlsMenu';
import SideMenu from '@/components/SideMenu';
import { changeMenuState } from '@/store/store';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavElementsContainer>
        <LogoContainer>
          <Link to={'home'} style={{ textDecoration: 'none' }}>
            <LogoHeaderAccent>Modsen S</LogoHeaderAccent>
            <LogoHeaderThemed>HOPPE</LogoHeaderThemed>
          </Link>
        </LogoContainer>
        <ControlsMenu></ControlsMenu>
      </NavElementsContainer>
      <Hr></Hr>
      <SideMenu></SideMenu>
    </NavbarContainer>
  );
};
export default Navbar;

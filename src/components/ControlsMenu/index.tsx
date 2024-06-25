import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ToggleSwitch from '@/components/ToggleSwitch/index';
import { THEME } from '@/constants/staticTheme';
import { switchTheme } from '@/store/currentThemeSlice';
import { changeMenuState } from '@/store/isMenuOpenedSlice';

import SvgMenu from '../SvgMenu';
import {
  ControlsDesktopContainer,
  ControlsMobileContainer,
  ShopHeading,
  SideMenuButton,
} from './styled';
import { Path, Svg } from '@/utils/utilStyles';
import { CartSvg } from '@/assets/CartSvg';

const ControlsMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [switchState, setSwitchState] = useState(true);

  const handleThemeCheckbox = () => {
    setSwitchState(!switchState);
    dispatch(switchTheme(switchState ? THEME.dark : THEME.light));
  };

  return (
    <>
      <ControlsDesktopContainer>
        <Link to={'shop'} style={{ textDecoration: 'none' }}>
          <ShopHeading>Shop</ShopHeading>
        </Link>
        <ToggleSwitch />
        <CartSvg/>
      </ControlsDesktopContainer>

      <ControlsMobileContainer>
      <CartSvg/>

        <input type="checkbox" onChange={handleThemeCheckbox}></input>

        <SideMenuButton
          onClick={() => {
            dispatch(changeMenuState(null));
          }}
        >
          <SvgMenu
            isOpened={useSelector((state: any) => state.isMenuOpened.value)}
          />
        </SideMenuButton>
      </ControlsMobileContainer>
    </>
  );
};
export default ControlsMenu;

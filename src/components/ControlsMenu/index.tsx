import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartSvg } from '@/assets/CartSvg';
import ToggleSwitch from '@/components/ToggleSwitch/index';
import { THEME } from '@/constants/staticTheme';
import { switchTheme } from '@/store/currentThemeSlice';
import { changeMenuState } from '@/store/isMenuOpenedSlice';
import { StyledLink } from '@/utils/StyledLink';

import SvgMenu from '../SvgMenu';
import {
  ControlsDesktopContainer,
  ControlsMobileContainer,
  ShopHeading,
  SideMenuButton,
} from './styled';

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
        <StyledLink to={'shop'}>
          <ShopHeading>Shop</ShopHeading>
        </StyledLink>
        <ToggleSwitch />
        <StyledLink to={'cart'}>
          <CartSvg />
        </StyledLink>
      </ControlsDesktopContainer>

      <ControlsMobileContainer>
        <StyledLink to={'cart'}>
          <CartSvg />
        </StyledLink>

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

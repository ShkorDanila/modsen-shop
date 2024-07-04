import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeMenuState } from '@/store/isMenuOpenedSlice';
import { StyledLink } from '@/utils/StyledLink';

import { SideMenuStyled, StyledMenuOption, Ul } from './styled';
const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <SideMenuStyled
      isOpened={useSelector((state: any) => state.isMenuOpened.value)}
    >
      <nav>
        <Ul>
          <li>
            <StyledLink
              onClick={() => dispatch(changeMenuState(null))}
              to={'home'}
            >
              <StyledMenuOption>Home</StyledMenuOption>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onClick={() => dispatch(changeMenuState(null))}
              to={'shop'}
            >
              <StyledMenuOption>Shop</StyledMenuOption>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to={'/contact'}
              onClick={() => dispatch(changeMenuState(null))}
            >
              <StyledMenuOption>Contact</StyledMenuOption>
            </StyledLink>
          </li>
        </Ul>
      </nav>
    </SideMenuStyled>
  );
};
export default SideMenu;

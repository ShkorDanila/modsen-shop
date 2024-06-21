import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SideMenuStyled, StyledMenuOption, Ul } from './styled';
import { changeMenuState } from '@/store/store';
const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <SideMenuStyled
      isOpened={useSelector((state: any) => state.isMenuOpened.value)}
    >
      <nav>
        <Ul>
          <li>
            <Link
              onClick={() => dispatch(changeMenuState(null))}
              to={'home'}
              style={{ textDecoration: 'none' }}
            >
              <StyledMenuOption>Home</StyledMenuOption>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(changeMenuState(null))}
              to={'shop'}
              style={{ textDecoration: 'none' }}
            >
              <StyledMenuOption>Shop</StyledMenuOption>
            </Link>
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

import { BurgerSvg } from '@/assets/BurgerSvg';
import { CrossSvg } from '@/assets/CrossSvg';
import React from 'react';

type PropTypes = {
  isOpened: boolean;
};

const SvgMenu: React.FC<PropTypes> = ({ isOpened }) => {
  if (isOpened)
    return (
      <CrossSvg></CrossSvg>
    );
  else
    return (
      <BurgerSvg></BurgerSvg>
    );
};
export default SvgMenu;

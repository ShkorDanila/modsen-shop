import React from 'react';

import { BurgerSvg } from '@/assets/BurgerSvg';
import { CrossSvg } from '@/assets/CrossSvg';

type PropTypes = {
  isOpened: boolean;
};

const SvgMenu: React.FC<PropTypes> = ({ isOpened }) => {
  if (isOpened) return <CrossSvg></CrossSvg>;
  else return <BurgerSvg></BurgerSvg>;
};
export default SvgMenu;

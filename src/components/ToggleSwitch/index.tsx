import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { THEME } from '@/constants/staticTheme';
import { switchTheme } from '@/store/currentThemeSlice';

import { StyledLabel } from './styled';

export default function ToggleSwitch() {
  const dispatch = useDispatch();

  const [switchState, setSwitchState] = useState(true);

  function handleOnChange() {
    setSwitchState(!switchState);
    dispatch(switchTheme(switchState ? THEME.dark : THEME.light));
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}

import React from 'react';

import { Path, Rect, Svg } from '../ControlsMenu/styled';

type PropTypes = {
  isOpened: boolean;
};

const SvgMenu: React.FC<PropTypes> = ({ isOpened }) => {
  if (isOpened)
    return (
      <Svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect
          width="1.17851"
          height="20.0346"
          rx="0.589254"
          transform="matrix(0.707105 -0.707108 0.707105 0.707108 0 0.833313)"
          fill="black"
        />
        <Rect
          width="1.17851"
          height="20.0346"
          rx="0.589254"
          transform="matrix(0.707105 0.707108 -0.707105 0.707108 14.1665 0)"
          fill="black"
        />
      </Svg>
    );
  else
    return (
      <Svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0.627681 1.87494L19.3708 1.87494C19.7157 1.87494 19.9954 1.45491 19.9952 0.937473C19.995 0.419955 19.7149 1.44315e-06 19.3701 1.4179e-06L0.626953 4.57376e-08C0.282065 2.04888e-08 0.00236035 0.420031 0.00256126 0.937472C0.00276216 1.45491 0.282845 1.87494 0.627681 1.87494Z"
          fill="black"
        />
        <Path
          d="M19.3706 6.56238L0.627441 6.56238C0.282553 6.56238 0.00284863 6.98241 0.00304953 7.49984C0.00325044 8.01728 0.283333 8.43731 0.628169 8.43731L19.3713 8.43731C19.7162 8.43731 19.9959 8.01728 19.9957 7.49985C19.9955 6.98241 19.7155 6.56238 19.3706 6.56238Z"
          fill="black"
        />
        <Path
          d="M19.3702 13.125L6.87499 13.125C6.53011 13.125 6.2504 13.545 6.25059 14.0625C6.25078 14.58 6.53085 14.9999 6.87568 14.9999L19.3709 14.9999C19.7158 14.9999 19.9955 14.5799 19.9953 14.0625C19.9952 13.545 19.7151 13.125 19.3702 13.125Z"
          fill="black"
        />
      </Svg>
    );
};
export default SvgMenu;

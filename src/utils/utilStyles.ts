import styled from 'styled-components';

export const Path = styled.path`
  fill: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const Rect = styled.rect`
  fill: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const Svg = styled.svg`
  cursor: pointer;
  display: grid;
  align-items: center;
`;

export const CircleFill = styled.circle`
  fill: ${(props) => props.theme.main_colours.black};
`;

export const CircleStroke = styled.circle`
  stroke: ${(props) => props.theme.main_colours.black};
`;

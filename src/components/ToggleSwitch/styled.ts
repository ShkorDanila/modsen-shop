import styled from 'styled-components';

export const StyledLabel = styled.label<{ checked: boolean }>`
  user-select: none;
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 29px;
  background: ${({ checked }) =>
    checked
      ? (props) => props.theme.neutral_colours.grey
      : (props) => props.theme.main_colours.black};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '8px' : '54%')};
    top: 5px;
    width: 19px;
    height: 19px;
    background: ${(props) => props.theme.main_colours.white};
    border-radius: 90px;
    transition: 0.3s ease-in-out;
  }
`;

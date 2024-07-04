import styled from 'styled-components';

interface IFooterProps {
  isOpened: boolean;
}

export const FooterWrapper = styled.div<IFooterProps>`
  padding: 10px;
  ${(props) => props.isOpened && 'display: none'}
`;

export const Hr = styled.hr`
  width: 100%;
  color: ${(props) => props.theme.neutral_colours.grey};
  transition: 0.2s ease-in-out;
`;

export const FooterContent = styled.div`
  display: grid;
  gap: 25px;
  place-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  padding-top: 25px;
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-template-columns: 100%;
    grid-auto-flow: row;
    width: 100%;
  }
`;

export const EmailInput = styled.input`
  cursor: pointer;
  height: 30px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.main_colours.white};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
  transition: 0.2s ease-in-out;
  font-family: ${(props) => props.theme.typefaces.font_primary};

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    width: 100%;
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 15px 0 15px 0;
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }
`;

export const CheckBox = styled.input``;

export const CheckBoxText = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
  font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  border: 0px;
  border-bottom: 1px solid ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const EmailButton = styled.button`
  background: transparent;
  padding-bottom: 5px;
  border: none;
`;

export const EmailWithArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const EmailAreaWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 100%;
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-column-start: 2;
  }
`;

export const Buttons = styled.ul`
  padding: 0%;
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
  list-style: none;
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-row-start: 1;
    grid-auto-flow: column;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-auto-flow: row;
    gap: 5px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: ${(props) => props.theme.typefaces.font_primary};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
  transition: 0.2s ease-in-out;

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
    font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  }
  :hover {
    color: ${(props) => props.theme.main_colours.black};
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.div`
  user-select: none;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
  font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
  color: ${(props) => props.theme.neutral_colours.dark_grey};
  transition: 0.2s ease-in-out;
  width: 100%;
  height: 100%;

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-row-start: 2;
    align-content: center;
  }
`;

export const Span = styled.span`
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    color: ${(props) => props.theme.main_colours.black};
    transition: 0.2s ease-in-out;
  }
`;

export const LiButton = styled.li`
  display: flex;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  place-content: center;
  height: 100%;
  width: 100%;

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    grid-row-start: 2;
    grid-column-start: 2;
    align-content: center;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    justify-content: start;
  }
`;

export const ContactButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const IconsText = styled.div`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
  font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
`;

export const Line = styled.hr`
  size: 2;
  color: ${(props) => props.theme.main_colours.black};
  transition: 0.2s ease-in-out;
  align-self: center;
  width: 50px;
  margin: 0;
`;

export const FollowText = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 3px;

  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    display: none;
  }
`;

export const StyledPath = styled.path`
  fill: ${(props) => props.theme.neutral_colours.dark_grey};

  transition: 0.2s ease-in-out;
  ${ContactButton}:hover && {
    fill: ${(props) => props.theme.main_colours.black};
  }
`;

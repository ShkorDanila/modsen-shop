import styled from "styled-components";

export const LayoutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: ${props => props.theme.main_colours.white};
    padding-left:7%;
    padding-right:7%;
    padding-top:3%;
`

export const Header = styled.header`
    width: 100%
`
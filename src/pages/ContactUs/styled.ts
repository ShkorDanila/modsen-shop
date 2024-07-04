import styled from "styled-components";

export const ContactUsPageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => props.theme.main_colours.white};
`

export const ContentWrapper = styled.div`
    width: 86%;
    display: flex;
    flex-direction: column;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
      align-items: center;
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
      align-items: start;
    }
`

export const Title = styled.p`
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[1].weight};
    }
`

export const MobileTitle = styled(Title)`
    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`

export const DesctopTitle = styled(Title)`
    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
`

export const Message = styled.p`
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;
    margin: 0;
    text-align: center;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        display: none;
    }
`
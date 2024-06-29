import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: row;
`

export const ProductInfoSection = styled.section`
    width: 100%;
    display: grid;      
    @media (width <= ${props => props.theme.device_sizing.size.tablet}) {
        grid-auto-flow: row;
    }
    @media (width > ${props => props.theme.device_sizing.size.tablet}) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`

export const PhotoSection = styled.section`
    width: 100%;
`

export const FastInfoSection = styled.section`
    width: 100%;
`

export const DesktopVersion = styled.div`
`
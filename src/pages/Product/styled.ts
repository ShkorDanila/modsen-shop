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
    padding: 10px;
    height: fit-content;
    display: grid;
    gap: 1em;
    grid-auto-flow: row;
`

export const ProductTitle = styled.h1`
    margin: 0;
    width: fit-content;
    height: fit-content;
`
export const ProductCost = styled.h3`
    margin: 0;
    width: fit-content;
    height: fit-content;
`

export const StarContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
`

export const RatingContainer = styled.div`
    width: fit-content;
    height: fit-content;
    align-items:center;
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
`

export const ReviewCounter = styled.h3`
    margin: 0;
`
interface IDescriptionState {
    isFull: boolean;
}

export const ProductDescription = styled.p<IDescriptionState>`

    @media (width <= ${(props: any) => props.theme.device_sizing.size.tablet}) {
        ${props => !props.isFull &&
        `
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;`
        }
    
    }
`

export const ViewMoreButton = styled.button`
    all: unset;
    @media (width > ${(props: any) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
`
import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    gap: 50px;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
`

export const ProductTitle = styled.h1`
    margin: 0;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[2].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
    }
`
export const ProductCost = styled.h3`
    margin: 0;
    width: fit-content;
    height: fit-content;
    margin: 0;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    line-height: ${(props) => props.theme.typefaces.pc.heading[3].line_height};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    line-height: ${(props) =>
      props.theme.typefaces.mobile.body.small.line_height};
  }

  color: ${(props) => props.theme.main_colours.accent};
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
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
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

    margin: 0;
    margin-top: 20px;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ViewMoreButton = styled.button`
    all: unset;
    @media (width > ${(props: any) => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
    margin: 0;
    margin-top: 10px;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.accent};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ProductCategories = styled.div`
     display: flex;
     bottom: 0;
`

export const ProductCategoriesTitle = styled.h2`
    margin: 0;
    margin-top: 20px;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const ProductCategoriesNames = styled.h2`
    margin: 0;
    margin-top: 20px;
    width: fit-content;
    height: fit-content;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.neutral_colours.dark_grey};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    }
`

export const MainInfoWrapper = styled.div`
    width: 100%;
    height: fit-content;
`

export const SimilarItemsSection = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 30px;
`

export const SimilarItemsTitle = styled.h2`
    font-family: ${(props) => props.theme.typefaces.font_primary};
    color: ${(props) => props.theme.main_colours.black};
    user-select: none;

    @media(width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[2].weight};
    }

    @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
        font-size: ${(props) => props.theme.typefaces.mobile.heading[2].size};
        font-weight: ${(props) => props.theme.typefaces.mobile.heading[2].weight};
    }
`

export const SimilarItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    flex-direction: auto;
    @media (width <= ${(props: any) => props.theme.device_sizing.size.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`
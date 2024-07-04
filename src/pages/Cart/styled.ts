import styled from "styled-components";

export const CartWrapper = styled.div<{isEmpty: boolean}>`
    display: flex;
    flex-direction: column;

    ${props => props.isEmpty && `display:none`}
`

export const SubmitCartButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    text-align: center;
    color: ${(props) => props.theme.main_colours.white};
    background-color: ${(props) => props.theme.main_colours.black};
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    padding: 7px;
    margin-left: 10px;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.body.large.size};
        font-weight: ${(props) => props.theme.typefaces.pc.body.large.weight};

        :hover{
            color: ${(props) => props.theme.main_colours.black};
            background-color: ${(props) => props.theme.main_colours.white};
        }
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }

    :active{
        color: ${(props) => props.theme.main_colours.black};
        background-color: ${(props) => props.theme.main_colours.white};
    }

    :disabled {
        background-color: ${(props) => props.theme.neutral_colours.light_grey};
        color: ${(props) => props.theme.neutral_colours.dark_grey};
        border-color: transparent;
        cursor: not-allowed;
    }
`

export const EmailInput = styled.input`
    border: none;
    padding: 5px;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.main_colours.white};
    border-bottom: 1px solid ${(props) => props.theme.neutral_colours.grey};
    color:  ${(props) => props.theme.neutral_colours.dark_grey};
    font-family: ${(props) => props.theme.typefaces.font_primary};

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.heading[5].size};
        font-weight: ${(props) => props.theme.typefaces.pc.heading[5].weight};
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }


`

export const SubmitSection = styled.div`
    display: flex;
`

export const EmptyPage = styled.div<{isEmpty: boolean}>`

    margin-top: 14rem;
    margin-bottom: 14rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-items: center;
    align-items: center;
    flex-grow: 1;
    
    ${props => !props.isEmpty && `display:none`}
`

export const EmptyTitle = styled.h1 `
    all: unset;
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

export const ToShopButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    text-align: center;
    color: ${(props) => props.theme.main_colours.white};
    background-color: ${(props) => props.theme.main_colours.black};
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.body.large.size};
        font-weight: ${(props) => props.theme.typefaces.pc.body.large.weight};

        :hover{
            color: ${(props) => props.theme.main_colours.black};
            background-color: ${(props) => props.theme.main_colours.white};
        }
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
        
        padding: 0.5rem;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
    }

    :active{
        color: ${(props) => props.theme.main_colours.black};
        background-color: ${(props) => props.theme.main_colours.white};
    }
`

import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        flex-direction: row;
        width: 50vw;
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        flex-direction: column;
        width: 86vw;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 50vw;
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 86vw;
    }
`

export const Input = styled.input`
    margin-top: 50px;
    width: 100%;
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

    ::-webkit-autofill {
    background-color: red;
  }

`

export const MessageInput = styled(Input)`
    width: 100%;
`

export const SubmitButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family: ${(props) => props.theme.typefaces.font_primary};
    text-align: center;
    color: ${(props) => props.theme.main_colours.white};
    background-color: ${(props) => props.theme.main_colours.black};
    border: 1px solid ${(props) => props.theme.main_colours.black};
    border-radius: 5px;
    width: 300px;
    height: 35px;
    margin: 50px 0 50px 0;

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
`

export const InputWrapper = styled.div`
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 40%;
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
`

export const ErrorMessage = styled.p`
    @media (width >= ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.pc.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.pc.body.small.weight};
    }
    @media (width < ${(props) => props.theme.device_sizing.size.laptop}) {
        font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
        font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    }

    color: ${(props) => props.theme.service_colours.errors};
`

export const Select = styled.select`
    padding: 3px;
    margin-top: 50px;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
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

    ::-webkit-autofill {
    background-color: red;
  }
`
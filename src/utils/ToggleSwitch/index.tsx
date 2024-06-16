import { switchTheme } from "@/store/store";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import theme from "../static_theme";

export default function ToggleSwitch() { 

  const dispatch = useDispatch()
  
    const [switchState, setSwitchState] = useState(false);  
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
      setSwitchState(!switchState);
      dispatch(switchTheme(switchState === true ? theme.dark : theme.light))
    }
    return (    
      <StyledLabel htmlFor="checkbox" checked={switchState}> 
        <input 
          id="checkbox" 
          type="checkbox" 
          checked={switchState}
          onChange={handleOnChange} />    
      </StyledLabel>
    );
  }

const StyledLabel = styled.label<{ checked: boolean }>`  
user-select: none;
cursor: pointer;  
text-indent: -9999px;  
width: 60px;  
height: 30px;  
background: ${({ checked }) => (checked ? "gray" :  "green")};  
display: block;  
border-radius: 100px;  
position: relative;
&:after {    
content: "";    
position: absolute;    
left: ${({ checked }) => (checked ? "8px" : "54%")};    top: 5.5px;    
width: 19px;    
height: 19px;    
background: #fff;    
border-radius: 90px;    
transition: 0.3s;  
}`;
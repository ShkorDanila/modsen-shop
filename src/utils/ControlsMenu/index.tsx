import React from 'react';
import { ControlsDesktopContainer, ControlsMobileContainer, ShopHeading } from './styled';
import ToggleSwitch from '../ToggleSwitch';

const ControlsMenu:React.FC = () => {
    return (
        <>
            <ControlsDesktopContainer>
                <ToggleSwitch></ToggleSwitch>
                <ShopHeading>Shop</ShopHeading>
            </ControlsDesktopContainer>
            <ControlsMobileContainer>
                Mobile
            </ControlsMobileContainer>
        </>
        )
}
export default ControlsMenu;
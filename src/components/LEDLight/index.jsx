import React from "react";
import { Blur, LightContainer } from "./styles";

export function LEDLight(props){

    function convertColor(colorName){
        if(colorName === 'red') return '#FF0040'
        if(colorName === 'yellow') return '#FFFF19'
        if(colorName === 'green') return '#49F562'
        return '#FFF'
    }

    return(
        <LightContainer color={convertColor(props.color)}>
            <Blur />
        </LightContainer>
    )
}
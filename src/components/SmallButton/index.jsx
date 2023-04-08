import React from "react";
import { ButtonContainer } from "./styles";

export function SmallButton(props){
    function convertColor(colorName){
        if(colorName === 'red') return '#FF003D'
        if(colorName === 'blue') return '#31DDFF'
        return '#323F4B'
    }

    return(
        <ButtonContainer color={convertColor(props.color)} />
    )
}
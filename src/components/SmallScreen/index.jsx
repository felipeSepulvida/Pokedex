import React from "react";
import { ScreenContainer } from "./styles";

export function SmallScreen(props){
    return(
        <ScreenContainer>
            {(props.types)? props.types.map((type) => {
                return(
                    <img key={type.type.name} src={`typeIcons/${type.type.name}.svg`} alt='' />
                )
            }) : ''}
        </ScreenContainer>
    )
}
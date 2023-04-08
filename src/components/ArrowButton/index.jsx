import React from "react";
import { ArrowContainer, LargerTriangle, SmallerTriangle } from "./styles";

export function ArrowButton(props){
    return(
        <ArrowContainer direction={props.direction} gridPosition={props.gridPosition} viewBox="-50 -50 300 300">
            <LargerTriangle strokeLinejoin="round" points="100,0 0,200 200,200" />
            <SmallerTriangle strokeLinejoin="round" points="100,0 0,200 200,200" />
        </ArrowContainer>   
    )
}
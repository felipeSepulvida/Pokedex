import React from "react";
import { BigLightContainer, LightsContainer, PieceContainer } from "./styles";
import { LEDLight } from "../LEDLight";

export function UpperPiece(){
    return(
        <PieceContainer>
            <BigLightContainer>
                <div>
                    <div />
                </div>
            </BigLightContainer>
            <LightsContainer>
                <LEDLight color='red' />
                <LEDLight color='yellow' />
                <LEDLight color='green' />
            </LightsContainer>
            
        </PieceContainer>
    )
}
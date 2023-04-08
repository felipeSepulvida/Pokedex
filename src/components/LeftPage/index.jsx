import React from "react";
import { AudioOutput, AudioOutputContainer, BottomSection, ButtonsContainer, MainScreen, MainScreenContainer, PageBackground, PageBorder } from "./styles";
import { LEDLight } from "../LEDLight";
import { SmallButton } from "../SmallButton";
import { SmallScreen } from "../SmallScreen";
import { ArrowButton } from "../ArrowButton";


export function LeftPage(){
    return(
        <PageBorder>
            <PageBackground>
                <MainScreenContainer>
                    <div>
                        <LEDLight color="red" />
                        <LEDLight color="red" />
                    </div>
                    <MainScreen />
                    <div>
                        <LEDLight color={'red'} />
                        <AudioOutputContainer>
                            <AudioOutput />
                            <AudioOutput />
                            <AudioOutput />
                        </AudioOutputContainer>
                    </div>
                </MainScreenContainer>
                <BottomSection>
                    <div>
                        <ButtonsContainer>
                            <SmallButton color='red' />
                            <SmallButton color='blue' />
                        </ButtonsContainer>
                        <SmallScreen />
                    </div>
                    <div>
                        <ArrowButton direction='up' gridPosition='1 / 2 / 2 / 3' />
                        <ArrowButton direction='right' gridPosition='2 / 3 / 3 / 4' />
                        <ArrowButton direction='down' gridPosition='3 / 2 / 4 / 3' />
                        <ArrowButton direction='left' gridPosition='2 / 1 / 3 / 2' />
                    </div>
                </BottomSection>
                
                
            </PageBackground>
        </PageBorder>
    )
}
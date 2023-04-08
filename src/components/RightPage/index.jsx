import React from "react";
import { BottomScreensContainer, MainButton, MainButtonsContainer, MainScreen, PageBackground, PageBorder, Searchbar, SearchContainer } from "./styles";
import { SmallButton } from "../SmallButton";

import infoIcon from '../../assets/icons/user.svg'
import descIcon from '../../assets/icons/message.svg'
import statIcon from '../../assets/icons/dumbell.svg'
import evolIcon from '../../assets/icons/pokeball.svg'
import searchIcon from '../../assets/icons/search.svg'
import { SmallScreen } from "../SmallScreen";

export function RightPage(){
    return(
        <PageBorder>
            <PageBackground>
                <MainScreen />
                <MainButtonsContainer>
                    <MainButton>
                        <img src={infoIcon} alt='' />
                    </MainButton>
                    <MainButton>
                        <img src={descIcon} alt='' />
                    </MainButton>
                    <MainButton>
                        <img src={statIcon} alt='' />
                    </MainButton>
                    <MainButton>
                        <img src={evolIcon} alt='' />
                    </MainButton>
                </MainButtonsContainer>
                <SearchContainer>
                    <Searchbar> 
                        <img src={searchIcon} alt='' />
                        <input />
                    </Searchbar>
                    <SmallButton />
                </SearchContainer>
                <BottomScreensContainer>
                    <SmallScreen />
                    <SmallScreen />
                </BottomScreensContainer>
                
            </PageBackground>
        </PageBorder>
    )
}
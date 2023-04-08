import styled from "styled-components";

export const PieceContainer = styled.div`
    box-sizing: border-box;

    background-color: #FF0040;

    width: 494px;
    height: 180px;
    
    display: flex;
    gap: 20px;

    padding: 20px;

    border: solid 5px black;

    transform: translate(3px, 116px);
`

export const BigLightContainer = styled.div`
    box-sizing: border-box;

    background-color: white;

    width: 90px;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid black;
    border-radius: 50%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div{
        box-sizing: inherit;

        background-color: #609ED9;

        position: relative;

        width: 80px;
        height: 80px;

        border: inherit;
        border-radius: 50%;

        div{
            background-color: white;

            position: absolute;
            left: 18.75%;
            right: 50%;
            top: 18.75%;
            bottom: 50%;

            width: 25px;
            height: 25px;

            filter: blur(5px);
        }
    }
`

export const LightsContainer = styled.div`
    display: flex;
    gap: 10px;
`
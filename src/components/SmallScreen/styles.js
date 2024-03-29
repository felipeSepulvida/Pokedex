import styled from "styled-components"

export const ScreenContainer = styled.div`
    box-sizing: border-box;

    background-color: #3CC850;

    width: 120px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: 5px solid black;
    border-radius: 10px;

    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        width: 40%;
    }
`
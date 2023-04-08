import styled from "styled-components";

export const LightContainer = styled.div`
    background-color: ${props => props.color};

    box-sizing: border-box;

    position: relative;

    width: 20px;
    height: 20px;

    border: 2px solid black;
    border-radius: 50%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Blur = styled.div`
    background-color: white;

    width: 5px;
    height: 5px;

    position: absolute;
    left: 25%;
    right: 50%;
    top: 25%;
    bottom: 50%;

    filter: blur(2px);
`
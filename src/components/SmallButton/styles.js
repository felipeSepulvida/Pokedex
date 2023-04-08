import styled from "styled-components";

export const ButtonContainer = styled.div`
    background-color: ${props => props.color};

    box-sizing: border-box;

    width: 50px;
    height: 15px;

    border: 2px solid #000000;
    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    cursor: pointer;
`
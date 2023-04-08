import styled from "styled-components";

export const ArrowContainer = styled.svg`
    width: 50px;
    height: 50px;

    transform: rotate(${props => 
        (props.direction === 'up')? '0deg' :
        (props.direction === 'right')? '90deg' :
        (props.direction === 'down')? '180deg' :
        '270deg'
    });

    grid-area: ${props => props.gridPosition};

    cursor: pointer;
`

export const LargerTriangle = styled.polygon`
    fill: #000;
    stroke: #000;
    stroke-width: 80;
`

export const SmallerTriangle = styled.polygon`
    fill: #28323C;
    stroke: #28323C;
    stroke-width: 10;
`
import styled from "styled-components";

export const PieceBorder = styled.div`
    width: 494px;
    height: 195px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 3;

    transform: translate(2px, 116px);

    background-color: black;

    -webkit-clip-path: polygon(100% 40%, 70% 40%, 55% 100%, 0 100%, 0 0, 100% 0);
    clip-path: polygon(100% 43%, 70% 43%, 55% 100%, 0 100%, 0 0, 100% 0);
`

export const PieceBackground = styled.div`
    width: 484px;
    height: 185px;

    background-color: #FF0040;

    -webkit-clip-path: polygon(100% 40%, 70% 40%, 55% 100%, 0 100%, 0 0, 100% 0);
    clip-path: polygon(100% 40%, 70% 40%, 55% 100%, 0 100%, 0 0, 100% 0);
`
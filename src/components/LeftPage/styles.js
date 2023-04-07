import styled from "styled-components";

export const PageBorder = styled.div`
    background-color: black;
    
    width: 431px;
    height: 675px;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateX(5px);

    -webkit-clip-path: polygon(75.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 54.5% 16.7%);
    clip-path: polygon(75.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 54.5% 16.7%);
`
export const PageBackground = styled.div`
    background-color: #FF0040;

    width: 421px;
    height: 665px;

    -webkit-clip-path: polygon(76.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 55% 16.7%);
    clip-path: polygon(76.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 55% 16.7%);  
`
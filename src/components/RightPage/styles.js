import styled from "styled-components";

export const PageBorder = styled.div`
    background-color: black;
    
    width: 431px;
    height: 675px;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateX(-5px);

    -webkit-clip-path: polygon(44% 16.7%, 100% 16.7%, 100% 100%, 0 100%, 0 0, 19% 0);
    clip-path: polygon(44.5% 16.7%, 100% 16.7%, 100% 100%, 0 100%, 0 0, 20% 0);

    z-index: 2;
`


export const PageBackground = styled.div`
    background-color: #FF0040;

    width: 421px;
    height: 665px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    
    -webkit-clip-path: polygon(44% 16.7%, 100% 16.7%, 100% 100%, 0 100%, 0 0, 19% 0);
    clip-path: polygon(44% 16.7%, 100% 16.7%, 100% 100%, 0 100%, 0 0, 19% 0);
`

const Container = styled.div`
    box-sizing: border-box;

    img{
        width: 24px;
        height: 24px;
    }
`

export const MainScreen = styled(Container)`
    background-color: #3CC850;

    width: 300px;
    height: 168px;

    margin-top: 150px;

    border: 5px solid black;
    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const MainButtonsContainer = styled(Container)`
    background-color: black;

    width: 300px;
    height: 54px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    > * {
        &:first-child{
            border-radius: 5px 0px 0px 5px;
        }
        &:last-child{
            border-radius: 0px 5px 5px 0px;
        }
    }
`

export const MainButton = styled(Container)`
    background-color: #28B4FA;
 
    width: 68.75px;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export const SearchContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`

export const Searchbar = styled(Container)`
    background-color: #D9D9D9;

    width: 300px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    padding: 5px;

    border: 5px solid black;
    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    input{
        background-color: transparent;

        font-family: 'Roboto', sans-serif;

        height: 100%;

        flex: 1;

        border: none;

        &:focus{
            outline: none;
        }
    }
`

export const BottomScreensContainer = styled(Container)`
    width: 300px;
    
    flex: 1;

    margin-bottom: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
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

    display: flex;
    flex-direction: column;
    align-items: center;

    -webkit-clip-path: polygon(76.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 55% 16.7%);
    clip-path: polygon(76.4% 0, 100% 0, 100% 100%, 0 100%, 0 16.7%, 55% 16.7%);  
`

const Container = styled.div`
    box-sizing: border-box;
`

export const MainScreenContainer = styled(Container)`
    background-color: #D9D9D9;

    width: 300px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-top: 150px;
    
    border: 5px solid black;
    border-radius: 10px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    > * {
        &:first-child{
            display: flex;
            gap: 50px;
        }
        &:last-child{
            box-sizing: border-box;

            width: 100%;
            
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 25px;
        }
    }
    
`

export const MainScreen = styled(Container)`
    background-color: #3CC850;

    width: 280px;
    height: 200px;

    border: 5px solid black;
    border-radius: 10px;

    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const AudioOutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const AudioOutput = styled(Container)`
    background-color: black;

    width: 50px;
    height: 5px;

    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const BottomSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    padding: 30px;

    > * {
        &:first-child{
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &:last-child{
            display: grid;
            grid-template-columns: 50px 50px 50px;
            grid-template-rows: 50px 50px 50px;
        }
    }
`
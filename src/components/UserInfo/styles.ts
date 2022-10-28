import styled from 'styled-components'


export const Container = styled.div`
    width: 170px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: -100px;
    left: -150px;
    font-size: 17px;
    background-color: #e9e9e9;
`

export const Button = styled.div`
    width: 80%;
    height: 40%;
    background-color: #2779a7;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;    
    padding: 5px 10px;
    border-radius: 4px;

    & > a {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }
`
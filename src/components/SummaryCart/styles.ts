import styled from 'styled-components'

export const SummaryContainer = styled.div`
    width: 500px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    background-color: #f4f6f8;
    padding: 25px 30px;
    border-left: 1px solid #e9e9e9;

    @media (max-width: 600px) { 
        width: 100%;
        padding: 5px 10px;
    }
`    

export const SummaryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h4 {
        display: flex;
        align-items: center;
    }
    & > h4 > span {
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;        
    }
`

export const Remove = styled.div`
    cursor: pointer;
    color: grey;
`

export const OrderSummary = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #e9e9e9;
`

export const Item = styled.div`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 10% 40% 40%;
    grid-gap: 5%;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    margin: auto 0;
    border-radius: 4px;
`

export const Description = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto 0;

    & > p {
        font-size: 10px;
        color: grey;
        padding: 0;
        margin: 0;
    }

    & > h4 {
        padding: 0;
        margin: 0;
    }
`

export const Quantities = styled.div`
    display: flex;
    width: 100%;
    margin: auto 0;
    align-items: center;
`

export const Button = styled.button`
    background-color: #2779a7;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    font-size: 17px;
    color: white;
    border: none;
    cursor: pointer;
`

export const Input = styled.input`
    width: 30px;
    height: 25px;
    padding: 5px;
    font-size: 17px;
    text-align: center;
    border-radius: 10px;
    border: none;
    margin: 0 5px;
    border: 1px solid #e9e9e9;

    -moz-appearance: textfield;   
`   

export const Price = styled.span`
    margin: auto 5px; 
    font-weight: 500;
`

export const Delete = styled.span`
    font-size: 25px;
    cursor: pointer;
    
`

export const Totals = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 20%;
    margin: 15px auto;

    & > p {
        display: flex;
        width: fit-content;
        margin: 5px 0;
    }

    & > .right {
        text-align: end;
        margin-left: auto;
    }
`

export const Total = styled.p`
    display: flex;
`

export const BuyContainer = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const Buy = styled.button`
    width: 200px;
    height: 30px;
    padding: 5px 10px;
    border-radius: 25px;
	background-color: #2779a7;
	color: white;
	margin: 10px 0;
    font-size: 17px;    
	border: none;
	cursor: pointer;
`
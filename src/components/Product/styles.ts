import styled from 'styled-components'

export const ProductContainer = styled.div`    
    width: 80%;
    height: 320px;
    margin: auto;
    text-align: center;
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

export const ProductDescription = styled.p`
    width: 80%;
    margin: 0 auto;
`

export const Price = styled.p`

`

export const Amount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    margin: 0 auto;
`

export const Button = styled.button`
    background-color: #2779a7;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    border: none;
    cursor: pointer;
`

export const Input = styled.input`
    width: 50px;
    height: 30px;
    padding: 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    border: none;

    -moz-appearance: textfield;   
`   

import styled from 'styled-components'

export const PaymentContainer = styled.div`
    width: 500px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    background-color: #f4f6f8;
    padding: 25px 30px;
    border-left: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {         
        width: 100%;
        padding: 5px 10px;
    }
`
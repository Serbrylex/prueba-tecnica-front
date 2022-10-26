import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    height: auto;    
`

export const NavBar = styled.nav`
    width: 80%;
    height: 70px;
    margin: 0 auto;
    padding: 10px 0;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
`

export const Number = styled.p`
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    text-align: center;
    font-size: 10px;
    color: white;
    top: -10px;
    right: -5px;
    background-color: red;
`

export const Title = styled.h2`

`

export const Directions = styled.div`
    width: auto;    
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    & > span {
       margin: 0 10px;
       cursor: pointer;
       position: relative; 
    }    
`

export const Main = styled.div`
    width: 80%;
    margin: 50px auto 50px auto;
    height: 80vh;
    display: flex;    
`

export const Description = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > p {
        margin: 30px 0;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const ShopNow = styled.button`
    width: 100px;
    height: 50px;
    padding: 5px 10px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #2779a7;
    border: none;
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
    margin: 0 auto;
    height: auto;
    grid-gap: 20px;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #231e1a;
`

export const DesTitle = styled.h1`

`

export const FooterLinks = styled.div`
    display: flex;
`

export const Copy = styled.p`

`

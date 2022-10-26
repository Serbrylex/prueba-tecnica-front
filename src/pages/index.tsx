import { useState, useEffect } from 'react';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import { 
  HomeContainer, NavBar, Title, Directions, Main, Description, 
  DesTitle, ShopNow, ProductsGrid, Footer, FooterLinks, Copy, Image,
  Number
} from '../styles/Home'

import Product from '../components/Product'
import SummaryCart from '../components/SummaryCart'

export default function Home() {

  const [products, setProducts] = useState<TProd[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(false)
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/products/', {
        method: 'GET'
      });
      return response.json();
    }

    fetchData().then((data) => {
      setProducts(data);
      console.log(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <HomeContainer>
      <NavBar>
        <Title>
          The Best Place
        </Title>
        <Directions>
          <span><AiOutlineUser /></span>
          <span onClick={()=>setCart(!cart)}><AiOutlineShoppingCart /><Number>0</Number></span>
        </Directions>
      </NavBar>

      {cart && <SummaryCart />}

      <Main>
        <Description>
          <DesTitle>
            The Best Place In The World  
          </DesTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolorem consectetur iusto fugit facere perspiciatis? Consequuntur, eos voluptatibus, iure reprehenderit maxime rerum nihil quaerat, doloremque reiciendis cupiditate placeat molestias veniam!
          </p>
          <ShopNow>Shop Now</ShopNow>
        </Description>
        <Image src="/virtual-reality-cuate.svg" alt="background mage"/>
      </Main>
      <ProductsGrid>
        {products !== undefined && products.map((prod, index)=>(
          <Product prod={prod} key={index}/>          
        ))}
      </ProductsGrid>    
      <Footer>
        <DesTitle>The Best Place</DesTitle>
        <FooterLinks></FooterLinks>
        <Copy>Copyright 2021 | The Best Place</Copy>
      </Footer>
    </HomeContainer>
  )
}

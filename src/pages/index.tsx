import { useState, useEffect } from 'react';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import { 
  HomeContainer, NavBar, Title, Directions, Main, Description, 
  DesTitle, ShopNow, ProductsGrid, Footer, Copy, Image,
  Number
} from '../styles/Home'

import Product from '../components/Product'
import SummaryCart from '../components/SummaryCart'
import UserInfo from '../components/UserInfo'
import Loading from '../components/Loading'
import Payment from '../components/Payment'

import { useAppSelector } from '../hooks/useReduxH'

export default function Home() {

  const [products, setProducts] = useState<TProd[] | undefined>(undefined)
  const [payment, setPayment] = useState(false)
  const [showUser, setShowUser] = useState(false) 
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(false)

  const sumProducts = useAppSelector(store => store.cart.sumProducts)

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
      <Loading />
    )
  }

  return (
    <HomeContainer>
      <NavBar>
        <Title>
          The Best Place
        </Title>
        <Directions>
          <span onMouseOver={()=>setShowUser(true)} onMouseOut={()=>setShowUser(false)}>
            <AiOutlineUser />
            {showUser && <UserInfo />}          
          </span>
          <span onClick={()=>setCart(!cart)}><AiOutlineShoppingCart /><Number>{sumProducts}</Number></span>
        </Directions>
      </NavBar>

      {cart && <SummaryCart setHide={setCart} setPayment={setPayment}/>}
      {payment && <Payment />}

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
        <Copy>Copyright 2021 | The Best Place</Copy>
      </Footer>
    </HomeContainer>
  )
}


import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsTrash2 } from 'react-icons/bs'

import {
    SummaryContainer, SummaryHeader, Remove, OrderSummary, 
    Item, Image, Description, Quantities, Button, Input, 
    Price, Delete, Totals, Total, Buy, BuyContainer
} from './styles'


import { useAppSelector, useAppDispatch } from '../../hooks/useReduxH'
import { setAddToCart, setDeleteAllCart, setDeleteFromCart, setDeleteAllProductFromCart } from '../../actions/index';


const ItemCart = ({ prod,  index } : {prod: TProdCart, index: number}) => {
    const [amount, setAmount] = useState<number>(prod.amount)
    const dispatch = useAppDispatch()

    useEffect(()=>{        

        if ('amount' in prod && prod.amount !== amount) {
            setAmount(prod.amount)
        }
    }, [prod])

    if (prod.amount <= 0) {
        return <></>
    }

    return(
        <Item>
            <Image src={prod.image} alt="product image"/>
            <Description>
                <h4>{prod.item_name}</h4>
                <p>{prod.short_description}</p>
            </Description>
            <Quantities>
                <Button onClick={()=>{
                    if (amount > 0) { setAmount(amount - 1) }
                    dispatch(setDeleteFromCart(index))
                }}>-</Button>
                <Input value={amount} type="number" onChange={e => setAmount(parseInt(e.target.value))}/>
                <Button onClick={()=>{
                    if (amount < prod.stock) {setAmount(amount + 1)}
                    dispatch(setAddToCart(prod))
                }}>+</Button>
                <Price>${prod.price_without_tax}</Price>
                <Delete onClick={()=>dispatch(setDeleteAllProductFromCart(index))}><BsTrash2 /></Delete>
            </Quantities>
        </Item>
    )
} 

const SummaryCart = ({ setHide, setPayment }: { setHide: any, setPayment: any }) => {

    const cart = useAppSelector(store => store.cart)
    const user = useAppSelector(store => store.user)
    const dispatch = useAppDispatch()
    const history = useRouter()

    const handlePayment = () => {
        if (user.isAuth) {
            setPayment(true)
            setHide(false)
        } else {
            history.push('/login')
        }
    }

    return (
        <SummaryContainer>
            <SummaryHeader>
                <h4>
                    <span><AiOutlineShoppingCart  onClick={()=>setHide(false)}/></span> 
                    Order Summary
                </h4>
                <Remove onClick={()=>dispatch(setDeleteAllCart(''))}>
                    Remove all
                </Remove>
            </SummaryHeader>

            <OrderSummary>
                {cart.products.map((prod, index) => (
                    <ItemCart prod={prod} index={index} key={index}/>
                ))}                
            </OrderSummary>

            <Totals>
                <p>Subtotal</p> <p className="right">${cart.subtotal.toFixed(2)}</p>
                <p>Sipping fees</p> <p className="right">${cart.shipping_fes.toFixed(2)}</p>
                <p>Taxes</p> <p className="right">${cart.taxes.toFixed(2)}</p>
                <Total>Total (including tax)</Total> <Total className="right">${cart.total.toFixed(2)}</Total>
            </Totals>
            <BuyContainer>
                <Buy onClick={()=>handlePayment()}>Select Pay Method</Buy>
            </BuyContainer>
        </SummaryContainer>
    )
}

export default SummaryCart
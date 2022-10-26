import { useState } from 'react'

import {
    ProductContainer, Image, ProductDescription, 
    Price, Amount, Button, Input
} from './styles'

const Product = ({ prod, key } : {prod: TProd, key: number}) => {

    const [amount, setAmount] = useState<number>(0)

    return (
        <ProductContainer key={key}>            
            <Image src={prod.image} alt={prod.item_name}/>
            <ProductDescription>
                <h3>{prod.item_name}</h3>                
                <Price>${prod.price_without_tax}</Price>
                <Amount>
                    <Button onClick={()=>setAmount(amount-1)}>-</Button>
                    <Input value={amount} type="number" onChange={e => setAmount(parseInt(e.target.value))}/>
                    <Button onClick={()=>setAmount(amount+1)}>+</Button>
                </Amount>     
            </ProductDescription>
        </ProductContainer>
    )
}

export default Product
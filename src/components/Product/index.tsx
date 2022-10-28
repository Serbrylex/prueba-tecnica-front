import {
    ProductContainer, Image, ProductDescription, 
    Price, Amount, Button, Input
} from './styles'

import { useAppSelector, useAppDispatch } from '../../hooks/useReduxH'
import { setAddToCart } from '../../actions/index';

const Product = ({ prod, key } : {prod: TProd, key: number}) => {
    const dispatch = useAppDispatch()
    return (
        <ProductContainer key={key}>            
            <Image src={prod.image} alt={prod.item_name}/>
            <ProductDescription>
                <h3>{prod.item_name}</h3>                
                <Price>${prod.price_without_tax}</Price>
                <Amount>
                    <Button onClick={()=>dispatch(setAddToCart(prod))}>Add Product</Button>                    
                </Amount>     
            </ProductDescription>
        </ProductContainer>
    )
}

export default Product
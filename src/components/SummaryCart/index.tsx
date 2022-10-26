
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsTrash2 } from 'react-icons/bs'

import {
    SummaryContainer, SummaryHeader, Remove, OrderSummary, 
    Item, Image, Description, Quantities, Button, Input, 
    Price, Delete, Totals, Total
} from './styles'

const SummaryCart = () => {

    return (
        <SummaryContainer>
            <SummaryHeader>
                <h4><AiOutlineShoppingCart /> Oder Summary</h4>
                <Remove>
                    Remove all
                </Remove>
            </SummaryHeader>

            <OrderSummary>
                <Item>
                    <Image />
                    <Description>
                        <h4>Item name</h4>
                        <p>Short Description</p>
                    </Description>
                    <Quantities>                        
                        <Button>-</Button>
                        <Input value="0" />
                        <Button>+</Button>                                                    
                        <Price>$90</Price>
                        <Delete><BsTrash2 /></Delete>
                    </Quantities>
                </Item>
            </OrderSummary>

            <Totals>
                <p>Subtotal</p> <p>$200.00</p>
                <p>Sipping fees</p> <p>$3.00</p>
                <p>Taxes</p> <p>$5.39</p>
                <Total>Total (including tax)</Total> <Total>$2000.00</Total>
            </Totals>
        </SummaryContainer>
    )
}

export default SummaryCart
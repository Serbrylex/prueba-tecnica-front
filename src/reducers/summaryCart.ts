import { ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_CART, DELETE_ALL_PRODUCT_FROM_CART } from '../actions/type'

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('cartSummary') : null;

type State = {
	products: TProdCart[],
	sumProducts: number,
	subtotal: number,
	shipping_fes: number,
	taxes: number,
	total: number
}

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	products: [],
	sumProducts: 0,
	subtotal: 0,
	shipping_fes: 0,
	taxes: 0,
	total: 0
}

const cartSummaryReducer = (state = initialState, action: TAction) => {
	switch(action.type) {
		case ADD_TO_CART:
			// Validamos que no este repetido
			let repetido = false
			let pasa = false			
			
			state.products.forEach((prod, index) => {
				if (prod.pk == action.payload.pk) {
					repetido = true
					if (
						'amount' in state.products[index] && 
						state.products[index].stock > state.products[index].amount
					) {
						state.products[index].amount += 1
						pasa = true
					}
				}
			})

			if (!repetido && action.payload.stock > 0) {
				state.products.push({...action.payload, amount: 1})
				pasa = true
			}
			if (pasa) {
				state.sumProducts += 1
				state.subtotal += action.payload.price_without_tax
				state.shipping_fes += action.payload.shipping_fee			
				// los impuestos son del 16% suponiendo
				state.taxes = state.subtotal * 0.16 
				state.total = state.subtotal + state.taxes + state.shipping_fes
				window.localStorage.setItem('cartSummary', JSON.stringify({ ...state }))
			}
			
			return { ...state }
		case DELETE_FROM_CART:
			if (state.products.length > action.payload) {
				state.sumProducts -= 1
				state.subtotal -= state.products[action.payload].price_without_tax
				state.shipping_fes -= state.products[action.payload].shipping_fee
				// los impuestos son del 16% suponiendo
				state.taxes = state.subtotal * 0.16 
				state.total = state.subtotal + state.taxes + state.shipping_fes
				if (state.products[action.payload].amount == 1) {
					state.products.splice(action.payload, 1);
				} else {
					state.products[action.payload].amount -= 1
				}
					
				window.localStorage.setItem('cartSummary', JSON.stringify({ ...state }))			
			}
			return { ...state }
		case DELETE_ALL_PRODUCT_FROM_CART:
			if (state.products.length > action.payload) {
				let prd = state.products[action.payload]
				state.sumProducts -= prd.amount
				state.subtotal -= prd.price_without_tax * prd.amount
				state.shipping_fes -= prd.shipping_fee * prd.amount
				state.taxes = state.subtotal * 0.16 
				state.total = state.subtotal + state.taxes + state.shipping_fes
				state.products.splice(action.payload, 1);
			}
			return { ...state }
		case DELETE_ALL_CART:
			window.localStorage.removeItem('cartSummary')
			state.products = []
			state.sumProducts = 0
			state.subtotal =  0
			state.shipping_fes =  0
			state.taxes =  0
			state.total =  0
			return { ...state }
		default:
			return { ...state }
	}
}

export default cartSummaryReducer
import { ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_CART } from '../actions/type'

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('cartSummary') : null;

type State = {
	products: TProd[],
	subtotal: number,
	shipping_fes: number,
	taxes: number,
	total: number
}

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	products: [],
	subtotal: 0,
	shipping_fes: 0,
	taxes: 0,
	total: 0
}

const cartSummaryReducer = (state = initialState, action: TAction) => {
	switch(action.type) {
		case ADD_TO_CART:
			state.products.push(action.payload)
			state.subtotal += action.payload.price_without_tax
			state.shipping_fes += action.payload.shipping_fee			
			// los impuestos son del 16% suponiendo
			state.taxes = state.subtotal * 0.16 
			state.total = state.subtotal + state.taxes + state.shipping_fes
			window.localStorage.setItem('cartSummary', JSON.stringify({ ...state }))
			return { ...state }
		case DELETE_FROM_CART:
			state.subtotal -= state.products[action.payload as number].price_without_tax
			state.shipping_fes -= state.products[action.payload as number].shipping_fee
			// los impuestos son del 16% suponiendo
			state.taxes = state.subtotal * 0.16 
			state.total = state.subtotal + state.taxes + state.shipping_fes
			state.products.splice(action.payload, 1);
			window.localStorage.setItem('cartSummary', JSON.stringify({ ...state }))
			return { ...state }
		case DELETE_ALL_CART:
			window.localStorage.removeItem('cartSummary')
			state.products = []
			return { ...state }
		default:
			return { ...state }
	}
}

export default cartSummaryReducer
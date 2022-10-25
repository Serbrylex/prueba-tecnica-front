import { ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_CART } from '../actions/type'

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('cartSummary') : null;

type State = {
	products: TProd[]
}

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	products: []
}

const cartSummaryReducer = (state = initialState, action: TAction) => {
	switch(action.type) {
		case ADD_TO_CART:
			state.products.push(action.payload)
			window.localStorage.setItem('cartSummary', JSON.stringify({ ...state }))
			return { ...state }
		case DELETE_FROM_CART:
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
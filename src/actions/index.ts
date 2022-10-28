import {
	ADD_CARD, DELETE_CARD, ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_CART,
	SET_LOGIN, CLOSE_SESSION, DELETE_ALL_PRODUCT_FROM_CART
} from './type'

// CARD

export const setCard = (payload: any) => ({
	type: ADD_CARD,
	payload
})

export const setDeleteCard = (payload: any) => ({
	type: DELETE_CARD,
	payload
})

// SUMMARY CART

export const setAddToCart = (payload: any) => ({
	type: ADD_TO_CART,
	payload
})

export const setDeleteFromCart = (payload: any) => ({
	type: DELETE_FROM_CART,
	payload	
})

export const setDeleteAllProductFromCart = (payload: any) => ({
	type: DELETE_ALL_PRODUCT_FROM_CART,
	payload	
})

export const setDeleteAllCart = (payload: any) => ({
	type: DELETE_ALL_CART,
	payload
})


// User

export const setLogin = (payload: any) => ({
	type: SET_LOGIN,
	payload	
})
export const setCloseSession = () => ({
	type: CLOSE_SESSION	
})

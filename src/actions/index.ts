import {
	ADD_CARD, DELETE_CARD, ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_CART
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

// User
export const setDeleteFromCart = (payload: any) => ({
	type: DELETE_FROM_CART,
	payload	
})
export const setDeleteAllCart = () => ({
	type: DELETE_ALL_CART
})
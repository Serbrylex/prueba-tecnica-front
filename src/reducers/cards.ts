import { ADD_CARD, DELETE_CARD } from '../actions/type'

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('cards') : null;

type card = {
    card_number: number,
    card_holder: string,
    expiration: number,
    cvv: number,
}

type State = {
	cards: card[]
}

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	cards: [],
}

const cardsReducer = (state = initialState, action: TAction) => {
	switch(action.type) {
		case ADD_CARD:
            state.cards.push(action.payload)
			window.localStorage.setItem('cards', JSON.stringify({ ...state }))
			return { ...state }
		case DELETE_CARD:
            state.cards.splice(action.payload, 1);
			window.localStorage.setItem('cards', JSON.stringify({ ...state }))
			return { ...state }
        default:
            return { ...state }
	}
}

export default cardsReducer
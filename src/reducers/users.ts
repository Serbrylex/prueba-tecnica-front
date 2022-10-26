import { SET_LOGIN, CLOSE_SESSION } from '../actions/type'

type State = {
	isAuth: boolean,
	user: object,
	access_token: null | string
}

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('user') : null;

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	isAuth: false,
	user: {},
	access_token: null
}

const userReducer = (state = initialState, action: TAction) => {	

	switch(action.type) {				

		case SET_LOGIN:			
			window.localStorage.setItem('user', JSON.stringify(action.payload))
			return { ...action.payload }

		case CLOSE_SESSION:
			window.localStorage.clear()
			return { ...initialState }

		default:
			return { ...state }
	}
}

export default userReducer
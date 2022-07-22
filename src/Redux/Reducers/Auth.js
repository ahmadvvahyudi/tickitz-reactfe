const initialState = {
	loading: false,
	AuthSuccess: [],
	AuthSignUp: [],
	error: null,
	isSignIn: false,
}

const Fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case "AUTH_REQUEST":
			return { ...state, loading: true }
		case "AUTH_SUCCESS":
			return {
				...state,
				loading: false,
				isSignIn: true,
				AuthSuccess: action.payload,
			}
		case "AUTH_SIGNUP":
			return { ...state, loading: false, AuthSignUp: action.payload }
		case "AUTH_LOGOUT":
			return {
				...state,
				loading: false,
				AuthSuccess: { data: { token: null } },
				isSignIn: false,
			}
		default:
			return state
	}
}

export default Fetch

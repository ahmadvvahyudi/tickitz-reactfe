import axios from "axios"

const GetAuthRequest = () => {
	return {
		type: "GET_AUTH_REQUEST"
	}
}
const GetAuthSuccess = (data) => {
	return {
		type: "GET_AUTH_SUCCESS",
		payload: data
	}
}
const GetAuthError = (error) => {
	return {
		type: "GET_AUTH_ERROR",
		payload: error
	}
}

const GetAuthSignOut = () => {
	return {
		type: "GET_AUTH_SIGNOUT"
	}
}


const GetAuthSignIn = (formSignIn) => {
	return (dispatch) => {
		dispatch(GetAuthRequest())	
		axios({
			method: "POST",
			url: `process.env.REACT_APP_API_URL/signin`,
			data: formSignIn
		})
			.then((res) => {
				dispatch(GetAuthSuccess(res.data.data))
			})
			.catch((err) => {
				dispatch(GetAuthError(err.response.data))
			})
	}
}

const GetAuthSignUp = (formSignUp) => {
	return (dispatch) => {
		dispatch(GetAuthRequest())
		axios({
			method: "POST",
			url: `process.env.REACT_APP_API_URL/auth/signup`,
			data: formSignUp
		})
			.then((res) => {
				dispatch(GetAuthSuccess(res.data.data))
			})
			.catch((err) => {
				dispatch(GetAuthError(err.response.data))
			})
	}
}




export { GetAuthSignOut, GetAuthSignIn, GetAuthSignUp}

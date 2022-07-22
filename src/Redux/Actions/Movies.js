import axios from "axios"

const GetMovieRequest = () => {
	return {
		type: "GET_MOVIE_REQUEST"
	}
}
const GetMovieSuccess = (data) => {
	return {
		type: "GET_MOVIE_SUCCESS",
		payload: data
	}
}
const GetMovieError = (error) => {
	return {
		type: "GET_MOVIE_ERROR",
		payload: error
	}
}
export const GetMovies = ({ page = 1, limit }) => {
	return (dispatch) => {
		dispatch(GetMovieRequest())
		axios({
			method: "GET",
			url: `process.env.REACT_APP_API_URL/movies${page ? `?page=${page}` : ``}${
				limit ? `&limit=${limit}` : ``
			}`
		})
			.then((res) => {
				dispatch(GetMovieSuccess(res.data.data))
			})
			.catch((err) => {
				dispatch(GetMovieError(err))
			})
	}
}

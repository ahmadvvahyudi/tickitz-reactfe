import { React, useEffect } from "react"
import Footer from "../../Components/Footer"
import Hero from "../../Components/Hero"
import { Navbar } from "../../Components/Navbar"
import NowShowing from "../../Components/NowShowing"
import Subscribe from "../../Components/Subscribe"
import Upcoming from "../../Components/Upcoming"
import { useDispatch, useSelector } from "react-redux"
import { GetMovies } from "../../Redux/Actions/Movies"
import { useNavigate } from "react-router-dom"
// import { AuthLogout } from "../../Redux/Actions/verifAuth"

const Home = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(GetMovies({ page: 1, limit: 10 }))
	}, [])

	const { data, error, loading } = useSelector((state) => state.movies)
	const { isSignIn } = useSelector((state) => state.auth)
	useEffect(() => {
		if (isSignIn === false) {
			navigate("/signin", { replace: true })
		}
	}, [isSignIn])
	return (
		<>
			<div className="container">
				<Navbar />
				<Hero />
				<NowShowing />
				<Upcoming />
				<Subscribe />
				<Footer />
			</div>
		</>
	)
}
export default Home

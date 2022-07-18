import React from "react"
import MovieDetails from "../../Components/MovieDetails"
import { Navbar } from "../../Components/Navbar"
import Footer from "../../Components/Footer";
import Showtimes from "../../Components/Showtimes";
const Showtime = () => {
	return (
		<>
			<div className="container">
				<Navbar />
				<MovieDetails />
				<Showtimes/>
				<Footer />
			</div>
		</>
	)
}
export default Showtime

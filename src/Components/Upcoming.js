import React from "react"
import { Link } from "react-router-dom"

const Upcoming = () => {
	return (
		<>
			<div className="upcoming-movies">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2>Upcoming Movies</h2>
						</div>
						<div className="col d-flex justify-content-end">
							<Link to="#">view all</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<form className="month-movies">
						<label>
							<input type="radio" name="month" defaultValue="september" />
							<div className="month">September</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="october" />
							<div className="month">October</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="november" />
							<div className="month">November</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="december" />
							<div className="month">December</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="january" />
							<div className="month">January</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="februari" />
							<div className="month">Februari</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="march" />
							<div className="month">March</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="april" />
							<div className="month">April</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="may" />
							<div className="month">May</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="june" />
							<div className="month">June</div>
						</label>
						<label>
							<input type="radio" name="month" defaultValue="july" />
							<div className="month">July</div>
						</label>
					</form>
					<div className="movies-upcoming">
						<div className="card-movies-upcoming">
							<img src="./assets/images/up-coming1.png" alt="" />
							<h1>Black Widow</h1>
							<p>Acion, Adventure, Sci-FI</p>
							<Link to="details.html" className="btn-details">
								Details
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Upcoming

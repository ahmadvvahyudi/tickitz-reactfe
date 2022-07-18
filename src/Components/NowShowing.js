import React from "react"
import { Link } from "react-router-dom"

const NowShowing = () => {
	return (
		<>
			<div className="now-showing">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2>Now Showing</h2>
						</div>
						<div className="col d-flex justify-content-end">
							<Link to="#">view all</Link>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="movies">
						<div className="card-movies">
							<img src="./assets/images/now-showing1.png" alt="" />
							<div className="title-movies">
								<h1>Spider-Man: Homecoming</h1>
								<p>Acion, Adventure, Sci-FI</p>
							</div>
							<div className="button-movies">
								<Link to="details.html" className="btn-details">
									Details
								</Link>
								<br />
								<br />
								<Link to="order.html" className="btn-book-now">
									Book-now
								</Link>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default NowShowing
import React from "react"
import { Link } from "react-router-dom"

const Hero = () => {
	return (
		<>
			<div className="container hero">
				<div className="row">
					<div className="col-md-6 d-flex align-items-center">
						<div className="hero-title">
							<p>Nearest Cinema, Newest Movie.</p>
							<h1>Find out now!</h1>
						</div>
					</div>
					<div className="col-md-6 d-flex justify-content-center">
						<div className="hero-image">
							<img src="./assets/images/img-hero1.png" alt="" />
							<img
								src="./assets/images/img-hero2.png"
								className="mb-4"
								alt=""
							/>
							<img
								src="./assets/images/img-hero3.png"
								className="mb-5"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Hero

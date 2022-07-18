import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<>
        <footer>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4">
						<img src="./assets/images/tickitz-purple.svg" alt="" />
						<p>
							Stop waiting in line. Buy tickets <br />
							conveniently, watch movies quietly
						</p>
					</div>
					<div className="col-12 col-lg-2">
						<h5>Explore</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#">Cinemas</a>
							</li>
							<li>
								<a href="#">List Movies</a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-lg-3">
						<h5>Our Sponsor</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#">
									<img
										className="sponsor"
										src="./assets/images/ebv_id.png"
										alt=""
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										className="sponsor"
										src="./assets/images/CineOne21.png"
										alt=""
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										className="sponsor"
										src="./assets/images/hiflix.png"
										alt=""
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-lg-3">
						<h5>Follow us</h5>
						<ul className="list-unstyled d-none d-md-block">
							<li>
								<a href="#">
									<img src="./assets/icon/eva_facebook-outline.png" alt="" />
									Tickitz Cinema id
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/bx_bxl-instagram.png" alt="" />
									tickitz.id
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/eva_twitter-outline.png" alt="" />
									tickitz.id
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/feather_youtube.png" alt="" />
									Tickitz Cinema id
								</a>
							</li>
						</ul>
						<ul className="list-unstyled d-sm-block d-md-none">
							<li>
								<a href="#">
									<img src="./assets/icon/eva_facebook-outline.png" alt="" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/bx_bxl-instagram.png" alt="" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/eva_twitter-outline.png" alt="" />
								</a>
							</li>
							<li>
								<a href="#">
									<img src="./assets/icon/feather_youtube.png" alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row justify-content-center align-items-center pt-4">
					<div className="col-auto copyright">
						© 2022 Tickitz • All Rights Reserved.
					</div>
				</div>
			</div>
            </footer>
		</>
	)
}

export default Footer

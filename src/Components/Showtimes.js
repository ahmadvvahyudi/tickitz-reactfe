import React from "react"
import { Link } from "react-router-dom"

const Showtimes = () => {
	return (
		<>
			<div className="container showtimes-tickets">
				<h1>Showtimes and Tickets</h1>
				<form className="form-showtimes mt-5 mb-5">
					<div className="form-outline">
						<img src="./assets/icon/ic_calendar.png" alt="" />
						<input
							type="date"
							className="form-control unstyled"
							placeholder="21/07/20"
						/>
					</div>
					<div className="form-outline">
						<img src="./assets/icon/ic_loc	ation.png" alt="" />
						<select className="form-select" id="exampleFormControlSelect1">
							<option>Purwokerto</option>
							<option>Jakarta</option>
							<option>Karawang</option>
							<option>Bandung</option>
							<option>Bekasi</option>
						</select>
					</div>
				</form>
				<div className="row">
					<div className="col-md-4">
						<div className="card-showtimes">
							<div className="row">
								<div className="col-5 d-flex align-items-center">
									<img src="./assets/images/ebv_id.png" alt="" />
								</div>
								<div className="col-7">
									<h3>ebv.id</h3>
									<p>Whatever street No. 12, South Purwokerto</p>
								</div>
							</div>
							<hr />
							<form className="form-price" action="order.html">
								<div className="showtimes mb-3">
									<div className="row">
										<div className="col">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>08:30am</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>10:30pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>12:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>02:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>04:30pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>07:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>08:30pm</span>
											</label>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-between mb-3">
									<h6>Price</h6>
									<h3>$10.00/seat</h3>
								</div>
								<div className="d-flex justify-content-between">
									<button className="btn btn-book-now px-4">Book Now</button>
									<button className="btn btn-add-cart px-4">Add to cart</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card-showtimes">
							<div className="row">
								<div className="col-5 d-flex align-items-center">
									<img src="./assets/images/CineOne21.png" alt="" />
								</div>
								<div className="col-7">
									<h3>CineOne21</h3>
									<p>Downcare street No. 21, East Purwokerto</p>
								</div>
							</div>
							<hr />
							<form className="form-price" action="order.html">
								<div className="showtimes mb-3">
									<div className="row">
										<div className="col">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>08:30am</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>10:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>12:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>02:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>04:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>06:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>08:00pm</span>
											</label>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-between mb-3">
									<h6>Price</h6>
									<h3>$10.00/seat</h3>
								</div>
								<div className="d-flex justify-content-between">
									<button className="btn btn-book-now px-4">Book Now</button>
									<button className="btn btn-add-cart px-4">Add to cart</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card-showtimes">
							<div className="row">
								<div className="col-5 d-flex align-items-center">
									<img src="./assets/images/hiflix.png" alt="" />
								</div>
								<div className="col-7">
									<h3>hiflix Cinema</h3>
									<p>Colonel street No. 2, East Purwokerto</p>
								</div>
							</div>
							<hr />
							<form className="form-price" action="order.html">
								<div className="showtimes mb-3">
									<div className="row">
										<div className="col">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>08:30am</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>10:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>12:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>02:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>04:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input
													type="radio"
													name="showtimes"
													defaultValue={1}
													disabled="true"
												/>
												<span>06:00pm</span>
											</label>
										</div>
										<div className="col-3">
											<label>
												<input type="radio" name="showtimes" defaultValue={1} />
												<span>08:00pm</span>
											</label>
										</div>
									</div>
								</div>
								<div className="d-flex justify-content-between mb-3">
									<h6>Price</h6>
									<h3>$10.00/seat</h3>
								</div>
								<div className="d-flex justify-content-between">
									<button className="btn btn-book-now px-4">Book Now</button>
									<button className="btn btn-add-cart px-4">Add to cart</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<h5>
					<Link to="#">View More</Link>
				</h5>
			</div>
		</>
	)
}

export default Showtimes

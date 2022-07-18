import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
    return(
        <>
        <div className="detail-movies mt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card-movies d-flex align-items-center justify-content-center">
          <img src="./assets/images/now-showing1.png" alt="" />
        </div>
      </div>
      <div className="col-md-8">
        <div className="title-movies mt-5 mt-lg-0">
          <h1>Spider-Man: Homecoming</h1>
          <p>Adventure, Action, Sci-Fi</p>
        </div>
        <div className="description-movies">
          <div className="row">
            <div className="col-4">
              <h6>Release date</h6>
              <h3>June 28, 2017</h3>
              <h6>Duration</h6>
              <h3>2 hours 13 minutes</h3>
            </div>
            <div className="col-8">
              <h6>Directed</h6>
              <h3>Jon Watss</h3>
              <h6>Casts</h6>
              <h3>Tom Holland, Michael Keaton, Robert Downey Jr ....</h3>
            </div>
          </div>
          <hr />
          <h2>Synopsis</h2>
          <p>
            Thrilled by his experience with the Avengers, Peter returns
            home, where he lives with his Aunt May, under the watchful eye
            of his new mentor Tony Stark, Peter tries to fall back into
            his normal daily routine - distracted by thoughts of proving
            himself to be more than just your friendly neighborhood
            Spider-Man - but when the Vulture emerges as a new villain,
            everything that Peter holds most important will be threatened.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default MovieDetails

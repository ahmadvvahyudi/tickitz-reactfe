import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light d-sm-block d-md-none">
      <div className="container-fluid">
        <Link className="navbar-brand" to={''}><img src="./assets/images/tickitz-purple.svg" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <form className="d-flex form-search mt-5 mb-4">
              <button type="submit">
                <i className="fa fa-search px-3 py-3"></i>
              </button>
              <input className="form-control" type="search" placeholder="Search..." aria-label="Search" />
            </form>
            <hr />
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
            </li>
            <hr />
            <li className="nav-item">
              <Link className="nav-link" to={''}>List Movies</Link>
            </li>
            <hr />

            <li className="nav-item mt-5">
              <Link className="nav-link" to={''}>&copy; 2020 Tickitz • All Rights Reserved.</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav className="navbar navbar-expand-lg navbar-light d-none d-md-block">
      <div className="container-fluid">
        <Link className="navbar-brand" to={''}>
          <img src="./assets/images/tickitz-purple.svg" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={''}>List Movies</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <form className="search-box">
                <input className="search-txt" type="text" name="" placeholder="Type to search" />
                <button className="search-btn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link sign-up-button py-2 px-4" to={''}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

import React from "react";
import { Navbar } from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MovieDetails from "../../Components/MovieDetails";

const Booking = () => {
    return(
        <>
        <div className="container">
        <Navbar/>
        <MovieDetails/>
        <Footer/>
        </div>
        </>       
    )
}

export default Booking;
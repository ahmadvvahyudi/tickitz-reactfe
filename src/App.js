import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Home, Booking, SignIn, Showtime } from "./Pages"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showtime" element={<Showtime />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App

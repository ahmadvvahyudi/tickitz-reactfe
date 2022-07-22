import { Routes, Route } from "react-router-dom"
import { Home, Booking, Showtime} from "./Pages"
import { SignIn, SignUp } from "./Pages/Auth"
import { PublicRoute, PrivateRoute } from "./Router/Routes"

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/showtime" element={<Showtime />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/auth" element={<PublicRoute><SignIn/></PublicRoute>}></Route>
			<Route path="/auth/signin" element={<PublicRoute isRestricted={true}><SignIn /></PublicRoute>} />
			<Route path="/auth/signup" element={<PublicRoute isRestricted={true}><SignUp /></PublicRoute>} />
		</Routes>
	)
}

export default MainRouter

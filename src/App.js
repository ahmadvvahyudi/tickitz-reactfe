import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import { store, persistor } from "./Redux/Store";
import MainRouter from "./Routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  );
}

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/showtime" element={<Showtime />} />
//         <Route path="/booking" element={<Booking/>}/>
//         <Route path="/signin" element={<SignIn/>}/>
//         <Route path="/signup" element={<SignUp/>}/>
//       </Routes>
//     </>
//   )
// }

export default App

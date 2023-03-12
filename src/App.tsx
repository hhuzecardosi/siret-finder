import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Home from "./pages/Siret/Home";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./components/Navbar";
import SingIn from "./pages/Auth/SignIn";
import Search from "./pages/Siret/Search";
import Results from "./pages/Siret/Results";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<SingIn/>}/>
        <Route path="/siret" element={<Home/>}>
          <Route path={'/siret/search'} element={<Search/>}/>
          <Route path={'/siret/results'} element={<Results/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;

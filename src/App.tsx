import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp";
import Test from "./pages/Home/Test";
import Navbar from "./components/Navbar";
import SingIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<SingIn/>}/>
        <Route path="/siret" element={<Home/>}>
          <Route path={'/siret/test'} element={<Test/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;

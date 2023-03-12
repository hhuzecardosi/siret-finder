import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {UserContext} from "../config/UserContext";
import {signOut} from "firebase/auth";
import {auth} from "../config/firebase.config";

function Navbar(){

  // @ts-ignore
  const {currentUser} = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    signOut(auth).then(() => navigate('/'));
  }


  if(currentUser) {
    return(
      <nav className="navbar navbar-dark bg-dark px-4">
        <Link to="/" className="navbar-brand">Siret Finder</Link>
        <div>
          <button className="btn btn-danger ms-2" onClick={() => handleSignOutClick()}>Sign out</button>
        </div>
      </nav>
    );
  }

  if (location.pathname.includes('signup') || location.pathname.includes('login')){
    return ( <></> );
  }

  return(
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">Siret Finder</Link>
      <div>
        <Link to="/signup"><button className="btn btn-primary">Sign up</button></Link>
        <Link to="/login"><button className="btn btn-primary ms-2">Sign In</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
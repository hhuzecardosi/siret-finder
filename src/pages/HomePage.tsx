import {useContext} from "react";
import {UserContext} from "../config/UserContext";

function HomePage() {
  // @ts-ignore
  const {currentUser} = useContext(UserContext);

  return (
    <div>
      <div className="container p-5">
        <h1 className="display-2 text-light"> {currentUser ? "Welcome" : "Se connecter ou s'inscrire"}</h1>
      </div>
    </div>
  );
}

export default HomePage;
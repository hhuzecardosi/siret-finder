import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../config/UserContext";


export default function Home(){

  // @ts-ignore
  const {currentUser} = useContext(UserContext);

  if (!currentUser) return <Navigate to="/"/>

  return(
    <div className="container">
      <Outlet />
    </div>
  );
}
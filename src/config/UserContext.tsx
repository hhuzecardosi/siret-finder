import {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User} from 'firebase/auth'
import {auth} from "./firebase.config";


export const UserContext = createContext({});

export function UserContextProvider(props: any){
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = async (email: string, pwd: string) => createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email: string, pwd: string) => signInWithEmailAndPassword(auth, email, pwd);

  useEffect(() => {
    return onAuthStateChanged(auth, (newUser) => {
      if(newUser) setCurrentUser(newUser);
      setLoadingData(false);
    });
  }, [])

  return (
    <UserContext.Provider value={{signUp, currentUser, signIn}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
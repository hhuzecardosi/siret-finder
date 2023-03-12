import {useContext, useState} from "react";
import {UserContext} from "../config/UserContext";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validation, setValidation] = useState('');

  // @ts-ignore
  const {signUp} = useContext(UserContext);
  const navigate = useNavigate();

  const handleForm = (event: any) => {
    event.preventDefault();
    if (password.length < 8 || repeatPassword.length < 8) {
      setValidation('Password or repeat password to short. Use 8 characters min.');
      return;
    }
    if (password !== repeatPassword) {
      setValidation('Passwords do not match');
      return;
    }
    signUp(email, password).then(() => {
      setValidation('');
      navigate('/siret/test');
    })
      .catch((e: any) => {
        if (e.code === "auth/invalid-email") {
          setValidation("Email format invalid")
        }
        if (e.code === "auth/email-already-in-use") {
          setValidation("Email already used")
        }
      });

  }
  return (
    <div className="container text-center">
      <h3 className="display-5 text-light">Sign up to Siret Finder</h3>
      <div className="card text-start w-50 m-auto bg-dark text-light border-light">
        <div className="card-body">
          <form action={"submit"} onSubmit={handleForm} className="sign-up-form">
            <div className="mb-3">
              <label htmlFor="signUpEmail">Email address</label>
              <input type="email" className="form-control" name="email"
                     required placeholder={"email"}
                     id="signUpEmail" value={email} onChange={(event: any) => setEmail(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password"
                     required placeholder={"password"}
                     id="password" value={password} onChange={(event: any) => setPassword(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="repeatPassword">Repeat password</label>
              <input type="password" className="form-control" name="repeatPassword"
                     required placeholder={"repeat password"}
                     id="repeatPassword" value={repeatPassword}
                     onChange={(event: any) => setRepeatPassword(event.target.value)}/>
            </div>
            <p className="text-danger mt-1">{validation}</p>
            <button className="btn btn-dark btn-outline-light">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
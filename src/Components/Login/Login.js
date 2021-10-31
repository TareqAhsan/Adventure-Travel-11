import React from "react";
import { useHistory, useLocation } from "react-router";
import login from "../../images/login.png";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/";
  const { allContext } = useAuth();
  const { user, signinUsingGoogle, setUser, setError, setIsloading } =
    allContext;
  const handleGoogle = () => {
    signinUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect);
      })

      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  };
  return (
    <div className="my-4 py-3">
      <h1 className="my-5">Login Here</h1>
      <div className="shadow w-50 mx-auto p-4 rounded-3 my-4">
        <h1 className="my-5">Login with google</h1>
        <button
          onClick={handleGoogle}
          className="rounded-pill my-5 btn btn-primary"
        >
          <img
            src={login}
            className="rounded m-1"
            style={{ width: "15px" }}
            alt=""
          />
          signinWith Google
        </button>
      </div>
    </div>
  );
};

export default Login;

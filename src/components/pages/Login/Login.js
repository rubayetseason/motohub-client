import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User login successful");
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-20 flex justify-center items-center">
      <div className="w-96 p-7 mt-10 border-2">
        <h2 className="text-2xl text-center font-bold underline mb-5">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email" required
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password" required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              {" "}
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <input
            className="btn btn-secondary w-full"
            value="Login"
            type="submit"
          />
        </form>
        <div className="my-3">
          {loginError && <p className="text-red-600">{loginError}</p>}
        </div>
        <p className="mt-2">
          <small>
            New to Motohub?{" "}
            <Link to="/register" className="text-accent font-semibold">
              Create new account
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">
          <FcGoogle /> &nbsp; CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

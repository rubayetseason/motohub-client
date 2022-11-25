import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [signUpError, setSignUpError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    setSignUpError("");
    console.log(data);
  };

  return (
    <div className="flex justify-center mt-10 mb-20 items-center">
      <div className="w-96 p-7 border-2 ">
        <h2 className="text-2xl text-center font-bold underline mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Role</span>
            </label>
            <select className="h-12 rounded-lg" {...register("role")}>
              <option value="seller">seller</option>
              <option value="buyer">buyer</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-secondary w-full mt-4"
            value="Register"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <div className="my-4">
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </div>
        <small>
          <p className="mt-2">
            Already have an account?{" "}
            <Link className="text-accent" to="/login">
              Please Login
            </Link>
          </p>
        </small>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">
          <FcGoogle /> &nbsp; CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;

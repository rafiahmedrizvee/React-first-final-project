import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    console.log("handleLogIn", data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-semibold text-primary mb-5 text-center">
          Log In Now
        </h1>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogIn)} className="fieldset">

              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <div>
                <a className="link link-hover">
                 New to Website?{" "}
                  <Link className="text-secondary" to="/sign-up">
                  Create an Account
                  </Link>{" "}
                </a>
              </div>
              <input
                type="submit"
                value="Log In"
                className="btn btn-primary mt-4 text-white"
              />
            </form>

            <button className="btn btn-primary mt-4 text-white">
              <img className="w-8 h-8" src={google} alt="google" />
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

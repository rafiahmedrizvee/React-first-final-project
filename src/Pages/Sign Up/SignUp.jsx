import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";




const SignUp = () => {

  
  
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const savedUsers = (name,email) =>{

    const user = {name,email}

    

    fetch("http://localhost:7000/users",{
      method:"POST",
      headers:{
        "content-type":"application/json"

      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
       
        toast.success("Signup Successfully Done")
      }
    })
  }

  const handleSignUp = (data) => {
    
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        
        const userInfo = {
          displayName: data.name,
        };

        savedUsers(data.name,data.email)


        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            
          });

      })
      .catch((error) => {
          
        if(error.message === "Firebase: Error (auth/email-already-in-use).")
        toast.error("Email Already in Used")
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-semibold text-primary mb-5 text-center">
          Sign Up Now
        </h1>
        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input"
                placeholder="Name"
              />

              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

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

                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or more",
                  },
                  pattern: {
                    value:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*[!#$@%^&])(?=.*?[0-9])/,
                    message:
                      "password must have at Least one uppercase letter,one lowercase letter,one special character and one number",
                  },
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
                  Already Have an Account?{" "}
                  <Link className="text-secondary" to="/log-in">
                    Please Log in
                  </Link>{" "}
                </a>
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary mt-4 text-white"
              />
            </form>
            
            <button  className="btn btn-primary mt-4 text-white">
              <img className="w-8 h-8" src={google} alt="google" />
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

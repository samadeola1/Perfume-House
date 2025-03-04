import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupSchema } from "../utils/ValidationSchema";
import perfumeLogo from "../assets/navlogo.png"

const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="main-wrapper h-screen bg-no-repeat bg-cover">
        <div className="container mx-auto pt-6 pb-10 md:px-60 md:pl-20 md:flex gap-15 justify-center h-screen">
          <img className="w-40 h-8" src={perfumeLogo} alt="logo" />

          <form className="bg-white p-8" onSubmit={handleSubmit(onSubmit)}>
            <h3>Get started</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="py-4 md:flex  gap-4">
              <div className="py-4 md:py-0">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="first name"
                  {...register("firstName")}
                />
                <p className="text-red-600">{errors.firstName?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="last name"
                  {...register("lastName")}
                />
                <p className="text-red-600">{errors.lastName?.message}</p>
              </div>
            </div>
            <div className="py-3">
              <div>
                <input
                  className="w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="email"
                  {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="password"
                {...register("password")}
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="confirm password"
                {...register("Cpassword")}
              />
              <p className="text-red-600">{errors.Cpassword?.message}</p>
            </div>

            <button className="btn btn-primary w-full">Primary</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;

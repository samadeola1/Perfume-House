import React from "react";
import { useForm } from "react-hook-form";
import navlogo from "../assets/navlogo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/ValidationSchema";
import visible from "../assets/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import visibleOff from "../assets/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { useState } from "react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="main-wrapper min-h-screen bg-cover">
        <div className="container mx-auto pt-6 pb-10 md:px-60 md:pl-20 md:flex gap-15 justify-center h-screen">
          
          <div className="flex items-center mx-10 pt-10">
            <img className="w-9" src={navlogo} alt="navlogo" />
            <h2 className="text-white font-[sansita] ml-2 text-[20px] font-[700] ">
 
            </h2>
          </div>
          <div className="container items-center md:mx-80  pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
            <form
              className="bg-white p-6 rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="font-[700] text-[30px]">Welcome Back</h2>
              <p>Fill in your information to access your account</p>
              <div className="py-3 flex flex-col ">
                <label htmlFor="Email">Email</label>
                <input
                  className="md:w-[480px] h-[54.3px] "
                  type="email"
                  name=""
                  id="Email"
                  placeholder="Enter your Email"
                  {...register("Email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="Password">Password</label>
                <input
                  className=" md:w-[480px] h-[54.3px]"
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="Password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <p className="text-red-600">{errors.password?.message}</p>

                <button
                  type="button"
                  className="absolute right-3 top-10 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle state
                >
                  <img
                    src={showPassword ? visibleOff : visible} // Change icon
                    alt="Toggle Visibility"
                    className="w-6 h-6 transition-opacity duration-200"
                  />
                </button>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-5 h-5 text-[#8D34FF] border-[#8D34FF] rounded focus:ring focus:ring-[#8D34FF]"
                  />
                  <label htmlFor="rememberMe" className="  py-2 cursor-pointer">
                    Remember Me
                  </label>
                </div>
                <div>
                  <button className="bg-[#8D34FF] text-white w-66 h-12 md:w-[480px] md:h-[54.3px] my-4 rounded-xl ">
                    Sign in
                  </button>
                </div>
                <div className="flex items-center ">
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                  <span className="mx-4 text-gray-500">or</span>
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>
                <div>
                  <button className="w-full flex items-center justify-center border border-black rounded-lg py-3 text-gray-700 font-medium hover:bg-gray-100 transition">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Continue with Google
                  </button>
                </div>
                <div className="mx-5 md:mx-30">
                  <p className="my-5">
                    Dont have an account?{" "}
                    <span className="text-[#8D34FF]">Sign up</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;

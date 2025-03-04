import React from "react";
import { Link } from "react-router-dom";

const AuthBtn = () => {
  return (
    <>
      <div className="md:flex gap-[34px] my-3">
        <button className=" mb-2 md:mb-0 w-full  md:w-[140px] h-[61px] bg-[#E6D2FF] cursor-pointer rounded text-[#8D34FF]">
          <Link to="/auth/sign-in">Log in</Link>
        </button>
        <button className=" w-full md:w-[140px] h-[61px]  bg-[#8D34FF] cursor-pointer rounded text-[#F5F5F5]">
          <Link to="/auth/sign-up">Sign up</Link>
        </button>
      </div>
    </>
  );
};

export default AuthBtn;

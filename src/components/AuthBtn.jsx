import React from "react";
import { Link } from "react-router-dom";

const AuthBtn = () => {
  return (
    <>
      <div className="flex gap-[34px]">
        <button className="w-[140px] h-[61px] bg-[#E6D2FF] cursor-pointer rounded text-[#8D34FF]">
          <Link to="/auth/sign-in">Log in</Link>
        </button>
        <button className="w-[140px] h-[61px] bg-[#8D34FF] cursor-pointer rounded text-[#F5F5F5]">
          <Link to="/auth/sign-up">Sign up</Link>
        </button>
      </div>
    </>
  );
};

export default AuthBtn;

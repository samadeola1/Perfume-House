import React from "react";
import { Outlet } from "react-router-dom";
import navLogo from "../assets/PZ.png";
import AuthBtn from "../components/AuthBtn";
import menuIMg from "../assets/Vector.png"
import closeimg from "../assets/Group.png"

const Navbar = () => {

  return (
    <>
      <nav className="container mx-auto p-[25px] md:[px-15px]  lg:py-[33px] lg:px-[99px] flex justify-between items-center">
        {/* div-1 for nav logo */}
        <div className="flex items-center gap-4">
          <img src={navLogo} alt="nav-logo" />
          <h2 className="hidden md:block font-sansita font-[700] text-[28.33px]">
            perfume House
          </h2>
        </div>
        {/* div-2, for auth btns */}
        <div>
          {/* div for btns */}
          <div className="hidden md:block">
            <AuthBtn />
          </div>
          {/* div for menu img */}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <img src={menuIMg} alt="menu-img" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <AuthBtn />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

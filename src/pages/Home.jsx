import React from "react";
import Products from "../features/Products";
import Cart from "../features/Cart";


const Home = () => {
  return (
    <>
      <main className="container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] lg:grid grid-cols-3">
        <section className="col-span-2">
          <Products />
        </section>

        <section className="border-[1.14px] border-[#D0D0D0] h-[680.55px] w-[330px] md:w-full lg:mx-6 rounded-[5px] ">
          <Cart />
        </section>
      </main>
    </>
  );
};

export default Home;

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

        <section className="border border-[#D0D0D0] h-[600.55px] w-full ">
          <Cart />
        </section>
      </main>
    </>
  );
};

export default Home;

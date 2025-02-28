import React from "react";
import { perfumes } from "../Product";

const Cart = () => {
  const filteredPerfumes = perfumes.filter((perfume, index) => index < 3);

  return (
    <>
      <main>
        <div className="container mx-auto p-6">
          <h1 className="text-xl font-bold  mb-4">My cart Preview</h1>
          <div className="grid grid-rows-3 md:grid-rows-3 gap-6">
            {filteredPerfumes.map((perfume) => (
              <div key={perfume.id} className="card bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                  <img
                    src={perfume.image}
                    alt={perfume.title}
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{perfume.title}</h2>
                  <p className="flex items-center gap-1">
                    <span className="text-sm text-gray-500"></span>
                  </p>
                  <div className="flex items-center gap-2">
        
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-[#8D34FF] text-white w-full">
            Confirm Order
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;

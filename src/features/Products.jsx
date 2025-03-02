import React from 'react'
import { perfumes } from '../Product';


const Products = () => {
  return (
    <>
      <main className="">
        <div className="md:grid grid-cols-3 gap-[0px]">
          {perfumes.map((perfume) => {
            return (
              <div
                key={perfume.id}
                className="card bg-base-100 lg:w-[220.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px]  shadow-sm mb-10 "
              >
                <figure>
                  <img className="w-full" src={perfume.image} alt={perfume.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text[15px]">
                    {perfume.title}
                  </h2>
                  <p>
                    ⭐ ⭐ ⭐ ⭐ ⭐  {perfume.rating} ({perfume.rateCount})
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[15.97px] font-bold text-[#6D5DD3]">
                      N{perfume.price}
                    </span>
                    <span className="text-[15.97px] text-[#A2A2A2] line-through">
                      N{perfume.discountPrice}
                    </span>
                  </div>
                  <div className="card-actions justify-center">
                    <button className="btn bg-[#8D34FF] text-white w-full h[40px] rounded-[8px] text-[16px] font-[500] font-poppins">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products
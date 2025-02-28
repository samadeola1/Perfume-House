import React from 'react'
import { perfumes } from '../Product';


const Products = () => {
  return (
    <>
      <main className="">
        <div className="md:grid grid-cols-3 gap-[34px]">
          {perfumes.map((perfume) => {
            return (
              <div
                key={perfume.id}
                className="card bg-base-100 w-[335.55px] md:w-[160.62px] lg:w-[250.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px]  shadow-sm "
              >
                <figure>
                  <img className="" src={perfume.image} alt={perfume.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text[15px] whitespace-normal">
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
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#8D34FF] text-white w-full">
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
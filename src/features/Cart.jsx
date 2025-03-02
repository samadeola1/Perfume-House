import React from "react";
import { perfumes } from "../Product";

const Cart = () => {
  const findPerfume3 = perfumes.find((perfume) => perfume.id === 3);
  const findPerfume6 = perfumes.find((perfume) => perfume.id === 6);
  const findPerfume2 = perfumes.find((perfume) => perfume.id === 2);

  return (
    <>
      <main className="py-[20px] px-[24px]">
        <h3 className="text-[20px] font-poppins font-500">My cart preview</h3>
        {/* main div holding the find-perfumes */}
        <div className="">
          {/* div for findPerfume3 */}
          <div className="flex py-5">
            <img
              className="w-[70px]"
              src={findPerfume3.image}
              alt={findPerfume3.title}
            />
            <div>
              <p className="px-5 pb-2">{findPerfume3.title}</p>
              <button className="mx-5 bg-[#D2D2D2] text-white w-[18px]">
                -
              </button>
              <span>1</span>
              <button className="mx-5 bg-[#8D34FF] text-white w-[18px]">
                +
              </button>
              <div className="px-5 pt-2 flex gap-8">
                <h1 className="text-[18px] font-semibold">
                  N{findPerfume3.price}
                </h1>
                <button className="border border-[#FF4034] text-[#FF4034] px-[18px] rounded-[3.5px]">
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* div for findPerfume6 */}
          <div className="flex py-5">
            <img
              className="w-[70px]"
              src={findPerfume6.image}
              alt={findPerfume6.title}
            />
            <div>
              <p className="px-5 pb-2">{findPerfume6.title}</p>
              <button className="mx-5 bg-[#D2D2D2] text-white w-[18px]">
                -
              </button>
              <span>1</span>
              <button className="mx-5 bg-[#8D34FF] text-white w-[18px]">
                +
              </button>
              <div className="px-5 pt-2 flex gap-8">
                <h1 className="text-[18px] font-semibold">
                  N{findPerfume6.price}
                </h1>
                <button className="border border-[#FF4034] text-[#FF4034] px-[18px] rounded-[3.5px]">
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* div for findPerfume2 */}
          <div className="flex py-5">
            <img
              className="w-[70px]"
              src={findPerfume2.image}
              alt={findPerfume2.title}
            />
            <div>
              <p className="px-5 pb-2">{findPerfume2.title}</p>
              <button className="mx-5 bg-[#D2D2D2] text-white w-[18px]">
                -
              </button>
              <span>1</span>
              <button className="mx-5 bg-[#8D34FF] w-[18px] text-white">
                +
              </button>
              <div className="px-5 pt-2 flex gap-8">
                <h1 className="text-[18px] font-semibold">
                  N{findPerfume2.price}
                </h1>
                <button className="border border-[#FF4034] text-[#FF4034] px-[18px] rounded-[3.5px]">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <p>sub Total</p>
          <h2>9,000</h2>
        </div>
        <div className="flex justify-between pb-4">
          <p>Delivery</p>
          <h2>2,000</h2>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <h2>11,000</h2>
        </div>
        {/* div fot confirm order modal */}
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn my-10 w-full h-[58px] bg-[#8D34FF] text-white rounded-[10px]"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Confirm Order
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-[#8D34FF] text-white rounded-[4px] w-70">
                    Start New Order
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </main>
    </>
  );
};

export default Cart;

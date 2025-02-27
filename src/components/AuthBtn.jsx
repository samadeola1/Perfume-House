import React from 'react'

const AuthBtn = () => {
  return (
    <>
      <div className='flex gap-[34px]'>
        <button className="w-[140px] h-[61px] bg-[#E6D2FF] cursor-pointer rounded text-[#8D34FF]">
          Log in
        </button>
        <button className="w-[140px] h-[61px] bg-[#8D34FF] cursor-pointer rounded text-[#F5F5F5]">
          Sign up
        </button>
      </div>
    </>
  );
}

export default AuthBtn
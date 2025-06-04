import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#1D2D44] flex justify-between'>
        <div className='flex justify-between items-center'>
            <div>
                <img src="/images/AC_Logo.png" alt="AC Logo" className="w-32 h-auto" />
            </div>
            <div className='text-[#C0C0C0] flex justify-center'>Aspiration Capital</div>
        </div>
        <div className='h-8 w-25 rounded-md m-2 flex justify-center items-center bg-amber-200'>Contact Us</div>
    </div>
  )
}

export default Header
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 w-full flex items-center justify-between h-36 px-20 py-3 bg-[#F2F0FA66] backdrop-blur-sm z-50">
  <Image 
        src="/logo.png" 
        alt="Description" 
        className="w-28 h-28" 
      />
      <div className="flex flex-1 items-center justify-center space-x-8 max-w-4xl">
      <div className="flex space-x-2">
  <button className="py-1 px-2 rounded-[33px]">
  <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">

      Our Clients
    </span>
  </button>
  <button className="py-1 px-3 rounded-[33px]">
  <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">

      Training
    </span>
  </button>
  <button className="py-3 px-2 rounded-[33px]">
  <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">

      About Us
    </span>
  </button>
</div>


        <div className="relative flex-1 max-w-lg">
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            className="
              w-full h-11
              px-5
              rounded-[18px]
              border-b border-white
              text-white
              shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
              bg-transparent
              outline-none
              pr-32
              placeholder:text-[#570B974D]
              placeholder:font-roboto
              placeholder:text-base
              placeholder:font-medium
              placeholder:tracking-wide
              placeholder:leading-relaxed
            "
          />

          <button
            type="button"
            className="
              absolute top-0 right-0
              h-11 w-28
              rounded-tr-[18px] rounded-br-[18px]
              bg-[#570B97]
              flex items-center justify-center
            "
          >
            <span
              className="
                font-roboto font-medium text-base leading-6
                text-[#FAFAFA]
                text-center
                align-middle
              "
            >
              Let’s Talk
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

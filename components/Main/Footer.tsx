import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pl-9 md:pl-14 pr-4 md:pr-3    py-[40px] bg-white mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-2">

          <Image
            src="/logo.png"
            alt="Description"
            width={92} height={92}
            className="w-12 md:w-[70px]"

          />


        </div>

        <div className="pointer-events-none flex flex-col md:col-span-1 ">
  <a
    href="#company-section"
    className="pointer-events-auto font-roboto py-1 md:p-3 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]"
  >
    Our Client
  </a>
  <a
    href="#about"
    className="pointer-events-auto font-roboto py-1 md:p-3 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]"
  >
    About Us
  </a>
</div>

        <div className="md:col-span-4 ml-0 md:ml-20 mt-0 md:mt-5  ">
          <p className="font-roboto font-normal pb-2   text-[14px]  md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
            36 Robinson Road, #20-01, 
          </p>
          <p className="font-roboto font-normal   text-[14px]  md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
          City House, Singapore 068877
          </p>

        </div>

        <div className="md:col-span-3">
        <div className="hidden md:block md:w-[495px]">
                      <div className="relative flex-1 max-w-lg mt-4 ">
                        <input
                          id="email"
                          type="text"
                          placeholder="Enter Your Email"
                          className="
                          w-full h-11 px-5 rounded-[18px] border-b border-white
                          shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
                          bg-transparent outline-none pr-32
                          placeholder:text-[#570B974D]
                          placeholder:font-roboto placeholder:text-base placeholder:font-medium
                          placeholder:tracking-wide placeholder:leading-relaxed
                          text-[#2E2C32] /* Set the input text color here */
                        "
                      />
                        <button
                          type="button"
                          className="cursor-pointer
        absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px]
        bg-[#570B97] flex items-center justify-center
      "
                        >
                          <span className="font-roboto text-[12px] md:text-[16px] leading-6 text-[#FAFAFA] text-center align-middle">
                          Let&rsquo;s Talk
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="block md:hidden pt-4 space-y-4">
                    <input
  type="email"
  placeholder="Enter Your Email"
  className="w-full px-4 py-2 text-base text-[#2E2C32] placeholder-[#A29DBB] border border-purple-500 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
                      <button className="w-full bg-[#570B97] hover:bg-[#570B97] px-4 py-2 rounded-lg text-white">
                      Let&rsquo;s Talk
                      </button>
                    </div>

        </div>
      </div>

      <div className='pr-2 md:pr-19'>
        <hr className="w-full h-0.5 bg-gradient-to-r from-purple-700/25 via-purple-700/40 to-purple-700/25 border-0 my-3 md:my-5" />
        <div className="flex flex-col  md:flex-row  md:justify-between items-start md:items-center w-full">
          <p className="font-roboto font-normal text-[14px]  md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] mb-2 md:mb-0">
            © 2025 The Tenth Floor Pte Ltd. All rights reserved.
          </p>
          <p className="font-roboto font-normal text-[14px]  md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] hover:underline ">
            Privacy Policy
          </p>
        </div>


      </div>

     
    </div>
  )
}

export default Footer
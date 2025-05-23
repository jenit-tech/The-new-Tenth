import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pl-11 md:pl-14 pr-5 md:pr-1 py-[40px] bg-white mt-5">
      {/* Flex container replacing grid */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 ">
        {/* Logo */}
       
       
         <a href="#home" className="mb-4 md:mb-0 md:w-[92px] mr-0 md:mr-5">
          <Image
            src="/logo.png"
            alt="Description"
            width={92}
            height={92}
            className="w-10 md:w-[92px] " // Using arbitrary value for styling
          />
        </a>
             

        {/* Navigation links */}
        <div className="pointer-events-none flex flex-col md:gap-2 md:w-auto mr-0 md:mr-20 mb-3 md:mb-0">
  <a
    href="#company-section"
    className="pointer-events-auto font-roboto py-1 md:px-3 mt:0 md:mt-2 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97] whitespace-nowrap"
  >
    Our Client
  </a>
  <a
    href="#about"
    className="pointer-events-auto font-roboto py-1 md:px-3 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]"
  >
    About Us
  </a>
</div>

        {/* Address section */}
        <div className="md:w-[40%]  md:ml-0 mt-0 md:mt-5 mr-0  md:mr-70 lg:mr-5 xl:mr-65 2xl:mr-190">
          <p className="font-roboto font-normal pb-2 text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
            36 Robinson Road, #20-01,
          </p>
          <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
            City House, Singapore 068877
          </p>
        </div>

        {/* Email input and button */}
        <div className="w-full mt-4 md:mt-0">
          {/* Desktop view */}
          <div className="hidden md:flex md:items-center md:space-x-2 pr-16">
            <div className="relative flex-1 max-w-lg">
              <input
                id="email"
                type="text"
                placeholder="Enter Your Email"
                className="
                  w-full h-11 px-5 rounded-[18px] border-b border-white
                  shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
                  bg-transparent outline-none
                  placeholder:text-[#570B974D]
                  placeholder:font-roboto placeholder:text-base placeholder:font-medium
                  placeholder:tracking-wide placeholder:leading-relaxed
                  text-[#2E2C32]
                "
              />
              <button
                type="button"
                className="absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px] bg-[#570B97] flex items-center justify-center cursor-pointer hover:bg-[#8C72D0]"
              >
                <span className="font-roboto text-[14px] md:text-[16px] leading-6 text-[#FAFAFA] text-center align-middle">
                  Let’s Talk
                </span>
              </button>
            </div>
          </div>
          {/* Mobile view */}
          <div className="block md:hidden pt-4 space-y-4 pr-7 pl-2">
          <div className="relative w-full">
  {/* Input */}
  <input
    id="email"
    type="text"
    placeholder="Enter Your Email"
    className="
      w-full h-15 px-5 pr-32 rounded-[18px] border-b border-white
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none
      placeholder:text-[#570B974D]
      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed
      text-[#2E2C32]
    "
  />
  {/* Button */}
  <button
    type="button"
    className="
      absolute top-0 right-0 h-15 w-[100px] rounded-tr-[18px] rounded-br-[18px]
      bg-[#570B97] flex items-center justify-center
      border-0
      cursor-pointer 
    "
  >
    <span
      className="
        font-roboto text-[14px] text-base leading-6
        text-[#FAFAFA]
        text-center align-middle
      "
    >
      Let’s Talk
    </span>
  </button>
</div>
          </div>
        </div>
      </div>

      {/* Divider and footer info */}
      <div className="pr-2 md:pr-19 mt-8">
        <hr className="w-full h-0.5 bg-gradient-to-r from-purple-700/25 via-purple-700/40 to-purple-700/25 border-0 my-3 md:my-5" />
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
          <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] mb-2 md:mb-0">
            © 2025 The Tenth Floor Pte Ltd. All rights reserved.
          </p>
          <a
  href="PrivacyPolicy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="font-roboto font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] hover:underline cursor-pointer"
>
  Privacy Policy
</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
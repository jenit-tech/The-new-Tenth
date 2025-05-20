import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-fit gap-[28px] px-[80px] py-[40px] bg-white mt-5">
   <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
   <div className="md:col-span-3">
         
              <Image
                      src="/logo.png" 
                      alt="Description" 
                      width={92} height={92}
                    
                    />
           
           
          </div>

          <div className="md:col-span-3">
          <p className="font-roboto font-normal text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
  Our Client
</p>
<p className="font-roboto font-normal text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
  About Us
</p>


          </div>
          <div className="md:col-span-3">
          <p className="font-roboto font-normal text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
  36 Robinson Road, #20-01, City House, Singapore 068877
</p>

          </div>

          <div className="md:col-span-3">
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
   </div>

   <div>
   <hr className="w-full h-0.5 bg-gradient-to-r from-purple-700/25 via-purple-700/40 to-purple-700/25 border-0 my-5" />
   <div className="flex flex-col md:flex-row justify-between items-center w-full px-4">
  <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] mb-2 md:mb-0">
    © 2025 The Tenth Floor Pte Ltd. All rights reserved.
  </p>
  <p className="font-roboto font-normal text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] hover:underline">
    Privacy Policy
  </p>
</div>


   </div>
</div> 
  )
}

export default Footer
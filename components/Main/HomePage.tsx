import React from 'react'
import RightSideBox from '../sub/RightSideBox'



const HomePage = () => {
  return (
   <>
     <div className="pt-36 bg-gradient-to-b from-purple-50 via-white to-purple-50
">
     <div className="container">
       <main className=" mx-auto px-4 md:px-8 py-12 md:py-20 relative top-[20px] left-[40px] gap-[10px] flex flex-col lg:flex-row lg:gap-16 pb-10">
         
         {/* Left Content */}
         <div className="w-full lg:w-1/2 lg:pr-8 mb-10">
         <div className="sticky top-20">
         <h2
  className="
    font-heleveticaNeue font-bold text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[0.01em]
    align-middle text-[#570B97] whitespace-pre-line
  "
>
  We turn what your audience say, do 
  and how they behave into your competitive edge 
  with precision, speed and simplicity.
</h2>
           <p
             className="
               w-full max-w-[651px]
               font-helvetica font-bold text-[1.5rem] md:text-[1.75rem] leading-[1.4] tracking-[0.01em]
               align-middle text-[#570B97] flex items-center mt-4
             "
           >
             SIMPLE, EFFICIENT, PRECISE
           </p>
           <div className="space-y-6">
  <p className=" font-heleveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
    Our approach is simple but powerful. We combine your existing data with public 
    information and advanced analytics to reveal patterns others miss.
  </p>

  <p className=" font-heleveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
    No unnecessary complexity, just clear insights that help you reach customers faster and 
    more efficiently.
  </p>

  <p className=" font-heleveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
    The result? Strategies that work better and cost less. We're self-funded, independent 
    and focused on one thing: delivering results you can measure.
  </p>
</div>
         </div>
         </div>

         {/* Right Side Box with scroll */}
         <div className="w-full lg:w-1/2 mb-50">
          <RightSideBox />
        </div>
       </main>
     </div>
     </div>
   </>
  )
}

export default HomePage
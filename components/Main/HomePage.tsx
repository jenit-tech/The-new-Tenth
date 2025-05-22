import React from 'react'
import RightSideBox from '../sub/RightSideBox'








const HomePage = () => {
  return (
   <>
     <div id="home" className=" pt-20 md:pt-36 md:pt-50   bg-gradient-to-b from-purple-50 via-white to-purple-50 z-50">
    
       <div className="px-5 md:px-10 flex flex-col lg:flex-row  ">
         
         {/* Left Content */}
         <div className="w-full lg:w-1/2 m-5 pr-10 md:pr-0">
         <div className="sticky top-60">

         <h2
  className="
    font-heleveticaNeue font-bold text-[28px] md:text-[32px] 
     text-[#570B97]
  "
>
  We turn what your audience say, do <br/>
  and how they behave into your competitive edge 
  with precision, speed and simplicity.
</h2>
           <p
             className="
               w-full max-w-[651px]
               font-helvetica font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[0.01em]
               align-middle text-[#570B97] flex items-center mt-4
             "
           >
             SIMPLE, EFFICIENT, PRECISE
           </p>
           <div className="space-y-6">
  <p className=" font-heleveticaNeue font-normal text-[13px] md:text-[16px] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
    Our approach is simple but powerful. We combine your existing data with public 
    information and advanced analytics to reveal patterns others miss.
  </p>

  <p className=" font-heleveticaNeue font-normal text-[13px] md:text-[16px] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
    No unnecessary complexity, just clear insights that help you reach customers faster and 
    more efficiently.
  </p>

  <p className=" font-heleveticaNeue font-normal text-[13px] md:text-[16px] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
  The result? Strategies that work better and cost less. We&apos;re self-funded, independent 
  and focused on one thing: delivering results you can measure.
</p>

</div>
         </div>
         </div>

         {/* Right Side Box with scroll */}
        
         <div className="w-full lg:w-1/2 p-0 md:p-5 z-30">
        
        
  <RightSideBox />


       
        </div>
       </div>
     </div>
   
   </>
  )
}

export default HomePage
import React from 'react'
import CompanyRightSection from '../sub/CompanyRightSection'

const Company = () => {
  return (
    <div className="pt-36 min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
        <div className="container ">
         <main className=" mx-auto px-4 md:px-8 py-12 md:py-20 relative top-[20px] left-[40px] gap-[20px] flex flex-col  items-center justify-between  lg:flex-row lg:gap-16">
         <div className="w-full lg:w-1/2 lg:pr-8">
         <h2 className=" font-roboto font-bold text-[32px] leading-[100%] tracking-[0.01em] align-middle text-[#570B97] pb-4">
  ACROSS REGIONS, <br/> ACROSS INDUSTRIES
</h2>
<p className="font-medium text-base leading-[140%] tracking-[0.01em] align-middle font-helveticaNeue text-[#570B97]">
  We have worked with clients across continents and industries, mining insights hiding in plain sight.
</p>



         </div>

         <div>
          <CompanyRightSection/>
         </div>


         </main>
        
    </div>
     </div>
  )
}

export default Company
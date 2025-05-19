import React from 'react'
import AboutUsRightSection from '../sub/AboutUsRightSection'

const AboutUs = () => {
  return (
    <div className="pt-36 min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
     <div className="container mx-auto px-4 md:px-8">
        <main className="py-12 md:py-20 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
           <div className="w-full lg:w-1/2 lg:pr-8">
     <h2
className="
font-heleveticaNeue font-bold text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[0.01em]
align-middle text-[#570B97] whitespace-pre-line mb-4
"
>
Founded in 2015 in Singapore, The Tenth Floor is driven by a team of professionals with expertise across a wide range of industries.
</h2>
<p className=" font-heleveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
This distinctive blend and collaborative approach enable us to view data from various angles, uncover valuable insights, and convert complex information into innovative and clear business solutions.
</p>


     </div>

      <div className="w-full lg:w-1/2 ">
              <AboutUsRightSection/> 
             </div>

     <div>
    
     </div>


     </main>
    
</div>
 </div>
  )
}

export default AboutUs
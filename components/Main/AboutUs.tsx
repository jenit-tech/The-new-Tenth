import React from 'react'
import AboutUsRightSection from '../sub/AboutUsRightSection' // Adjust path as needed

const AboutUs = () => {
  return (
    <div className="pt-36 pr-7 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="container">
        <div className=" mx-auto px-4 md:px-8 py-12 md:py-20 relative top-[20px] left-[40px] gap-[10px] flex flex-col lg:flex-row lg:gap-16 pb-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10">
            <div className="sticky top-50">
              <h2 className="font-heleveticaNeue font-bold text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[0.01em] align-middle text-[#570B97] whitespace-pre-line">
                Founded in 2015 in Singapore, The Tenth Floor is driven by a team of professionals with expertise across a wide range of industries.
              </h2>
              <p className="font-heleveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] text-[#570B97] mt-4 whitespace-pre-line">
                This distinctive blend and collaborative approach enable us to view data from various angles, uncover valuable insights, and convert complex information into innovative and clear business solutions.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <AboutUsRightSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
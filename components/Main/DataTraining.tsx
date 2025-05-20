import React from 'react'
import RightSideDataTraining from '../sub/RightSideDataTraining'

const DataTraining = () => {
  return (
    <div className="pt-36 pr-20 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="container">
        <div className=" mx-auto px-4 md:px-8 py-12 md:py-20 relative top-[20px] left-[40px] gap-[10px] flex flex-col lg:flex-row lg:gap-16 pb-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10">
            <h2 className="font-helveticaNeue font-bold text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[0.01em] text-[#570B97] mb-4">
              We preach what we practice: Data Training from Real World Practitioners
            </h2>
            <p className="font-helveticaNeue font-normal text-[1rem] md:text-[1.125rem] leading-[1.4] tracking-[0.01em] text-[#570B97] mt-4">
              No Code, Low Code, Data-Driven Insights is a dynamic training program designed to equip managers with essential tools for making informed, day-to-day decisions with ease and efficiency.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <RightSideDataTraining />
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default DataTraining

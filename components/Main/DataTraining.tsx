import React from 'react'
import RightSideDataTraining from '../sub/RightSideDataTraining'

const DataTraining = () => {
  return (
    <div className="pt-36 min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 md:px-8">
        <main className="py-12 md:py-20 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-16">
          
          <div className="w-full lg:w-1/2">
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

        </main>
      </div>
    </div>
  )
}

export default DataTraining

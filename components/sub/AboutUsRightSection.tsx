import Image from 'next/image'
import React from 'react'

const AboutUsRightSection = () => {
  return (
    <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799]">
 <Image
  src="/personone.png"
  alt="Description"
  width={142}
  height={146}
  className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
/>

<div className="flex flex-col gap-6">
<p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
  Subhendu Mukherjee
</p>
<p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
  Founder Director
</p>
<p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] whitespace-pre-line">
  With 25+ years of global marketing strategy experience, Subhendu brings both
  creative excellence and data-driven precision to every challenge.

  As former Managing Director of JWT Malaysia and Head of Integrated Strategy at
  McCann Singapore, he's helped transform how brands connect with audiences in the digital age.

  Subhendu’s work has earned the industry's highest recognition, including a Cannes Lions
  Grand Prix and Gold in Data Driven Marketing. Beyond his agency leadership, he's shaped
  the next generation of talent as a visiting lecturer at Hyper Island Singapore,
  Google Squared, and Nanyang Technological University.

  Today, Subhendu specializes in guiding organizations through their digital data transformation,
  combining strategic vision with practical implementation to unlock new opportunities in
  an increasingly complex landscape.
</p>


</div>

  </div>
  
  )
}

export default AboutUsRightSection
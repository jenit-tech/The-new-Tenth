import React from 'react'
import Image from 'next/image'

const AboutUsRightSection = () => {
  return (
    
    <div className=" relative w-full">
     
      {/* Card 1 */}
      
      <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
        <Image
          src="/personone.png"
          alt="Subhendu Mukherjee"
          width={142}
          height={146}
          className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-6">
          <p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Subhendu Mukherjee
          </p>
          <p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Founder Director
          </p>
          <p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97] whitespace-pre-line">
  With 25+ years of global marketing strategy experience, Subhendu brings both
  creative excellence and data-driven precision to every challenge.
  As former Managing Director of JWT Malaysia and Head of Integrated Strategy at
  McCann Singapore, he&apos;s helped transform how brands connect with audiences in the digital age.
  Subhendu&rsquo;s work has earned the industry&apos;s highest recognition, including a Cannes Lions
  Grand Prix and Gold in Data Driven Marketing. Beyond his agency leadership, he&apos;s shaped
  the next generation of talent as a visiting lecturer at Hyper Island Singapore,
  Google Squared, and Nanyang Technological University.
  Today, Subhendu specializes in guiding organizations through their digital data transformation,
  combining strategic vision with practical implementation to unlock new opportunities in
  an increasingly complex landscape.
</p>

        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
        <Image
          src="/persontwo.png"
          alt="Hasnah Mohamed Samidin"
          width={142}
          height={146}
          className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-6">
          <p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Hasnah Mohamed Samidin
          </p>
          <p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Analyst, Director
          </p>
          <p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97] whitespace-pre-line">
  A brand strategist with global perspective, Hasnah combines strategic insight with
  creative problem-solving to help businesses build resilience and competitive edge.
  Working across different markets from SEA to MENA has exposed her to diverse cultural perspectives,
  enriching her understanding of motivations across different societies. She brings this deep understanding
  to every challenge, creating meaningful connections between brands and their audiences by tapping into
  the psychological drivers behind behavior and decision-making.
  Throughout her career, she&apos;s moved seamlessly between creative leadership and strategic thinking,
  going from Executive Creative Director to Head of Strategy. Beyond building successful brands,
  her work has also earned advertising&apos;s highest honors, including the coveted Cannes Lions Grand Prix, Clios,
  The OneShow, New York Fest, and Effies.
</p>

        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
        <Image
          src="/personthree.png"
          alt="Ahana Mukherjee"
          width={142}
          height={146}
          className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-6">
          <p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Ahana Mukherjee
          </p>
          <p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97]">
            Analyst, Project Lead
          </p>
          <p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] text-[#570B97] whitespace-pre-line">
            Ahana Mukherjee is a marketing strategist, educator, and project leader with experience
            across FMCG, Banking, Fintech, Pharma, and Tech. With an MBA in Marketing and a Cambridge CIE certification,
            she brings a unique edge to capability-building and learning. Her strength lies in data storytelling—
            translating insights into actionable strategies for products, campaigns, and teams.
            She has worked towards empowering managers, equipping them with data-driven tools for smarter communication and product solutions.
            Her expertise spans viral and dark marketing, CSR, and integrated strategy. As a facilitator and former schoolteacher,
            Ahana co-designs experiential training programs for organizations.
            Merging pedagogy with strategy she fosters innovation and sustainable growth. She is committed to shaping the future of marketing
            by nurturing strong, adaptable teams and leaders.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUsRightSection
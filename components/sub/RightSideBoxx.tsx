"use client"
import * as React from 'react';

export default function SideDotsNavigation() {
  const cardRefs = React.useRef([]); // refs for each card
  const [activeIndex, setActiveIndex] = React.useState(0);

  const cards = [
    {
      id: 0,
      category: "BANKING & FINANCE",
      title: "OCBC",
      description: `Decoding human truth: \n a family first financial planning\n\nThe brief was to be the trusted financial planning guide for\nyoung Singapore parents.\n\nInstead of lengthy research, we analysed public online sources\n to discover the real money concerns that keeps\n young parents up at night.\n\nThe result? Prompt and precise discoveries that allowed the\nclient to create relevant, targeted solutions for young families fast.\nLike product features, the messaging also resonate\n with the parent’s everyday reality and led to faster conversions.`,
    },
    {
      id: 1,
      category: "BANKING & FINANCE",
      title: "MASTERCARD",
      description: `Mastercard faced tough competition from local payment gateways which impacted their revenues. We analyzed tourist behavior from the top five highest-arrival countries using statistically significant but publicly available data sources.\n\nThis simple yet strategic approach helped us uncover non-obvious opportunities that led to a unique solution that boosted Mastercard adoption and cross-border revenue. The success triggered widespread implementation among major credit card issuers.`,
    },
    {
      id: 2,
      category: "PHARMACEUTICAL",
      title: "PFIZER",
      description: `Pfizer (now Haleon) needed to understand changing attitudes toward Asia's growing wellness markets.\n\nInstead of relying on lengthy surveys, we analyzed search data from Google and Baidu to uncover the changing consumer interest and behavior in wellness today.\n\nThe findings helped the brand refine their product innovation and messaging strategy that resonated with Chinese and Taiwanese consumers.`,
    },
    // Add more cards as needed
  ];

  React.useEffect(() => {
    // Keep refs array in sync
    cardRefs.current = cardRefs.current.slice(0, cards.length);
  }, [cards.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Fixed Dots Navigation (Right Side) */}
      <div className="fixed right-[calc(50%-640px+32px)] top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">

        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === activeIndex ? 'bg-[#674EA7] scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to ${card.title}`}
          />
        ))}
      </div>
  
      {/* Scrollable Card List */}
      <div className="flex flex-col space-y-8 px-8 py-10 max-w-3xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => handleCardClick(index)}
            className="cursor-pointer rounded-[28px] p-5 border-b border-b-[#674EA7] bg-[#674EA7] backdrop-blur-sm shadow-[0_0_5px_0_#A29DBB] w-full"
          >
            <div className="mb-4">
              <span className="text-[#FFFFFF] font-medium text-sm md:text-base leading-[140%] tracking-[0.01em] font-heleveticaNeue block">
                {card.category}
              </span>
              <span className="text-[#FFFFFF] font-bold text-xl md:text-2xl leading-[140%] tracking-[0.01em] font-helvetica block mt-1">
                {card.title}
              </span>
              <p className="text-white font-bold text-base md:text-lg leading-[140%] tracking-[0.01em] font-helvetica mt-2 whitespace-pre-line">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
  
}


































import Image from 'next/image'
import React from 'react'

const AboutUsRightSection = () => {
  return (
    <div className=" relative w-full">
    <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
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
  McCann Singapore, he&apos;s helped transform how brands connect with audiences in the digital age.

  Subhendu’s work has earned the industry&apos;s highest recognition, including a Cannes Lions
  Grand Prix and Gold in Data Driven Marketing. Beyond his agency leadership, he&apos;s shaped
  the next generation of talent as a visiting lecturer at Hyper Island Singapore,
  Google Squared, and Nanyang Technological University.

  Today, Subhendu specializes in guiding organizations through their digital data transformation,
  combining strategic vision with practical implementation to unlock new opportunities in
  an increasingly complex landscape.
</p>



</div>
</div>

<div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
 <Image
  src="/persontwo.png"
  alt="Description"
  width={142}
  height={146}
  className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
/>

<div className="flex flex-col gap-6">
<p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
Hasnah Mohamed Samidin
</p>
<p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
Analyst, Director
</p>
<p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] whitespace-pre-line">
A brand strategist with global perspective, Hasnah combines strategic insight with  creative problem-solving to help businesses build resilience and competitive edge.

Working across different markets from SEA to MENA has exposed her to diverse  cultural perspectives, enriching her understanding of motivations across different societies.  She brings this deep understanding to every challenge, creating meaningful connections  between brands and their audiences by tapping into the psychological drivers  behind behavior and decision-making.

Throughout her career, she's moved seamlessly between creative leadership and strategic thinking, going from Executive Creative Director to Head of Strategy.   Beyond building successful brands her work has also earned advertising's highest honors,  including the coveted Cannes Lions Grand Prix, Clios, The OneShow, New York Fest and Effies.
</p>



</div>

  </div>

  <div className="flex flex-row gap-[40px] rounded-[28px] p-5 border-b bg-gradient-to-br from-white/60 to-white/25 backdrop-blur-sm shadow-[0px_0px_5px_0px_#570B9799] mb-7">
 <Image
  src="/personthree.png"
  alt="Description"
  width={142}
  height={146}
  className="rounded-[14.88px] w-[142px] h-[146px] object-cover flex-shrink-0"
/>

<div className="flex flex-col gap-6">
<p className="font-roboto font-medium text-[24px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
Ahana Mukherjee
</p>
<p className="font-heleveticaNeue font-bold italic text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97]">
Analyst, Project Lead
</p>
<p className="font-heleveticaNeue font-normal text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] whitespace-pre-line">
Ahana Mukherjee is a marketing strategist, educator, and project leader with experience  across FMCG, Banking, Fintech, Pharma, and Tech. With an MBA in Marketing and  a Cambridge CIE certification, she brings a unique edge to capability-building and learning. Her strength lies in data storytelling-translating insights into actionable strategies for products, campaigns, and teams.

She has worked towards empowering managers, equipping them with data-driven tools  for smarter communication and product solutions. Her expertise spans viral and dark marketing,  CSR, and integrated strategy. As a facilitator and former schoolteacher, Ahana co- designs  experiential training programs for organisations.

Merging  pedagogy with strategy she fosters innovation and sustainable growth. She is committed to shaping the future of marketing by nurturing strong, adaptable teams and leaders.
</p>



</div>

  </div>
  
  </div>

  
  
  )
}

export default AboutUsRightSection
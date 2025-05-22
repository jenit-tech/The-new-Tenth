"use client"

import React, { useRef, useState, useEffect } from 'react'
import { ArrowUpRight,  ArrowDownRight } from 'lucide-react';

export default function RightSideBox() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const cards = [
    {
      id: 1,
      category: "BANKING & FINANCE",
      title: "OCBC",
      semititle: `Decoding human truth: <br /> a family first financial planning`,
      description: `The brief was to be the trusted financial planning guide for
    young Singapore parents.
    
    Instead of lengthy research, we analysed public online sources
    to discover the real money concerns that keeps
    young parents up at night.
    
    The result? Prompt and precise discoveries that allowed the
    client to create relevant, targeted solutions for young families fast.
    Like product features, the messaging also resonate
    with the parent’s everyday reality and led to faster conversions.`,
      // Color info
      borderColor: '#674EA7',
      bgColor: '#674EA7'
    },
    {
      id: 2,
      category: "BANKING & FINANCE",
      title: "MASTERCARD",
      semititle: `The express lane to hitting today’s targets & tomorrow’s goals: study what consumers do`,
      description: `Mastercard faced tough competition from local payment gateways which impacted their revenues. We analyzed tourist behavior from the top five highest-arrival countries using statistically significant but publicly available data sources.
    
    This simple yet strategic approach helped us uncover non-obvious opportunities that led to a unique solution that boosted Mastercard adoption and cross-border revenue. The success triggered widespread implementation among major credit card issuers.`,
      borderColor: '#674EA7',
      bgColor: '#674EA7'
    },
    {
      id: 3,
      category: "PHARMACEUTICAL",
      title: "PFIZER",
      semititle: `Digital signals that uncovered Asia’s vitamin revolution`,
      description: `Pfizer (now Haleon) needed to understand changing attitudes toward Asia's growing wellness markets.Instead of relying on lengthy surveys, we analyzed search data from Google and Baidu to uncover the changing consumer interest and behavior in wellness today.
    
    The findings helped the brand refine their product innovation and messaging strategy that resonated with Chinese and Taiwanese consumers.`,
      borderColor: '#751A47',
      bgColor: '#751A47'
    },
    {
      id: 4,
      category: "FOOD",
      title: "NESTLE",
      semititle: `Rethinking wellness with data`,
      description: `We analysed what Indonesian consumers were actually saying and discovered insights that helped Nestlé to completely rethink their Green Coffee approach.
    
    The discoveries shaped the winning narrative. Instead of complicated health messages, they focused on beauty benefits that people really wanted.Starting with just social media posts, the idea connected so well that it grew into Nestlé's main campaign.The result? They went from trailing the competition to becoming Indonesia's coffee leader.`,
      borderColor: '#A64D79',
      bgColor: '#A64D79'
    },
    {
      id: 5,
      category: "FMCG : PERSONAL CARE",
      title: "UNILEVER",
      semititle: `Consumer journey clarity that cuts through the clutter`,
      description: `Clear needed a unified view of its digital performance across platforms. We identified the right metrics and built custom dashboards that brought campaign, content and keyword insights under one roof. The result? Smarter keyword strategy, optimized website content and reduced spend on paid promotions that led to higher visibility and conversions.`,
      borderColor: '#C27BA0',
      bgColor: '#C27BA0'
    },
    {
      id: 6,
      category: "TOURISM",
      title: "NATIONAL GALLERY",
      semititle: `Analytics and the art of digital engagement`,
      description: `National Gallery Singapore needed better visibility into how visitors engaged with its Digital Art Journeys. We built a custom analytics framework to track key actions, revealing drop-offs, content gaps and top-performing artworks.
    
    The result: sharper insights, smoother user flows, and more impactful digital experiences. Most importantly, it helped the National Gallery smooth out the rough spots and highlight what people loved most.`,
      borderColor: '#4C1130',
      bgColor: '#4C1130'
    },
    {
      id: 7,
      category: "RECRUITMENT",
      title: "AXIATA",
      semititle: `Engaging top tech talent with data-backed narratives`,
      description: `Winning the talent war is crucial in the tech industry. So we analyzed over 19,000 potential employee profiles and over 6,000 industry stories to create a winning Employee Value Proposition [EVP] for Axiata. 
      
      The result : data-tested narrative that was successful far beyond the recruitment drive.  Not only did Axiata easily win the talent war to build the team they needed, the refreshed proposition also established the brand as a credible digital leader.`,
      borderColor: '#8C72D0',
      bgColor: '#8C72D0'
    },
    {
      id: 8,
      category: "B2B2C | ENTERPRISE",
      title: "INTEL",
      semititle: `True visibility is knowing the real numbers behind the numbers`,
      description: `Intel wanted clarity on how its brand was perceived across key e-commerce platforms. Over 200,000  listings were analyzed to uncover how image and spec similarity with competitors influenced perception and ratings. We then built a LIVE dashboard that made it easy for Intel to observe and act to fine-tune retail strategy, OEM alignment, and SKU positioning. `,
      borderColor: '#9B91B3',
      bgColor: '#9B91B3'
    },
  ];

  // Step 1: Ensure refs array matches cards length
useEffect(() => {
  cardRefs.current = cardRefs.current.slice(0, cards.length);
}, [cards.length]);

// Step 2: Set up intersection observers
useEffect(() => {
  const observers: IntersectionObserver[] = [];

  cardRefs.current.forEach((ref, index) => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      observers.push(observer);
    }
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
}, [cards.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className=''>
     <div className="hidden md:block md:sticky top-25 lg:top-32 w-full h-[10vh] bg-gradient-to-b from-purple-50 via-white to-purple-50 z-120 border-0 outline-none">
     </div>
    <div className="flex flex-row items-start px-4 py-2 space-x-4 z-10 pt-0 md:pt-33">


      {/* Cards */}
      <div className="flex flex-col space-y-8 w-full max-w-3xl">
        {cards.map((card, index) => {
          const { borderColor, bgColor } = card
          const isActive = activeCardIndex === index;
          return (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}

              onClick={() => handleCardClick(index)}
              className="rounded-[28px] p-5 border-b backdrop-blur-sm shadow-[0_0_5px_0_#A29DBB] w-full scroll-mt-43"
              style={{
                backgroundColor: bgColor, // keep transparent for content visibility
                borderBottom: `4px solid ${borderColor}`,
              }}
            >
              {/* Card Content */}
              <div className="mb-4">
                <span className="text-[#FFFFFF] font-medium text-[13px] md:text-[16px] leading-[140%] tracking-[0.01em] font-heleveticaNeue block mb-3">
                  {card.category}
                </span>
                <span className="text-[#FFFFFF] font-bold text-[20px] md:text-[24px] leading-[140%] tracking-[0.01em] font-helvetica block mb-2">
                  {card.title}
                </span>
                <span
                  className="text-white font-bold text-[20px] md:text-[24px] leading-[140%] tracking-[0.01em] font-helvetica mt-2"
                  dangerouslySetInnerHTML={{ __html: card.semititle }}
                />
                <p className="text-white font-normal text-[13px] md:text-[16px] leading-[140%] tracking-[0.01em] font-heleveticaNeue whitespace-pre-line mt-3">
                  {card.description}
                </p>
              
              </div>
              {activeCardIndex === index && (
                <div className="mt-4 relative "> {/* Make container relative for absolute positioning */}
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveCardIndex(null)} // Or your close handler
                    className="absolute top-2 right-2 z-10 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close"
                  >
                    ✖
                  </button>
                  {/* Inner box with padding to prevent touching the close button or paragraph */}
                  <div className="relative rounded-[8px] p-4 shadow-[0_0_5px_0_#A29DBB] max-w-2xl mx-auto">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)] z-0 rounded-[8px]" />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Paragraph */}
        <p className="font-rubik font-medium text-left
         text-[13px] md:text-[16px] leading-[140%] tracking-[0.01em] text-center text-[#2E2C32B2] mb-4">
          To receive this case study please enter your email Address
        </p>

        {/* Large screen form (from md breakpoint) */}
        <div className="hidden md:block md:w-[500px] mx-auto">
          <div className="relative flex-1 max-w-lg mt-4">
            {/* Email Input */}
            <input
              id="email"
              type="text"
              placeholder="Enter Your Email"
              className="
                w-full h-11 px-5 rounded-[18px] border-b border-white
                shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
                bg-white outline-none pr-32
                placeholder:text-[#2E2C324D]
                font-roboto font-medium text-[16px]
              "
            />
            {/* Submit Button */}
            <button
              type="button"
              className="
                absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px]
                bg-[#9B87F5] flex items-center justify-center
              "
            >
              <span className="font-roboto text-[12px] md:text-[16px] leading-6 text-[#FAFAFA] text-center align-middle">
                Submit
              </span>
            </button>
          </div>
        </div>

        {/* Mobile version (below md) */}
        <div className="block md:hidden pt-4 space-y-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500 px-4 py-2 rounded-lg bg-white"
          />
          <button className="w-full bg-[#570B97] hover:bg-[#570B97] px-4 py-2 rounded-lg text-white">
            Let’s Talk
          </button>
        </div>

        {/* Additional message with icon */}
        <div className="flex items-start mt-4 px-4">
        <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  className="w-[14px] h-[14px] mt-2.5"
  viewBox="0 0 16 16"
>
  <path
    d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.791013 8.02098277 4.62153384 10.96411027 2.5 14.5 C-1.03588973 16.62153384 -3.97901723 16.791013 -8 16 C-10.5 14.5 -10.5 14.5 -12 12 C-12.791013 7.97901723 -12.62153384 5.03588973 -10.5 1.5 C-6.96411027 -0.62153384 -4.02098277 -0.791013 0 0 Z M-10 4 C-11.16977494 6.34872531 -11.16977494 6.34872531 -11 9 C-9.67963999 12.2275467 -8.86910604 13.63406062 -5.625 15 C-2.17164129 15 -0.64253676 14.20211397 2 12 C3.16977494 9.65127469 3.16977494 9.65127469 3 7 C1.67963999 3.7724533 0.86910604 2.36593938 -2.375 1 C-5.82835871 1 -7.35746324 1.79788603 -10 4 Z"
    fill="#3A3A3A"
    transform="translate(12,0)"
  />
  <path
    d="M0 0 C0.66 0 1.32 0 2 0 C2.33 2.64 2.66 5.28 3 8 C1.68 7.67 0.36 7.34 -1 7 C-0.67 4.69 -0.34 2.38 0 0 Z"
    fill="#3A3A3A"
    transform="translate(7,4)"
  />
</svg>
  <p className="font-rubik font-normal text-[11px] md:text-[15px] leading-[140%] tracking-[0.01em] text-[#3A3A3A] px-4 py-2 rounded-[8px] ml-2">
    The case study will be shared within 24 hours
  </p>
</div>
      </div>
    </div>
   
                </div>
              )}
            <button
  className="flex items-center space-x-1 mt-2 cursor-pointer"
  onClick={() => setActiveCardIndex(isActive ? null : index)}
>
  <span
    className="font-medium text-[13px] md:text-[16px] leading-[140%] tracking-[0.01em] font-heleveticaNeue
      text-white"
 
  >
    {isActive ? 'Read Less' : 'Read More'}
  </span>
 

  {isActive ? <ArrowDownRight className='text-white w-5 h-5' />   :  <ArrowUpRight className='text-white w-5 h-5' />   }
</button>
            </div>
          )
        })}

      </div>



      {/* Dots */}
      <div className="sticky top-[200px] md:top-[300px]  self-start z-50 flex flex-col items-center  space-y-4">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const style = {
            backgroundColor: isActive ? card.bgColor : '#B4A7D5', // inactive dots background color
            border: isActive ? 'none' : '1px solid #570B97', // optional border for inactive dots
          };

          return (
            <button
              key={card.id}
              onClick={() => handleDotClick(index)}
              style={style}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${isActive ? 'scale-125' : ''
                }`}
              aria-label={`Go to ${card.title}`}
            />
          );
        })}
      </div>
    </div>
   
    </div>
  )
}

























































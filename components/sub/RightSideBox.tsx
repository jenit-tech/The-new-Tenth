"use client"
import  React, { useRef }  from 'react';

export default function RightSideBox({  }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = React.useState(0);

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
      description: `Pfizer (now Haleon) needed to understand changing attitudes toward Asia's growing wellness markets.
    
    Instead of relying on lengthy surveys, we analyzed search data from Google and Baidu to uncover the changing consumer interest and behavior in wellness today.
    
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
    
    The discoveries shaped the winning narrative. Instead of complicated health messages, they focused on beauty benefits that people really wanted.
    
    Starting with just social media posts, the idea connected so well that it grew into Nestlé's main campaign.
    
    The result? They went from trailing the competition to becoming Indonesia's coffee leader.`,
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
      description: `Axiata analyzed over 19,000 potential employee profiles and over 6,000 industry stories to create a winning Employee Value Proposition (EVP). The result: a data-tested narrative that successfully helped Axiata win the talent war and position as a credible digital leader.`,
      borderColor: '#8C72D0',
      bgColor: '#8C72D0'
    },
    {
      id: 8,
      category: "B2B2C & ENTERPRISE",
      title: "INTEL",
      semititle: `True visibility is knowing the real numbers behind the numbers`,
      description: `Intel built a LIVE dashboard analyzing over 200,000 listings to understand perception and ratings across e-commerce platforms, enabling better retail strategy, OEM alignment, and SKU positioning.`,
      borderColor: '#9B91B3',
      bgColor: '#9B91B3'
    },
  ];

  

  React.useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cards.length);
  }, [cards.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-row items-start px-4 py-10 space-x-4">
      
      {/* Dot navigation - now on the left side */}
     

      {/* Cards */}
      <div className="flex flex-col space-y-8 w-full max-w-3xl">
      
      {cards.map((card, index) => {
  const { borderColor, bgColor } = card;
  return (
    <div
    key={card.id}
    ref={(el) => {
      cardRefs.current[index] = el;
    }}
    onClick={() => handleCardClick(index)}
    className="cursor-pointer rounded-[28px] p-5 border-b backdrop-blur-sm shadow-[0_0_5px_0_#A29DBB] w-full"
    style={{ backgroundColor: bgColor, borderBottom: `4px solid ${borderColor}` }}
  >
  
      <div className="mb-4">
        <span className="text-[#FFFFFF] font-medium text-sm md:text-base leading-[140%] tracking-[0.01em] font-heleveticaNeue block">
          {card.category}
        </span>
        <span className="text-[#FFFFFF] font-bold text-xl md:text-2xl leading-[140%] tracking-[0.01em] font-helvetica block mt-1">
          {card.title}
        </span>
        <span
          className="text-white font-bold text-base md:text-lg leading-[140%] tracking-[0.01em] font-helvetica mt-2"
          dangerouslySetInnerHTML={{ __html: card.semititle }}
        />
        <p className="text-white font-normal text-sm md:text-base leading-[140%] tracking-[0.01em] font-heleveticaNeue whitespace-pre-line mt-2">
          {card.description}
        </p>
      </div>
    </div>
  );
})}

      </div>
      <div className="sticky top-60 self-start z-50 flex flex-col items-center space-y-4">
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
    </div>
  );
}
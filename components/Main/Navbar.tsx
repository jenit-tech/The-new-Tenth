"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);
  const [hoveredButton3, setHoveredButton3] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-[144px] px-5 md:px-20  py-3 bg-[#F2F0FA]  z-50 ">
      {/* Logo Image */}
      <Image src="/logo.png" alt="Description" width={120} height={120} />

      {/* Desktop & Tablet Menu */}
    
    <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl space-x-8">
      
      {/* Button 1 */}
      <div className="flex space-x-2">
        <button
          className="py-1 px-2 rounded-[33px]"
          onMouseEnter={() => setHoveredButton1(true)}
          onMouseLeave={() => setHoveredButton1(false)}
        >
          <a
            href="#company-section"
            className="font-roboto text-[17px] font-medium text-[#570B97] capitalize relative inline-block"
          >
            <span
              style={{
                opacity: hoveredButton1 ? 0 : 1,
                whiteSpace: 'nowrap', // ensure single line
              }}
            >
              Our Clients
            </span>
            <span
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
              style={{
                opacity: hoveredButton1 ? 1 : 0,
              }}
            >
              Home
            </span>
          </a>
        </button>
      </div>

      {/* Button 2 */}
      <div className="flex space-x-2">
        <button
          className="py-1 px-2 rounded-[33px]"
          onMouseEnter={() => setHoveredButton2(true)}
          onMouseLeave={() => setHoveredButton2(false)}
        >
          <a
            href="#company-section"
            className="font-roboto text-[17px] font-medium text-[#570B97] capitalize relative inline-block"
          >
            <span
              style={{
                opacity: hoveredButton2 ? 0 : 1,
                whiteSpace: 'nowrap',
              }}
            >
              Training
            </span>
            <span
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
              style={{
                opacity: hoveredButton2 ? 1 : 0,
              }}
            >
              Home
            </span>
          </a>
        </button>
      </div>

      {/* Button 3 */}
      <div className="flex space-x-2">
        <button
          className="py-1 px-2 rounded-[33px]"
          onMouseEnter={() => setHoveredButton3(true)}
          onMouseLeave={() => setHoveredButton3(false)}
        >
          <a
            href="#company-section"
            className="font-roboto text-[17px] font-medium text-[#570B97] capitalize relative inline-block"
          >
            <span
              style={{
                opacity: hoveredButton3 ? 0 : 1,
                whiteSpace: 'nowrap',
              }}
            >
              About Us
            </span>
            <span
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
              style={{
                opacity: hoveredButton3 ? 1 : 0,
              }}
            >
              Home
            </span>
          </a>
        </button>
      </div>


        {/* Email Input & Button */}
        <div className="relative flex-1 max-w-lg">
  <input
    id="email"
    type="text"
    placeholder="Enter Your Email"
    className="
      w-full h-11 px-5 rounded-[18px] border-b border-white
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none pr-32
      placeholder:text-[#570B974D]
      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed
      text-[#674EA7] /* Set the input text color here */
    "
  />
  <button
    type="button"
    className="
      absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px]
      bg-[#570B97] flex items-center justify-center
    "
  >
    <span
      className="
        font-roboto font-medium text-base leading-6
        text-[#FAFAFA]
        text-center align-middle
      "
    >
      Let’s Talk
    </span>
  </button>
</div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
  className={`
    fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out bg-[#FFFFFF]
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
>
        <div className="w-64 p-8 flex flex-col space-y-6 h-full overflow-y-auto">
          {/* Navigation items */}
          {[
            { label: "Our Clients", href: "/clients" },
            { label: "Training", href: "/training" },
            { label: "About Us", href: "/about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-900 hover:text-purple-800 text-xl font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Contact form in mobile menu */}
          <div className="pt-4 space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
           <button className="w-full bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg text-white">
  Let&apos;s Talk
</button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar






  


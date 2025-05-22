"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-[70px] md:h-[144px] px-9 md:px-14  py-3 bg-[#F2F0FA]  z-50 ">
      {/* Logo Image */}
      <Image src="/logo.png" alt="Description" width={120} height={120} className="w-13 md:w-[120px]" />

      {/* Desktop & Tablet Menu */}

      <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl space-x-8">

        {/* Button 1 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]"

          >
       <a
    href="#company-section"
    className="relative inline-block font-roboto text-[17px] font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
  >
    <span className="border-b-2 border-transparent pb-1 hover:border-[#8C72D0]  transition-all duration-200">
      Our Clients
    </span>
  </a>
          </button>
        </div>

        {/* Button 2 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]"

          >
           <a
    href="#data-training"
    className="relative inline-block font-roboto text-[17px] font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
  >
    <span className="border-b-2 border-transparent pb-1 hover:border-[#8C72D0] px-1 transition-all duration-200">
      Training
    </span>
  </a>
          </button>
        </div>

        {/* Button 3 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]"

          >
           <a
    href="#about"
    className="relative inline-block font-roboto text-[17px] font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
  >
    <span className="border-b-2 border-transparent pb-1 hover:border-[#8C72D0] px-1 transition-all duration-200">
      About Us
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
      w-full h-11 px-5 rounded-[18px] border-b 
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none pr-32
      placeholder:text-[#570B974D]
      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed
      text-[#2E2C32] /* Set the input text color here */
    "
          />
          <button
            type="button"
            className="cursor-pointer
      absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px]
      bg-[#570B97] flex items-center justify-center
    "
          >
            <span
              className="
        font-roboto  text-[12px] md:text-[16px] leading-6
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
        className={`w-full
    fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out bg-gradient-to-b from-purple-50 via-white to-purple-50
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
      >
        <div className="w-full p-5 flex flex-col space-y-6 h-full overflow-y-auto">
          {/* Navigation items */}
          {[
            { label: "Our Clients", href: "#company-section" },
            { label: "Training", href: "#data-training" },
            { label: "About Us", href: "#about" },
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
          <div className="relative w-full">
  {/* Input */}
  <input
    id="email"
    type="text"
    placeholder="Enter Your Email"
    className="
      w-full h-15 px-5 pr-32 rounded-[18px] border-b border-white
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none
      placeholder:text-[#570B974D]
      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed
      text-[#2E2C32]
    "
  />
  {/* Button */}
  <button
    type="button"
    className="
      absolute top-0 right-0 h-15 w-[100px] rounded-tr-[18px] rounded-br-[18px]
      bg-[#570B97] flex items-center justify-center
      border-0
      cursor-pointer
    "
  >
    <span
      className="
        font-roboto text-[10px] text-base leading-6
        text-[#FAFAFA]
        text-center align-middle
      "
    >
      Let’s Talk
    </span>
  </button>
</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar









"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-36 px-20 py-3 bg-[#F2F0FA66] backdrop-blur-sm z-50 ">
      {/* Logo Image */}
      <Image src="/logo.png" alt="Description" width={120} height={120} />

      {/* Desktop & Tablet Menu */}
      <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl space-x-8 ">
        {/* Buttons */}
        <div className="flex space-x-2">
          <button className="py-1 px-2 rounded-[33px]">
            <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">
              Our Clients
            </span>
          </button>
          <button className="py-1 px-3 rounded-[33px]">
            <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">
              Training
            </span>
          </button>
          <button className="py-3 px-2 rounded-[33px]">
            <span className="font-roboto text-[17px] font-medium text-[#570B97] capitalize">
              About Us
            </span>
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
              text-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
              bg-transparent outline-none pr-32
              placeholder:text-[#570B974D]
              placeholder:font-roboto placeholder:text-base placeholder:font-medium
              placeholder:tracking-wide placeholder:leading-relaxed
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
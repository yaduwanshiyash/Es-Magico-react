import { useState } from 'react';
import logo from '../assets/images/Es Magico-white-01 1.png'
import arrow from '../assets/images/Map Arrow Up.png'
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-2 md:px-28 py-[14px]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            <img
              className='h-full w-[237px]'
              src={logo}
              alt="logo"
            />
          </span>
        </a>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg focus:outline-none focus:ring-2 md:hidden"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto md:flex`}
          id="mobile-menu"
        >
          <motion.ul initial={{y: '-5vw'}} animate={{y: '0vw'}} transition={{ease:'linear', duration:2}} className="flex flex-col items-center mt-4 md:flex-row md:space-x-[60px] md:mt-0 md:text-lg md:font-bold text-[DM-sans]">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:border-0 md:p-0 hover:text-gray-700"
                aria-current="page"
              >
                Domains
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:border-0 md:p-0  hover:text-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:border-0 md:p-0  hover:text-gray-700"
              >
                Magic
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 md:border-0 md:p-0  hover:text-gray-700"
              >
               Contact
              </a>
            </li>
            <li data-aos="fade-left" className='border border-[#131313] rounded-[40px] h-12 w-52 flex justify-between items-center px-2'>
              <div className='w-[26px]'></div>
              <a
                href="#"
                className="py-2 text-center flex-1 md:border-0 md:p-0  hover:text-gray-700"
              >
                CTA
              </a>
              <img
                className='w-[26px] h-[26px] cursor-pointer'
                src={arrow}
                alt="arrow"
              />
            </li>

          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

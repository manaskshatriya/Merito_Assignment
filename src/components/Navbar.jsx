import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // track state of dropdown menu

  return (
    <nav className='flex justify-between items-center mb-2 px-4 md:px-20 border shadow-sm shadow-[#FB9D0C]'>
      <div>
        <img className='h-[14vh]' src='/assets/career-corner-logo.jpg' alt='' />
      </div>

      {/* hamburger menu for tablet and smaller screens */}
      <div className='flex md:hidden'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type='button'
          className='text-gray-800 hover:text-gray-700 focus:outline-none focus:text-gray-700'
          aria-label='Toggle menu'
        >
          <FiMenu className='w-6 h-6' />
        </button>
      </div>

      {/* dropdown menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block  md:items-center md:w-auto`}
      >
        <ul className='font-semibold flex flex-col md:flex-row gap-10'>
          <li className='py-6 border-t-2 border-white hover:border-t-2 hover:border-t-[#FB9D0C]'>
            OUR PROGRAMS
          </li>
          <li className='py-6 border-t-2 border-white hover:border-t-2 hover:border-t-[#FB9D0C]'>
            OUR STORY
          </li>
          <li className='py-6 border-t-2 border-white hover:border-t-2 hover:border-t-[#FB9D0C]'>
            OUR BRANDS
          </li>
          <li className='py-6 border-t-2 border-white hover:border-t-2 hover:border-t-[#FB9D0C]'>
            SOCIAL INITIATIVES
          </li>
          <li className='py-6 border-t-2 border-white hover:border-t-2 hover:border-t-[#FB9D0C]'>
            CONTACT US
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  { name: 'Home', href: '/' },
  // { name: 'About Me', href: '#_' },
  // { name: 'My Team', href: '#_' },
  // { name: 'Classes', href: '/classes' },
  // { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <div class="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row tails-selected-element">
      <a href="/" class="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
        <span class="text-xl font-black leading-none text-gray-900 select-none logo">
          {/* <img src={logo} alt="logo" class="h-14 p-2" /> */}
          <button
            type="submit"
            class="inline-flex items-center justify-center h-10 px-6 mr-6 font-light bg-gray-900 tracking-wide text-white transition duration-200  hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            data-rounded="rounded-lg"
            data-primary="gray-900">
              <Link to="/">
              COACH DIPAN
          </Link>
            
          </button>
        </span>
      </a>
      <nav class="flex flex-wrap items-center justify-center text-base font-light tracking-tight md:ml-auto">
        {menu.map((item, index) => (
          <Link to={item.href} className="mr-5 hover:text-gray-900">
            {item.name}
          </Link>
        ))}
      </nav>
      <button
        data-rounded="rounded"
        class="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
           <Link to="/contact">
           Book Free Trail
          </Link>
        
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}

import React from 'react';
import logo from '../images/logo.png';

const menu = [
  { name: 'Home', href: '#_' },
  { name: 'About us', href: '#_' },
  { name: 'Classes', href: '#_' },
  { name: 'Gallery', href: '#_' },
  { name: 'Contact', href: '#_' },
];

export default function Header() {
  return (
    <div class="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row tails-selected-element">
      <a href="#_" class="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
        <span class="text-xl font-black leading-none text-gray-900 select-none logo grayscale">
          <img src={logo} alt="logo" class="w-10 h-10 p-2" />
        </span>
      </a>
      <nav class="flex flex-wrap items-center justify-center text-base font-light tracking-tight md:ml-auto">
        {menu.map((item, index) => (
          <a href="#_" class="mr-5 hover:text-gray-900">
            {item.name}
          </a>
        ))}
      </nav>
      <button
        data-rounded="rounded"
        class="inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
        Book Free Trail
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}

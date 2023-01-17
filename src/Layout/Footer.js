import React from 'react';

function Footer() {
  return (
    <>
      <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <p class="mt-8 text-base leading-6 text-center font-light text-gray-400">
            &copy; 2023 Coach Dipan. All rights reserved. Developed by{' '}
            <a className="italic text-gray-800 font-normal" href="https://shivamangina.com/">
              Shiva Kumar Mangina
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;

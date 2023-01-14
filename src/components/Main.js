import React from 'react';
import Hero from './hero.png';

export default function Main() {
  return (
    <>
      <section class="flex flex-col w-full overflow-hidden bg-white lg:flex-row sm:mx-auto tails-selected-element">
        <div class="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
          <div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
            {/* <p class="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200  text-xxs">Craft and build your website</p> */}
            <h5 class="font-rubix-dirt text-gray-900 mb-3 text-3xl drop-shadow-lg font-extrabold leading-none sm:text-4xl lg:text-9xl adventure-animation">DARE TO FIGHT !</h5>
            <p class="py-5 mb-5 text-gray-400 lg:text-xl font-light">
              <span class="font-bold">Our Platform</span> will help you craft and build your next idea. Utilize our drag and drop components to build the application of your
              dreams.
            </p>
            <div class="flex items-center">
              <button
                type="submit"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                data-rounded="rounded-lg"
                data-primary="gray-900">
                Get Started
                <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="relative lg:w-1/2">
          <img src={Hero} alt="Coach dipan intro" class="object-cover w-full lg:absolute h-80 lg:h-full drop-shadow-2xl border-slate-100 border-b " />
        </div>
      </section>
    </>
  );
}

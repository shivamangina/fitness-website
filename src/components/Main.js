import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../images/hero.png';

export default function Main() {
  return (
    <>
      <section class="relative w-full bg-white tails-selected-element">
        {/* container */}
        <div class="mx-auto items-center flex lg:flex-row flex-col">
          {/* Part 1 */}
          <div class="w-1/2">
            <div class="flex justify-end  bg-white lg:px-6">
              <div class="flex flex-col items-center lg:items-start justify-center w-full lg:max-w-lg ">
                <h5 class="font-rubix-dirt text-center lg:text-left break-none text-gray-900 mb-3 text-7xl drop-shadow-lg font-extrabold leading-none sm:text-9xl uppercase adventure-animation">
                  Get your fight on!
                </h5>

                <div class="flex items-center">
                  <button
                    type="submit"
                    class="inline-flex text-sm md:text-lg  items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                    data-rounded="rounded-lg"
                    data-primary="gray-900">
                    <Link to={'/contact'}>Start Your Journey</Link>

                    <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Part 2 */}
          <div class="w-full lg:w-1/2 ">
            <div class="flex justify-center  bg-white lg:pr-6 ">
              <img src={Hero} alt="Coach dipan intro" class="drop-shadow-2xl  border-slate-100 border-b" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

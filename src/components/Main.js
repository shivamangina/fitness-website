import React from 'react';
import Hero from '../images/hero.png';

export default function Main() {
  return (
    <>
      <section class="relative w-full bg-white tails-selected-element">
        <div class="max-w-full px-20  mx-auto items-center flex lg:flex-row flex-col">
          <div class="w-full lg:w-2/6">
            <div class="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10">
              <div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
                <h5 class="font-rubix-dirt text-gray-900 mb-3 text-3xl drop-shadow-lg font-extrabold leading-none sm:text-4xl lg:text-9xl uppercase adventure-animation">
                  Time To Get Fighting Fit !
                </h5>
                {/* <p class="py-5 mb-5 text-gray-400 lg:text-xl font-extralight">
                  <span class="font-bold">Personal training</span> and customised fitness programs to keep you fighting fit! Hit your fitness goals with one of the best personal
                  trainers in town.
                </p> */}
                <div class="flex items-center">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                    data-rounded="rounded-lg"
                    data-primary="gray-900">
                    Start Your Journey
                    <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/6">
          <div class="flex justify-center p-8 bg-white lg:py-32 lg:px-16 lg:pl-10">
          <img src={Hero} alt="Coach dipan intro" class="max-w-none drop-shadow-2xl h-[40rem] border-slate-100 border-b" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

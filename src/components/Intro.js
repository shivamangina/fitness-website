import React from 'react';

export default function Intro() {
  return (
    <>
      <section class="h-auto bg-white tails-selected-element">
        <div class="px-10 py-24 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:text-center">
            <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-6xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl md:tracking-tight">
              {' '}
              Hey! <span class="w-full text-transparent bg-clip-text bg-gradient-to-r  from-green-400 via-blue-500 to-purple-500 lg:inline">Follow me</span> to get to know me
              better!
              <section class="bg-white py-10 tails-selected-element">
                <div class="grid grid-cols-1 sm:grid-cols-3  gap-4 items-center">
                  <div className="flex justify-center align-middle mt-4 sm:mt-2">
                    <a href="https://www.facebook.com/deepen.rai.146" target={'_blank'}>
                      <img src="https://cdn.devdojo.com/tails/images/facebook.svg" alt="Hubspot" class="block object-contain h-9" />
                    </a>
                  </div>
                  <div className="flex justify-center align-middle mt-4 sm:mt-2">
                    <a href="https://www.youtube.com/@coachdipan9631" target={'_blank'}>
                      <img src="https://cdn.devdojo.com/tails/images/youtube.svg" alt="Youtube" class="block object-contain h-7 lg:h-8" />
                    </a>
                  </div>

                  <div className="flex justify-center align-middle mt-4 sm:mt-2">
                    {' '}
                    <a href="https://www.instagram.com/coachdipan" target={'_blank'}>
                      <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="Slack" class="block object-contain h-9 mt-3" />
                    </a>
                  </div>
                </div>
              </section>
              <span className="text-5xl font-thin"> and see what I do and how I help my clients achieve their fitness goals. </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

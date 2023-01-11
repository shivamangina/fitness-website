import React from 'react';

export default function Intro() {
  return (
    <>
      <section class="h-auto bg-white tails-selected-element">
        <div class="px-10 py-24 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:text-center">
            <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
              {' '}
              The <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-blue-500 to-green-500 lg:inline">Follow me on</span> for
              <br class="lg:block hidden" /> all your design needs.{' '}
            </h1>
            <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
              {' '}
              Say hello to the number one source for all your design needs. Drag and drop designs, edit designs, and modify the components to help tell your story.{' '}
            </p>
          </div>
        </div>
      </section>
      <section class="bg-white pb-14 tails-selected-element" >
        <div class="container px-8 mx-auto sm:px-12 lg:px-20">
          <div class="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/disney-plus.svg" alt="Disney Plus" class="block object-contain h-12" />
            </div>
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/google.svg" alt="Google" class="block object-contain h-9" />
            </div>
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/hubspot.svg" alt="Hubspot" class="block object-contain h-9" />
            </div>
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/youtube.svg" alt="Youtube" class="block object-contain h-7 lg:h-8" />
            </div>
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/slack.svg" alt="Slack" class="block object-contain h-9" />
            </div>
            <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
              <img src="https://cdn.devdojo.com/tails/images/shopify.svg" alt="Shopify" class="block object-contain h-9" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

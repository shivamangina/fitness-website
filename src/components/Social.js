import React from 'react';

function Social() {
  return (
    <>
      <section class="bg-white pb-14 tails-selected-element">
        <div class="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 class="text-lg font-bold tracking-wide text-center text-gray-800 uppercase mb-7">BOX. by top-leading Medias.</h1>
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

export default Social;

import React from 'react';

export default function About() {
  return (
    <section
      class="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen tails-selected-element"
      >
      <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
          <h1
            class="relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left"
            data-primary="purple-500">
            <span class="mt-1 text-gray-800 lg:mt-0">Dipan Kumar</span>
          </h1>
          <p class="relative z-20 block mt-6 text-base font-light text-gray-500 xl:text-xl sm:text-center lg:text-left">
            We've crafted the ultimate tool that helps you build the design of your dreams. Built with configuration in mind, you can fully customize
            every aspect. I'm here to give you the tools you need to build your dream physique, crush your goals and conquer your mindset. After
            spending over 12 years in the fitness industry and achieving my own transformation, I've learnt that fitness is a lifestyle...NOT a
            temporary fix.
            <br /> <br /> There are no shortcuts when it comes to achieving anything extraordinary. You have to be prepared to work hard and believe
            in yourself no matter how hard it gets. But if you promise to give it your all, I'll meet you halfway and help you reach your goals.
            Period. I stand behind my products 100% and by the time you get your hands on them, they've been tasted and tested hundreds of times for
            flavor, consistency and most importantly RESULTS.
            <br /> <br /> I know my supplements aren't the cheapest but they are the best. After all, this is your life, how can you not invest in
            that?
          </p>
        </div>
        <div class="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
          <div class="relative overflow-hidden rounded- cursor-pointer group" data-rounded="rounded-md" data-rounded-max="rounded-full">
            <img
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="z-10 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

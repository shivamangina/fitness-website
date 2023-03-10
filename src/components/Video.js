import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <section class="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen tails-selected-element">
        <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
          <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 class="relative z-20 text-5xl font-extrabold leading-none text-gray-400 xl:text-6xl sm:text-center lg:text-left" data-primary="purple-500">
              Designed with
              <br />
              <span class="mt-1 text-gray-800 lg:mt-0">You in Mind</span>
            </h1>
            <p class="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left font-light">
              My personal training philosophy revolves around creating tailor-made workouts keeping your individual needs in mind. Whether you’re a working professional, an
              athlete, a stay-at-home parent, or a college student, I will ensure our workouts keep up with your lifestyle.
            </p>
            <div class="relative flex mt-4">
              <a
                href="https://www.youtube.com/@coachdipan9631"
                onClickCapture={() =>
                  this.props.ReactGA.event({
                    category: 'Video',
                    action: 'Link Click',
                    label: 'Youtube',
                  })
                }
                class="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-red-500 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full  lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-gray-400 focus:outline-none md:text-lg xl:text-xl"
                data-primary="purple-500"
                data-rounded="rounded-full">
                <svg class="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-500" data-primary="red-600">
                  Youtube
                </span>
              </a>
            </div>
          </div>
          <div class="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
            <div class="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
              <svg class="w-full h-full ml-4 text-purple-100" data-primary="purple-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z"
                  transform="translate(100 100)"
                  class=""></path>
              </svg>
            </div>
            <div className="relative overflow-hidden w-full pt-[56.25%]">
              <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" src="https://www.youtube.com/embed/9GS_p2UJA-I"></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

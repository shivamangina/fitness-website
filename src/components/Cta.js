import React, { Component } from 'react';

export default class Cta extends Component {
  state = {};

  render() {
    return (
      <section class="tails-selected-element">
        <div class="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="mb-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight sm:text-center text-left text-gray-900 poppins">
              Start your free trial today
            </h2>
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
              
            </label>
            <p class="mb-3 sm:mb-8 font-normal text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg sm:text-center poppins text-left">
              Start crafting the landing page of your dreams. No credit card required.
            </p>
            <a
              onClick={() => this.submitEmail(this.state.email)}
              href="#_"
              class="text-white sm:w-auto w-full block sm:inline-block bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-purple-300 poppins font-bold  text-sm px-5 py-3 mr-2 mb-2 focus:outline-none dark:focus:ring-gray-800">
              Book Free Trail
            </a>
          </div>
        </div>
      </section>
    );
  }
}

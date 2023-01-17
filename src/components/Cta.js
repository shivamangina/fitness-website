import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cta extends Component {
  state = {};

  render() {
    return (
      <section class="tails-selected-element">
        <div class="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="mb-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight sm:text-center text-left text-gray-900 poppins">
              The secret of getting ahead is getting started
            </h2>
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
            </label>
            <p class="mb-3 sm:mb-8 font-light text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg sm:text-center poppins text-left">
              Your goal is just a few steps away.
            </p>
            <a
              onClick={() => this.submitEmail(this.state.email)}
              href="#_"
              class="sm:w-auto w-full block sm:inline-block text-slate-900 bg-white border-2 border-slate-500 hover:bg-gray-50 focus:ring-4 focus:ring-purple-300 poppins font-bold  text-sm px-5 py-3 mr-2 mb-2 focus:outline-none dark:focus:ring-gray-800">
              <Link to="/contact">Book Free Trail</Link>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

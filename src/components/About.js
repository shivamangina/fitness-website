import React from 'react';
import AboutPic from '../images/aboutpic.jpeg';

export default function About() {
  return (
    <section class="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen tails-selected-element">
      <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 items-start lg:items-start lg:mb-0">
          <p
            class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-left lg:items-left"
            data-primary="purple-500">
            i am
          </p>
          <h1 class="relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl  text-left sm:text-start" data-primary="purple-500">
            <span class="mt-1 text-gray-800 lg:mt-0">Dipan Rai</span>
          </h1>
          <p class="relative z-20 block mt-6 text-base font-light text-gray-500 xl:text-md sm:text-center lg:text-left">
            If you’ve scrolled this far I think it’s only fair that I tell you a little bit about myself. My name is Dipan Rai and boxing has been a part of my life since I was a
            young child running around the streets of my hometown. Since I started training I have competed in numerous tournaments in India. As I grew older, my passion for boxing
            quickly transformed into not just training and competing but also teaching more people the art of the science.rs reach their full potential and achieve their goals.
            <br /> <br />
            I currently reside in Bangalore with my dog Enzo. Over the past 7 years I have been working as a senior trainer at Rox Boxing Gym in Bangalore. I’ve also worked with
            individual clients as a private coach and personal trainer. I have strived to provide all my students with the best training methods and techniques that I have picked
            up over the years as an athlete and as a coach. I do not have a one size fits all fitness or training plan. With me as your trainer you can expect a personalised
            workout plan that is built to fit your lifestyle and designed to help you achieve your fitness goals with ease.
            <br /> <br /> There are no shortcuts when it comes to achieving anything extraordinary. You have to be prepared to work hard and believe in yourself no matter how
            difficult it gets. But if you promise to give it your all, I'll meet you halfway and help you reach your goals.
            <br /> <br /> See you in the training.
          </p>
        </div>
        <div class="relative w-full px-5 rounded-lg cursor-pointer lg:w-2/5 group xl:px-0">
          <div class="relative overflow-hidden rounded- cursor-pointer group" data-rounded="rounded-md" data-rounded-max="rounded-full">
            <img src={AboutPic} alt="Coach dipan about me" class="z-10 object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

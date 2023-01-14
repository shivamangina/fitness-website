import React from 'react';

export default function Gallery() {
  return (
    <section id='gallery' class="h-[640px] bg-white tails-selected-element" contenteditable="true">
      <div class="max-w-7xl px-5 py-20 flex space-x-5 w-full h-full items-center justify-center mx-auto">
        <div class="flex h-full w-full bg-gray-300 rounded-md"></div>
        <div class="flex h-full w-full bg-gray-300 rounded-md"></div>
        <div class="flex h-full w-full bg-gray-300 rounded-md"></div>
        <div class="flex h-full w-full bg-gray-300 rounded-md"></div>
      </div>
    </section>
  );
}

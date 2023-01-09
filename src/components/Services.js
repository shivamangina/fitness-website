import React from 'react';


const trendingProducts = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  
];



export default function Example() {
  

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
            <h2 id="collection-heading" className="sr-only">
              Collections
            </h2>
            <section aria-labelledby="trending-heading">
              <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
                <div className="md:flex md:items-center md:justify-between">
                  {/* <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                    Trending Products
                  </h2> */}
                  <a href="#" className="hidden text-sm font-medium text-black-600 hover:text-indigo-500 md:block">
                    View all<span aria-hidden="true"> &rarr;</span>
                   
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                  {trendingProducts.map((product) => (
                    <div key={product.id} className="group relative">
                      <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                        <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-sm md:hidden">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Shop the collection
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

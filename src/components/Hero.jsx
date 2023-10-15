import React from 'react';

export default function Hero() {
  return (
    <div id='home' className="hero flex justify-center items-center">
      <div className='md:text-center p-4 mt-16'>
        <h1 className="text-white text-5xl py-3">Grow Your Finances</h1>
        <h2 className="text-white text-2xl">
          Take control of your financial future with our funded account <br />{' '}
          services.
        </h2>
      </div>
    </div>
  );
}

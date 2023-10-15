import React from 'react';

export default function Hero() {
  return (
    <div id='home' className="hero flex justify-center items-center">
      <div className='text-center p-2'>
        <h1 className="text-white text-7xl">Grow Your Finances</h1>
        <h2 className="text-white text-3xl py-6">
          Take control of your financial future with our funded account <br />{' '}
          services.
        </h2>
      </div>
    </div>
  );
}

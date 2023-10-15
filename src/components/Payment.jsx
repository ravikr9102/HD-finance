import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSub from './HeaderSub';

export default function Payment() {
  return (
    <section className="bg-sky-900 h-screen">
      <HeaderSub />
      <div className="p-8">
        <div className="flex justify-center items-center py-2">
          <Link className="bg-slate-300 py-1 px-4 rounded-full" to="/">
            Back
          </Link>
        </div>
        <h1 className="text-center text-white text-2xl">Make a Pyment!</h1>
        <div className="flex justify-center items-center pt-5">
          <figure>
            <img src="/assets/Payment.jpeg" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

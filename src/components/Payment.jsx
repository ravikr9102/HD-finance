import React from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <body style={{backgroundColor:"rgb(12 74 110)", height:"auto"}}>
    <section className="p-10">
      <div className="flex justify-center items-center py-2">
        <Link className="bg-slate-300 py-1 px-4 rounded-full" to="/">
          Back
        </Link>
      </div>
      <h1 className="text-center" style={{color:"white",fontSize:"22px"}}>Make a Pyment!</h1>
      <div className='center'>
      <figure>
      <img src="/src/assets/payment.jpeg" alt=""/>
      </figure>
      </div>
    </section>
    </body>
  );
}

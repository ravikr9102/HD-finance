import React from 'react';

export default function Contact() {
  return (
    <section className='p-10 py-20 bg-sky-900'>
      <div className="grid grid-cols-2 gap-5 ">
        <form>
          <input className="mr-2 mt-8 py-2 px-6 rounded" placeholder="Enter your name!" />

          <input className="py-2 rounded px-6" placeholder="Enter your email!" />

          <textarea className="rounded px-40 py-4 mt-5 text-left" placeholder='Enter your message!' />
          <div className='text-right mr-14 mt-4'><button className='border border-white py-1 px-10 rounded text-white bg-cyan-700'>Send</button></div>
          
        </form>
        <div className="text-base mt-7">
          <h2 className="text-4xl text-center  font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Contact Us</strong>
            Now
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
            Complete the form below to get in touch with us. answer any
            questions you may have and provided for your funded account
          </p>
        </div>
      </div>
    </section>
  );
}

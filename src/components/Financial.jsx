import React from 'react';

export default function Financial() {
  return (
    <section> 
      <div className="grid md:grid-cols-2 gap-5 p-10  bg-sky-900">
        <div className="text-base px-5  md:px-0">
          <h2 className="text-4xl text-center pt-24 font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Financial Planning</strong>Services
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
           Ensure the financial stability of your funded account with our professional finacial planning services. We Provide customized financial strategies that meet your unique needs and goals, helping you grow your account and achieve long term success.
          </p>
        </div>
        <figure className="p-2 flex justify-center items-center">
          <img
            className="rounded"
            src="/assets/photo-1553729459-efe14ef6055d.avif"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}

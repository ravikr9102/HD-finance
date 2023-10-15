import React from 'react';

export default function Creation() {
  return (
    <section className="md:p-10 p-5 bg-sky-900">
      <div className="grid md:grid-cols-2 gap-5">
        <figure className="p-2 flex justify-center items-center">
          <img
            className="rounded"
            src="/assets/photo-1611784728558-6c7d9b409cdf.avif"
            alt=""
          />
        </figure>
        <div className="text-base md:px-5">
          <h2 className="text-4xl text-center pt-24 font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Content Creation</strong>
            Strategy
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
            Boost your online presence with compelling and targeted content. Our
            team of expert content creators will develop a tailored strategy to
            engage your audience and drive traffic to your website, resulting in
            increased brand awareness and conversions.
          </p>
        </div>
      </div>
    </section>
  );
}

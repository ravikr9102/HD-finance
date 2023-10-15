import React from 'react';

export default function Social() {
  return (
    <section className="md:p-10 p-2 bg-sky-900">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="text-base md:px-5">
          <h2 className="text-4xl text-center pt-24 font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Social-Media</strong>
            Management
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
            Maximize your online presence with our comprehensive social media
            management services. We will create engaging content, schedule
            posts, and monitor your accounts to help you connect with your
            audience and build brand royalty.
          </p>
        </div>
        <figure className="p-2 flex justify-center items-center">
          <img
            className="rounded"
            src="/assets/photo-1519389950473-47ba0277781c.avif"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}

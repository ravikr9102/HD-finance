import React from 'react';

export default function Social() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 p-10  bg-sky-900">
        <div className="text-base px-5  md:px-0">
          <h2 className="text-4xl text-center pt-24 font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Social Media</strong>Management
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
            Maximize your online presence with our comprehensive social media management services. We will create engaging content, schedule posts, and monitor your accounts to help you connect with your audience and build brand royalty.
          </p>
        </div>
        <figure className="p-2 flex justify-center items-center">
          <img
            className="object-cover w-80 h-80 w-96 h-96 rounded"
            src="/src/assets/photo-1519389950473-47ba0277781c.avif"
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}

import React from 'react';

export default function Service() {
  return (
    <section id="Service" className="p-10 bg-sky-900">
      <h2 className="text-4xl text-center py-4 font-semibold text-slate-200 ">Services</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className='relative'>
          <figure>
            <img src="/src/assets/photo-1620912189865-1e8a33da4c5e.avif" />
          </figure>
          <div className='bg-slate-600 bg-opacity-75 absolute top-40 bottom-0 p-2'>
            <h2 className="text-center text-2xl text-slate-100">Logo Design</h2>
            <p className="text-center text-sm text-white text-slate-100">
              Create a unique and impactful logo that represents your brand
              effectively
            </p>
          </div>
        </div>
        <div className='relative'>
          <figure>
            <img src="/src/assets/photo-1467232004584-a241de8bcf5d.avif" />
          </figure>
          <div className='bg-slate-600 bg-opacity-75 absolute top-40 bottom-0 p-2'>
            <h2 className="text-center text-2xl text-slate-100">Website Development</h2>
            <p className="text-center text-sm text-slate-100">
              Build a professional and user-friendly Website tailored to your
              business
            </p>
          </div>
        </div>
        <div className='relative'>
          <figure>
            <img src="/src/assets/photo-1611926653458-09294b3142bf.avif" />
          </figure>
          <div className='bg-slate-600 bg-opacity-75 absolute top-40 bottom-0 p-2'>
            <h2 className="text-center text-2xl text-slate-100">Digital Marketing</h2>
            <p className="text-center text-sm text-slate-100">
              Grow your online presence and reach your target audience through
              effective digital marketing strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

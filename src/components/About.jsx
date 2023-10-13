import React from 'react'

export default function About() {
  return (
    <section id="About">
       <div className="grid grid-cols-2 gap-5 p-10  bg-sky-900">
        <div className="text-base px-5 mt-10">
          <h2 className="text-4xl text-center py-4 font-semibold">
            {' '}
            <strong className="m-2 text-slate-100">About</strong>Us
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider">
            {' '}
            Welcome to HD Finance, your trusted partner in funded accout services. Based in Kanpur,UP. We are dedicated to providing top-notch financial solutions to individuals and businesses alike.
          </p>
          <p className="text-slate-200 py-3 leading-relaxed tracking-wider">
            With our extensive expertise and commitment to excellence, we strive to deliver tailored funding options that meet your unique needs. Whether you are looking to start a new venture or expand your existing business, our team of professionals is here to guide you every step of the way. Trust HD finance for reliable and efficient funded account services.
          </p>
        </div>
        <figure
          className="p-2 flex justify-center items-center"
        >
          <img 
            className="object-cover w-80 h-80 w-96 h-96 rounded"
            src="/src/assets/photo-1560472355-536de3962603.avif"
            alt=""
          />
        </figure>
      </div>
    </section>
  )
}

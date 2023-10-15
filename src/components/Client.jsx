import React from 'react';

export default function Client() {
  return (
    <section className="p-10 bg-sky-900">
      <h2 className="text-4xl text-center py-4 font-semibold text-slate-200">
        Clients
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <figure>
          <img
            className="rounded"
            src="/assets/photo-1557426272-fc759fdf7a8d.avif"
          />
        </figure>
        <figure>
          <img
            className="rounded"
            src="/assets/photo-1590650516494-0c8e4a4dd67e.avif"
          />
        </figure>
        <figure>
          <img
            className="rounded"
            src="/assets/photo-1557425529-b1ae9c141e7d.avif"
          />
        </figure>
      </div>
    </section>
  );
}

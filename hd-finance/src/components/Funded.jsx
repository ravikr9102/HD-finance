import React from 'react'
import { Link } from 'react-router-dom'

export default function Funded() {
  return (
    <section className='p-10'>
    <div className="flex justify-center items-center py-2">
        <Link className='bg-slate-300 py-1 px-4 rounded-full' to="/">
          Back
        </Link>
      </div>
      <h1 className='text-center'>This is Funded Page!</h1>
    </section>
  )
}

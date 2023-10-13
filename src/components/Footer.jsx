import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <section>
       <div className="flex justify-between items-center px-8 py-12 bg-sky-600 text-white">
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl">HD finance</h1>
      </div>
      <ul className="flex justify-center items-center">
        <li className="mr-6 text-xl">
          <BsInstagram />
        </li>
        <li className="mr-6 text-xl">
          <BiLogoGmail />
        </li>
        <li className="mr-6 text-xl">
          <BsTwitter />
        </li>
      </ul>
    </div>
    </section>
  )
}

import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';

export default function Footer() {
  return (
    <section>
      <div className="flex justify-between items-center px-8 py-12 bg-sky-600 text-white">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">HD finance</h1>
        </div>
        <ul className="flex justify-center items-center">
          <li className="mr-6 text-3xl">
          <a href="mailto:hdfinance2020@gmail.com">
            {' '}
            <BiLogoGmail />
          </a>
        </li>
        </ul>
      </div>
    </section>
  );
}

import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

function HeaderSub() {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white">
        <Link to='/'>
          <h1 className="text-2xl">HD Finance</h1>
        </Link>
        <ul className="flex justify-center items-center">
          <Link to="/display">
            <li className="mr-8">Message</li>
          </Link>
          <Link to="/funded">
            <li className="mr-8">Funded</li>
          </Link>
          <Link to="/payment">
            <li className="mr-8">Payment</li>
          </Link>
        </ul>

        <ul className="flex justify-center items-center">
          <li className="mr-6 text-xl">
            <a href="mailto:hdfinance2020@gmail.com">
              {' '}
              <BiLogoGmail />
            </a>
          </li>
          <li className="mr-6 text-xl flex justify-center items-center">
            <AiOutlineUser />
            <p style={{ fontSize: '15px' }}>15k+</p>
          </li>
          <li className="flex justify-center items-center">
            <FaWhatsapp />
            <p>+7355583373</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderSub;

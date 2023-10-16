import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function HeaderSub() {
  let [toggleMenu, setToggleMenu] = useState(false);
  const revertToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="md:flex md:justify-between md:items-center md:px-8 px-4 w-full  py-1 fixed backdrop-blur-sm bg-white/20 ...">
      <div className="flex justify-between items-center">
        <strong className="text-3xl text-white flex justify-center items-center">
          <NavHashLink to={'/#home'}>HD Finance</NavHashLink>
        </strong>
        <div>
          {toggleMenu ? (
            <RxCross1 onClick={revertToggle} className="text-3xl text-white" />
          ) : (
            <RxHamburgerMenu
              className="md:hidden block text-3xl text-white"
              onClick={revertToggle}
            />
          )}
        </div>
      </div>
      <nav>
        <ul
          className={`md:flex md:items-center text-base text-green-500 md:text-white  z-[-1] md:z-auto md:static absolute right-0 left-64 w-3/5 my-2 ${
            toggleMenu ? '' : 'bottom-20'
          }`}
        >
          <li className="m-3 md:mx-5 hover:text-blue-500">
            <Link to="/display">Message</Link>
            <NavHashLink to={'/#skill'}></NavHashLink>
          </li>
          <li className="m-3 md:mx-5 hover:text-blue-500">
            <Link to="/funded">Funded</Link>
          </li>
          <li className="m-3 md:mx-5 pr-32 md:pr-0 hover:text-blue-500 flex justify-center items-center cursor-pointer">
            <AiOutlineUser />
            15k+
          </li>
          <a rel="noreferrer" target="_blank" href="tel:+91 7355583373">
            <li className="m-3 md:mx-5 pr-32 md:pr-0 hover:text-blue-500 flex justify-center items-center cursor-pointer">
              <BsFillTelephoneFill />
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

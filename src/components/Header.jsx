import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import {AiOutlineUser} from "react-icons/ai"
import {Link} from "react-router-dom"
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-7 bg-black text-white">
      <div>
        <h1 className="text-2xl">HD finance</h1>
      </div>
      <ul className="flex justify-center items-center">
       
        <li className="mr-8"> <a href='#About'>About  </a></li>
        <li className="mr-8"> <a href="#Service">Services </a></li>
        <li className="mr-8"><a href="#Contact">Contact</a></li>
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
        <a href="mailto:hdfinance2020@gmail.com">  <BiLogoGmail /></a>
        
        </li>
        <li className="mr-6 text-xl">
        <AiOutlineUser/><p style={{fontSize:"15px"}}>15k+</p>
        </li>
        <li><FaWhatsapp/> + 7355583373</li>
      </ul>
    </div>
  );
}

import React from 'react';
import {Logoblack} from '../assets';
import { FaFacebook, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

const socailsLink=[
  {
    icon:<FaYoutubeSquare/>,
    url:`https://www.youtube.com/@ztartvisa`
  },

  {
    icon:<FaXTwitter/>,
    url:`https://x.com/ztartvisa/status/1772161296835936545`
  },
  {
    icon:<FaLinkedin/>,
    url:`https://www.linkedin.com/company/ztartvisa/?originalSubdomain=ae`
  },
  {
    icon:<FaInstagram/>,
    url:`https://www.instagram.com/ztartvisa`
  },
]

const pagesLinks=[
  {
    title:`Home`,
    url:`#`
  },
  {
    title:`About`,
    url:`#`
  },
  {
    title:`Services`,
    url:`#`
  },
  {
    title:`Blog`,
    url:`#`
  },
  {
    title:`Contact`,
    url:`#`
  },
]

const Footer = () => {
  return (
    <footer className=''>
        <div className='w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 py-10 border-t'>
          <div className='flex flex-col gap-3'>
            <img className='h-16 w-32 xl:h-24 xl:w-44 object-contain' src={Logoblack} alt="" />
            <p className='text-gray-600 text-sm xl:text-base'>Heera Corporate, we know what it’s like<br/> to have a frequent travel team on board. </p>
            <div className='flex gap-5 text-2xl mt-3'>
                {socailsLink?.map((soc,i)=>(
                  <a className='hover:-translate-y-1 duration-200 hover:text-mainhvr' href={soc.url} key={i} target='_blank'>{soc.icon}</a>
                ))}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10'>
            <div>
                <p className='text-xl font-medium'>Pages</p>
                <ul className='mt-2 xl:mt-5  flex flex-col'>
                  {pagesLinks?.map((p,i)=>(
                    <Link className='hover:text-mainhvr duration-150' to={p.url}>{p.title}</Link>
                  ))}
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium'>Get in Touch</p>
               <div>
                <p className='text-sm mt-2 xl:mt-5 mb-2'>Office, 305, Al Reem Tower,<br/> Al Majaz 1, Sharjah,<br/> United Arab Emirates.</p>
                <div className='flex gap-3 items-center '>
                      <MdLocalPhone/>
                      <a href='tel:04 528 2118'>04 528 2118</a>
                  </div>
                {/* <div className='flex gap-3 items-center  '>
                      <MdLocalPhone/>
                      <a>+91 000 000 0000</a>
                  </div> */}
               </div>
            </div>
          </div>
        </div>
        <div className='w-11/12 xl:w-10/12 mx-auto border-t text-xs md:text-sm flex flex-col md:flex-row justify-center items-center py-5'>
            <p>Copyright © 2025 Heera Corporate</p>
            {/* <a href='https://dostudio.co.in' target='_blank' className='hover:text-mainhvr'>Powered by DO Studio</a> */}
        </div>
    </footer>
  )
}

export default Footer
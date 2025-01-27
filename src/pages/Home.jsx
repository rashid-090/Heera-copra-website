import React from 'react';
import {bannerImg,heeraAbt,heeraWhy,blobshape,LogoFav} from '../assets';
import {Faq,Form} from '../components'
import { MdOutlineVerified } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Marquee from "react-fast-marquee";
import pricing from '../assets/images/svg/Upfront pricing.svg'
import portal from '../assets/images/svg/User friendly portal.svg'
import experts from '../assets/images/svg/Personalized visa experts.svg'
import Prompt from '../assets/images/svg/Prompt processing.svg'
import visaexpertise from '../assets/images/svg/Proven visa expertise.svg'
import billingsystem from '../assets/images/svg/Unified billing system.svg'


const Home = () => {
  return (
    <>
    <section className='bg-home-bg bg-cover bg-center text-white h-screen overflow-hidden relative' >
        <div className='absolute bg-[#00000091] w-full h-full z-0'></div>
        <div className='w-11/12 xl:w-10/12 mx-auto pt-40 py-10  h-full z-10 relative grid grid-cols-1 gap-10 gap-x-10'>
           <div className='h-full w-full flex flex-col justify-center gap-3 xl:gap-5 xl:pt-14 xl:w-[65%]'>
                <h1 className='text-3xl xl:text-6xl font-semibold xl:font-medium capitalize'>Global Visa Simplified<br/> for Professionals.</h1>
                <p className='xl:pr-32 text-sm 2xl:text-base font-light md:font-normal tracking-tight xl:text-justify'>Simplify visa processing with our streamlined services. We save your team time and effort, making global travel hassle-free so you can focus on what matters most.</p>
                <button className='border border-mainhvr text-white bg-mainhvr  duration-150 w-fit rounded-xl hover:text-white px-5 py-2 font-medium'><a href="#cform">Get in Touch</a></button>
           </div>
       
        </div>
    </section>
    <section className='bg-white text-black'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 xl:grid-cols-2 gap-10'>
            <div className='hidden md:block'>
                <img className='object-cover h-full md:h-80 xl:h-full w-full shadow-xl rounded-xl' loading='lazy' src={heeraAbt} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-mainhvr text-sm tracking-widest'>ABOUT US</p>
                <h2 className='text-xl sm:text-2xl font-medium capitalize'>Heera Corporates offers reliable, easy visa solutions for businesses and professionals.</h2>
                <p className='text-gray-600 text-sm   text-justify'>Heera Corporates takes the stress out of visa management for businesses. We offer fast, reliable, and simple visa solutions for business trips, assignments, and relocations. Our expert team handles all the paperwork and navigates the complex visa process, ensuring a smooth and hassle-free experience. With Heera Corporates, you can save time, reduce risk, and stay focused on achieving your business goals.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Personalized Support</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Global Expertise</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Efficient Processing</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Reliable Solutions</p>
                    </div>
                </div>
                <button className='mt-3 border border-black hover:border-mainhvr text-black hover:bg-mainhvr  duration-150 w-fit hover:text-white px-5 rounded-xl py-2  font-medium'><a href="#cform">Learn more</a></button>

            </div>
        </div>
    </section>
    <section className='bg-gradient-to-r from-mainhvr to-red-400 text-white'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 gap-10 gap-x-10'>
            <div className='flex flex-col  gap-3 '>
                <p className=' tracking-widest text-sm'>WHY CHOOSE US</p>
                <h2 className='text-xl sm:text-2xl font-medium capitalize'>We specialize in corporate visa solutions in the UAE, offering quick, reliable, and personalized support tailored to your business needs.</h2>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 mt-3'>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={pricing} alt="" /> 
                        <div>
                            <p className='text-base xl:text-lg font-medium '>Upfront pricing</p>
                            <p className='text-sm font-light'> Flat rate transparency with no hidden charges.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={portal} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '>Hassle-Free Experience</p>
                            <p className='text-sm font-light'>Simplifying the entire visa journey from start to finish, so your team can focus on their work.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={experts} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '>Personalized visa experts</p>
                            <p className='text-sm font-light'>Dedicated end-to-end support with real-time status updates.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={Prompt} alt="" />
                       <div>
                            <p className='text-base xl:text-lg font-medium '> Prompt processing</p>
                            <p className='text-sm font-light'> Reliable delivery and easy Dubai Business visa processing time.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={visaexpertise} alt="" />
                       <div>
                             <p className='text-base xl:text-lg font-medium '> Proven visa expertise</p>
                            <p className='text-sm font-light'> Navigating complex visa processes with ease.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={billingsystem} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '>Urgent Appointment</p>
                            <p className='text-sm font-light'>Fast-track visa services for time-sensitive corporate needs.</p>
                        </div>
                    </div>
                   
                </div>
                <div className='flex flex-col gap-3 md:hidden'>
                    <Marquee pauseOnHover>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={pricing} alt="" /> 
                        <div>
                            <p className='text-sm xl:text-lg font-medium '>Upfront pricing</p>
                            <p className='text-xs md:text-sm'>Flat rate transparency with no hidden charges.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={portal} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '>Hassle-Free Experience</p>
                            <p className='text-xs md:text-sm'>Simplifying the entire visa journey from start to finish, so your team can focus on their work.</p>
                        </div>
                    </div>
                   
                    </Marquee>
                    <Marquee pauseOnHover direction='right'>
                 
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={experts} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '> Personalized visa experts</p>
                            <p className='text-xs md:text-sm'>Dedicated end-to-end support with real-time status updates.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={Prompt} alt="" />
                       <div>
                            <p className='text-sm xl:text-lg font-medium '> Prompt processing</p>
                            <p className='text-xs md:text-sm'>Reliable delivery and easy Dubai Business visa processing time.</p>
                       </div>
                    </div>
                    
                    </Marquee>
                    <Marquee pauseOnHover>
                   
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={visaexpertise} alt="" />
                       <div>
                             <p className='text-sm xl:text-lg font-medium '> Proven visa expertise</p>
                            <p className='text-xs md:text-sm'>Navigating complex visa processes with ease.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={billingsystem} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '>Urgent Appointment</p>
                            <p className='text-xs md:text-sm'>Fast-track visa services for time-sensitive corporate needs.</p>
                        </div>
                    </div>
                    </Marquee>
                </div>

            </div>
          
        </div>
    </section>
    <section className=''>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 xl:grid-cols-2 gap-5 gap-x-20'>
           <div className='h-full flex flex-col gap-3 justify-center'>
                <h2 className='text-xl sm:text-3xl font-medium capitalize'>Frequently Asked<br/> Questions</h2>
                <p className='text-gray-600 text-sm'>Got questions? Find the answers to common inquiries about our visa services and how we can help your business.</p>
           </div>
            <div className=''>
                <Faq/>
            </div>
        </div>
    </section>
    <section className='bg-gradient-to-r from-red-400 to-mainhvr text-white overflow-hidden relative'>
        {/* <img className='absolute -translate-y-[50%] top-[50%] right-0 z-0 h-80 opacity-25' src={LogoFav} alt="" /> */}
        <img className='absolute -translate-y-[50%] top-[50%] left-0 z-0 h-80 opacity-20' src={LogoFav} alt="" />
        <div className='w-11/12 z-10 relative xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col gap-3 justify-center items-center text-center'>
                <h2 className='text-4xl xl:text-7xl font-medium capitalize'>Experience the Heera Corporate Difference</h2>
                <p className='xl:w-[65%] text-sm md:text-base'>Heera Corporates provides fast, tailored visa solutions designed to meet your business needs. Whether it's securing urgent appointments or ensuring smooth processing, we take care of everything to keep your professionals on track and your business moving forward without the hassle or delays.</p>
                <button className='mt-5 border border-white  hover:bg-white  duration-150 w-fit hover:text-mainhvr px-5 rounded-xl py-2  font-medium capitalize'><a href="#cform">apply visa now</a></button>

        </div>
    </section>
    <section id='cform'>
        <Form/>
      
    </section>
    </>
  )
}

export default Home
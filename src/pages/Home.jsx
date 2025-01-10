import React from 'react';
import {bannerImg,heeraAbt,heeraWhy,blobshape,LogoFav} from '../assets';
import {Faq} from '../components'
import { MdOutlineVerified } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import pricing from '../assets/images/svg/Upfront pricing.svg'
import portal from '../assets/images/svg/User friendly portal.svg'
import experts from '../assets/images/svg/Personalized visa experts.svg'
import Prompt from '../assets/images/svg/Prompt processing.svg'
import visaexpertise from '../assets/images/svg/Proven visa expertise.svg'
import billingsystem from '../assets/images/svg/Unified billing system.svg'


const Home = () => {
  return (
    <>
    <section className='bg-mainclr text-white h-full xl:h-[90vh] mt-16 xl:mt-20 overflow-hidden'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 h-full grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-10'>
           <div className='h-full w-full flex flex-col justify-center gap-3 xl:gap-5'>
                <h1 className='text-3xl xl:text-5xl font-medium capitalize'>Business Visa from Dubai made simple</h1>
                <p className='xl:pr-32 text-base tracking-tight text-justify'>Leveraging a global network of expertise, we ensure effortless relocations worldwide for thousands of corporations by simplifying your Business visa from Dubai processes for employees both individually and as a team.</p>
                <button className='border border-mainhvr text-white bg-mainhvr  duration-150 w-fit rounded-xl hover:text-white px-5 py-2 font-medium'>Get in Touch</button>
           </div>
           <div className='flex flex-col items-center justify-start md:justify-center h-fit xl:h-full relative '>
          
                <img loading='lazy' className='z-10 rounded-3xl xl:rounded-[3rem]  shadow-2xl h-[200px] w-full xl:h-[350px] md:w-fit object-cover' src={bannerImg} alt="banner" />
           </div>
        </div>
    </section>
    <section className='bg-white text-black'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <img className='object-cover h-full w-full' loading='lazy' src={heeraAbt} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-mainhvr l tracking-widest'>ABOUT US</p>
                <h2 className='text-2xl xl:text-4xl font-medium capitalize'>Making corporate global mobility simple, fast, and reliable</h2>
                <p className='text-gray-600 text-base text-justify'>At Heera Corporate, we know what it’s like to have a frequent travel team on board. Boasting an international network of companies, we ensure a flawless Dubai Business visa processing for businesses of all sizes to smoothly transition and relocate personal to their global branches.</p>
                <p className='text-gray-600 text-base text-justify'>Our experts handle the complexities of requirements of your Business visa from Dubai, so that you can focus on what’s important in growing your business worldwide.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineVerified className='text-3xl text-mainhvr'/>
                        <p>Assisted visa applications</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineVerified className='text-3xl text-mainhvr'/>
                        <p>Streamlined work permit processing</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineVerified className='text-3xl text-mainhvr'/>
                        <p>Automated and timely approach</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineVerified className='text-3xl text-mainhvr'/>
                        <p>Personalized support</p>
                    </div>
                </div>
                <button className='mt-5 border border-black hover:border-mainhvr text-black hover:bg-mainhvr  duration-150 w-fit hover:text-white px-5 rounded-xl py-2  font-medium'>Learn more</button>

            </div>
        </div>
    </section>
    <section className='bg-gradient-to-r from-mainhvr to-red-400 text-white'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 gap-10 gap-x-10'>
            <div className='flex flex-col  gap-3 '>
                <p className=' tracking-widest'>WHY CHOOSE US</p>
                <h2 className='text-2xl xl:text-4xl font-medium capitalize'>Experience the Heera Corporate<br/> difference with stress-free Business visa from Dubai.</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-5'>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={pricing} alt="" /> 
                        <div>
                            <p className='text-base xl:text-lg font-medium '>Upfront pricing</p>
                            <p className=''> Flat rate transparency with no hidden charges.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={portal} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '> User friendly portal</p>
                            <p className=''> Simple online account management of your Dubai Business visa applications.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={experts} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '> Personalized visa experts</p>
                            <p className=''> Dedicated end-to-end support with real-time status updates.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={Prompt} alt="" />
                       <div>
                            <p className='text-base xl:text-lg font-medium '> Prompt processing</p>
                            <p className=''> Reliable delivery and easy Dubai Business visa processing time.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={visaexpertise} alt="" />
                       <div>
                             <p className='text-base xl:text-lg font-medium '> Proven visa expertise</p>
                            <p className=''> Navigating complex visa processes with ease.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3'>
                        <img className='h-10 w-10 object-cover' src={billingsystem} alt="" />
                        <div>
                            <p className='text-base xl:text-lg font-medium '> Unified billing system</p>
                            <p className=''> Simplified and accessible payments from Business visa services in Dubai.</p>
                        </div>
                    </div>
                   
                </div>

            </div>
          
        </div>
    </section>
    <section className=''>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-20'>
           <div className='h-full flex flex-col gap-3 justify-center'>
                <h2 className='text-2xl xl:text-4xl font-medium capitalize'>Frequently Asked<br/> Questions</h2>
                <p className='text-gray-600 text-base'>Answering popular queries to resolve and give you a peace of mind regarding Business visa services in Dubai.</p>
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
                <h2 className='text-2xl xl:text-7xl font-medium capitalize'>Experience the Heera Corporate Difference.</h2>
                <p className='xl:w-[60%]'>Ready to simplify your global mobility? Contact Heera Corporate today for a free consultation. Our team of experts is available to answer your questions and guide you through the process of obtaining a Business Visa from Dubai.</p>
                <button className='mt-5 border border-white  hover:bg-white  duration-150 w-fit hover:text-mainhvr px-5 rounded-xl py-2  font-medium capitalize'>apply visa now</button>

        </div>
    </section>
    <section>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col-reverse md:flex-row gap-10 gap-x-10'>
            <div className='basis-1/2'>
                <form className='flex flex-col gap-3 text-sm'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr rounded-xl border border-gray-300 w-full p-2 py-3' type="text"  placeholder='Full Name'/>
                        <input className='focus:border-mainhvr rounded-xl border border-gray-300 w-full p-2 py-3' type="text"  placeholder='Company'/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr rounded-xl border border-gray-300 w-full p-2 py-3 ' type="number"  placeholder='Mobile' inputMode='numeric'/>
                        <input className='focus:border-mainhvr rounded-xl border border-gray-300 w-full p-2 py-3' type="email"  placeholder='Email'/>
                    </div>
                    <textarea className='focus:border-mainhvr rounded-xl  border border-gray-300 w-full p-2' rows="5" placeholder='Message'></textarea>
                    <button className='bg-mainhvr text-white h-10 rounded-xl capitalize hover:bg-red-700 duration-150 w-full md:w-fit px-16' type='submit'>send</button>
                </form>
            </div>
            <div className='basis-1/2  flex flex-col gap-3 justify-center'>
                <h2 className='text-3xl xl:text-4xl font-medium capitalize'>get your consultation<br/> free now</h2>
                <p className='text-gray-600 text-base'>Fill out the form below, and our team will promptly<br/> get in touch with you.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
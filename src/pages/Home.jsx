import React from 'react';
import {bannerImg,heeraAbt,heeraWhy,blobshape,LogoFav} from '../assets';
import {Faq} from '../components'
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
    <section className='bg-home-bg bg-cover text-white xl:h-screen overflow-hidden relative' >
        <div className='absolute bg-[#00000091] w-full h-full z-0'></div>
        <div className='w-11/12 xl:w-10/12 mx-auto pt-40 py-10  h-full z-10 relative grid grid-cols-1 gap-10 gap-x-10'>
           <div className='h-full w-full flex flex-col justify-center gap-3 xl:gap-5 xl:pt-14 xl:w-[60%]'>
                <h1 className='text-3xl xl:text-5xl font-semibold xl:font-medium capitalize'>Business Visa from<br/> Dubai made simple</h1>
                <p className='xl:pr-32 text-sm md:text-base font-light md:font-normal tracking-tight xl:text-justify'>Leveraging a global network of expertise, we ensure effortless relocations worldwide for thousands of corporations by simplifying your Business visa from Dubai processes for employees both individually and as a team.</p>
                <button className='border border-mainhvr text-white bg-mainhvr  duration-150 w-fit rounded-xl hover:text-white px-5 py-2 font-medium'>Get in Touch</button>
           </div>
       
        </div>
    </section>
    <section className='bg-white text-black'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 xl:grid-cols-2 gap-10'>
            <div className='hidden md:block'>
                <img className='object-cover h-full md:h-80 xl:h-full w-full' loading='lazy' src={heeraAbt} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-mainhvr  tracking-widest'>ABOUT US</p>
                <h2 className='text-2xl sm:text-3xl xl:text-4xl font-medium capitalize'>Making corporate global mobility simple, fast, and reliable</h2>
                <p className='text-gray-600 text-sm md:text-base  text-justify'>At Heera Corporate, we know what it’s like to have a frequent travel team on board. Boasting an international network of companies, we ensure a flawless Dubai Business visa processing for businesses of all sizes to smoothly transition and relocate personal to their global branches.</p>
                <p className='text-gray-600 text-sm md:text-base  text-justify'>Our experts handle the complexities of requirements of your Business visa from Dubai, so that you can focus on what’s important in growing your business worldwide.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Assisted visa applications</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Personalized support</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Streamlined work permit processing</p>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div><MdOutlineVerified className='text-2xl md:text-3xl text-mainhvr'/></div>
                        <p className='text-sm md:text-base'>Automated and timely approach</p>
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
                <h2 className='text-2xl sm:text-3xl xl:text-4xl font-medium capitalize'>Experience the Heera Corporate<br className='hidden md:block'/> difference with stress-free Business visa from Dubai.</h2>
                <div className='hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 mt-5'>
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
                <div className='flex flex-col gap-3 md:hidden'>
                    <Marquee pauseOnHover>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={pricing} alt="" /> 
                        <div>
                            <p className='text-sm xl:text-lg font-medium '>Upfront pricing</p>
                            <p className='text-xs md:text-sm'> Flat rate transparency with no hidden charges.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={portal} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '> User friendly portal</p>
                            <p className='text-xs md:text-sm'> Simple online account management of your Dubai Business visa applications.</p>
                        </div>
                    </div>
                   
                    </Marquee>
                    <Marquee pauseOnHover direction='right'>
                 
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={experts} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '> Personalized visa experts</p>
                            <p className='text-xs md:text-sm'> Dedicated end-to-end support with real-time status updates.</p>
                        </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={Prompt} alt="" />
                       <div>
                            <p className='text-sm xl:text-lg font-medium '> Prompt processing</p>
                            <p className='text-xs md:text-sm'> Reliable delivery and easy Dubai Business visa processing time.</p>
                       </div>
                    </div>
                    
                    </Marquee>
                    <Marquee pauseOnHover>
                   
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={visaexpertise} alt="" />
                       <div>
                             <p className='text-sm xl:text-lg font-medium '> Proven visa expertise</p>
                            <p className='text-xs md:text-sm'> Navigating complex visa processes with ease.</p>
                       </div>
                    </div>
                    <div className='bg-white text-black p-5 rounded-2xl shadow-lg duration-150 hover:shadow-2xl flex items-center gap-3 mr-3'>
                        <img className='h-10 w-10 object-cover' src={billingsystem} alt="" />
                        <div>
                            <p className='text-sm xl:text-lg font-medium '> Unified billing system</p>
                            <p className='text-xs md:text-sm'> Simplified and accessible payments from Business visa services in Dubai.</p>
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
                <h2 className='text-2xl sm:text-3xl xl:text-4xl font-medium capitalize'>Frequently Asked<br/> Questions</h2>
                <p className='text-gray-600 text-sm md:text-base'>Answering popular queries to resolve and give you a peace of mind regarding Business visa services in Dubai.</p>
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
                <h2 className='text-4xl xl:text-7xl font-medium capitalize'>Experience the Heera Corporate Difference.</h2>
                <p className='xl:w-[60%] text-sm md:text-base'>Ready to simplify your global mobility? Contact Heera Corporate today for a free consultation. Our team of experts is available to answer your questions and guide you through the process of obtaining a Business Visa from Dubai.</p>
                <button className='mt-5 border border-white  hover:bg-white  duration-150 w-fit hover:text-mainhvr px-5 rounded-xl py-2  font-medium capitalize'>apply visa now</button>

        </div>
    </section>
    <section>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col-reverse xl:flex-row gap-10 gap-x-10'>
            <div className='basis-1/2'>
                <form className='flex flex-col gap-3 text-sm'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="text"  placeholder='Full Name'/>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="text"  placeholder='Company'/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3 ' type="number"  placeholder='Mobile' inputMode='numeric'/>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="email"  placeholder='Email'/>
                    </div>
                    <textarea className='focus:border-mainhvr border-b border-gray-300 w-full p-2 pl-0' rows="5" placeholder='Message'></textarea>
                    <button className='bg-mainhvr text-white h-12 xl:h-10 rounded-xl capitalize hover:bg-red-700 duration-150 w-fit px-16' type='submit'>send</button>
                </form>
            </div>
            <div className='basis-1/2  flex flex-col gap-3 justify-center'>
                <h2 className='text-2xl sm:text-3xl xl:text-4xl font-medium capitalize'>get your free<br/> consultation now</h2>
                <p className='text-gray-600 text-sm md:text-base'>Fill out the form below, and our team will promptly<br className='hidden md:block'/> get in touch with you.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
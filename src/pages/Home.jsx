import React from 'react';
import {bannerImg} from '../assets';
import {Faq} from '../components'
import { MdOutlineVerified } from "react-icons/md";

const Home = () => {
  return (
    <>
    <section className='bg-mainclr text-white h-screen xl:h-[90vh] mt-16 md:mt-28 overflow-hidden'>
        <div className='w-11/12 xl:w-10/12 mx-auto pb-10 h-full grid grid-cols-1 md:grid-cols-2 xl:gap-5 gap-x-20'>
           <div className='h-full w-full flex flex-col justify-center gap-3 xl:gap-5'>
                <h1 className='text-3xl xl:text-5xl font-medium'>Smart solutions for Business Visa from Dubai made simple</h1>
                <p className='xl:pr-32 text-base xl:text-lg'>Leveraging a global network of expertise, we ensure effortless relocations worldwide for thousands of corporations by simplifying your Business visa from Dubai processes for employees both individually and as a team</p>
                <button className='border hover:border-mainhvr text-white hover:bg-mainhvr  duration-150 w-fit hover:text-white px-5 md:px-10 py-2 md:py-3 font-medium'>Get in Touch</button>
           </div>
           <div className='flex flex-col items-center justify-start md:justify-center h-full'>
                <img className='h-full w-full xl:h-[450px] md:w-fit object-cover' src={bannerImg} alt="banner" />
           </div>
        </div>
    </section>
    <section className='bg-white text-black'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <img src={bannerImg} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-mainhvr l tracking-widest'>ABOUT US</p>
                <h2 className='text-2xl xl:text-4xl font-medium'>Making corporate global mobility simple, fast, and reliable</h2>
                <p className='text-gray-600 text-base xl:text-lg'>At Heera Corporate, we know what it’s like to have a frequent travel team on board. Boasting an international network of companies, we ensure a flawless Dubai Business visa processing for businesses of all sizes to smoothly transition and relocate personal to their global branches.</p>
                <p className='text-gray-600 text-base xl:text-lg'>Our experts handle the complexities of requirements of your Business visa from Dubai, so that you can focus on what’s important in growing your business worldwide.</p>
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
                <button className='mt-5 border border-black hover:border-mainhvr text-black hover:bg-mainhvr  duration-150 w-fit hover:text-white px-5 md:px-10 py-2 md:py-3 font-medium'>Get in Touch</button>

            </div>
        </div>
    </section>
    <section className='bg-white text-black'>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-20'>
            <div className='flex flex-col gap-3'>
                <p className='text-mainhvr  tracking-widest'>WHY CHOOSE US</p>
                <h2 className='text-2xl xl:text-4xl font-medium'>Experience the Heera Corporate difference with stress-free Business visa from Dubai</h2>
                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>Upfront pricing</p>
                        <p className=' text-gray-600'>Flat rate transparency with no hidden charges.</p>
                    </div>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>User friendly portal</p>
                        <p className=' text-gray-600'>Simple online account management of your Dubai Business visa applications</p>
                    </div>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>Personalized visa experts</p>
                        <p className=' text-gray-600'>Dedicated end-to-end support with real-time status updates</p>
                    </div>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>Prompt processing</p>
                        <p className=' text-gray-600'>Reliable delivery and easy Dubai Business visa processing time</p>
                    </div>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>Proven visa expertise</p>
                        <p className=' text-gray-600'>Navigating complex visa processes with ease</p>
                    </div>
                    <div>
                        <p className='text-base xl:text-lg text-mainhvr font-medium'>Unified billing system</p>
                        <p className=' text-gray-600'>Simplified and accessible payments from Business visa services in Dubai</p>
                    </div>
                </div>

            </div>
            <div>
                <img className='h-full object-cover' src={bannerImg} alt="" />
            </div>
        </div>
    </section>
    <section className=''>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-20'>
           <div className='h-full flex flex-col gap-3 justify-center'>
                <h2 className='text-2xl xl:text-4xl font-medium'>Frequently Asked<br/> Questions</h2>
                <p className='text-gray-600 text-base xl:text-lg'>Answering popular queries to resolve and give you a peace of mind regarding Business visa services in Dubai.</p>
           </div>
            <div className=''>
                <Faq/>
            </div>
        </div>
    </section>
    <section>
        <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col-reverse md:flex-row gap-10 gap-x-10'>
            <div className='basis-1/2'>
                <form className='flex flex-col gap-3'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr border border-gray-300 w-full p-2 py-3' type="text"  placeholder='Full Name'/>
                        <input className='focus:border-mainhvr border border-gray-300 w-full p-2 py-3' type="text"  placeholder='Company'/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr border border-gray-300 w-full p-2 py-3 ' type="number"  placeholder='Mobile' inputMode='numeric'/>
                        <input className='focus:border-mainhvr border border-gray-300 w-full p-2 py-3' type="email"  placeholder='Email'/>
                    </div>
                    <textarea className='focus:border-mainhvr  border border-gray-300 w-full p-2' rows="5" placeholder='Message'></textarea>
                    <button className='bg-mainhvr text-white h-12 capitalize hover:bg-red-700 duration-150' type='submit'>send</button>
                </form>
            </div>
            <div className='basis-1/2 h-full flex flex-col gap-3 justify-center'>
                <h2 className='text-3xl xl:text-4xl font-medium'>Ready to Learn<br/> More?</h2>
                <p className='text-gray-600 text-base xl:text-lg'>Fill out the form below.<br/> We are here to address any further inquiries you may have.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
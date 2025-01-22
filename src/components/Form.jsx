import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = "service_hkqds2r";
      const templateId = "template_0isz9jg";
      const publicKey = "PtnXshDt-rain9imd";
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        user_name: name,
        user_company: company,
        user_mobile: phone,
        user_mail: mail,
        user_msg: message,
      };
  
      // Send the email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          toast.success("Message sent successfully", response);
          setName("");
          setCompany("")
          setPhone("");
          setEmail("")
          setMessage("");
        })
        .catch((error) => {
          toast.error("Error sending email", error);
        });
    };
  return (
    <>
      <div className='w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col-reverse xl:flex-row-reverse gap-10 gap-x-10'>
            <div className='basis-1/2'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-sm'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="text"  placeholder='Full Name'    name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} required/>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="text"  placeholder='Company'    name="user_company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)} required/>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3 ' type="number"  placeholder='Mobile' inputMode='numeric'    name="user_mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} required/>
                        <input className='focus:border-mainhvr  border-b border-gray-300 w-full p-2 pl-0 py-3' type="email"  placeholder='Email'       name="user_mail"
                  value={mail}
                  onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <textarea className='focus:border-mainhvr border-b border-gray-300 w-full p-2 pl-0' rows="5" placeholder='Message'       name="user_msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button className='bg-mainhvr text-white h-12 xl:h-10 rounded-xl capitalize hover:bg-red-700 duration-150 w-fit px-16' type='submit'>send</button>
                </form>
            </div>
            <div className='basis-1/2  flex flex-col gap-3 justify-center'>
                <h2 className='text-xl sm:text-3xl font-medium capitalize'>get your free<br/> consultation now</h2>
                <p className='text-gray-600 text-sm md:text-base'>Fill out the form below, and our team will promptly<br className='hidden md:block'/> get in touch with you.</p>
            </div>
        </div>
    </>
  )
}

export default Form
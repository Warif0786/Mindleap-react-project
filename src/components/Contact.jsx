import React, { useState } from 'react'
import {FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt} from "react-icons/fa"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message
        }
        console.log(data);
        if(!data){
            alert("Please fill all fields");
            return;
        }
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setMessage("");
    }
  return (
        <div id='contact' className='bg-heroBg flex items-center justify-center py-28 px-8'>
            <div className='container mx-auto'>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
                    {/* left side */}
                    <div className='space-y-8'>
                        <h2 className='text-4xl text-white font-bold font-secondary mb-4'>Make an appointment</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center bg-[#ffffff1a] rounded-full p-3'>
                                    <FaUserAlt className='text-primary'/>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-lg font-medium'>24 Hours Services</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tenetur?</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center bg-[#ffffff1a] rounded-full p-3'>
                                    <FaEnvelope className='text-primary'/>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-lg font-medium'>24 Hours Services</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tenetur?</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center bg-[#ffffff1a] rounded-full p-3'>
                                    <FaPhoneAlt className='text-primary'/>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-lg font-medium'>High Quality Care</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tenetur?</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center bg-[#ffffff1a] rounded-full p-3'>
                                    <FaGlobe className='text-primary'/>
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tenetur?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='space-y-8 p-8 bg-white rounded-md shadow-xl'>
                        <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            <div className='flex sm:flex-row flex-col gap-4'>
                                <input onChange={e => setName(e.target.value)}
                                type="text" placeholder='Name' className='w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow' />

                                <input onChange={e => setEmail(e.target.value)}
                                type="email" placeholder='Email Address' className='w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow' />
                            </div>

                            <div className='flex sm:flex-row flex-col gap-4'>
                                <input onChange={e => setPhone(e.target.value)}
                                type="tel" placeholder='Contact Number' className='w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow' />

                                <input onChange={e => setCountry(e.target.value)}
                                type="text" placeholder='Country' className='w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow' />
                            </div>
                            <textarea
                            onChange={e => setMessage(e.target.value)}
                            rows="5" 
                            placeholder='Write your message...'  className='w-full p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md shadow resize-none'></textarea>
                            <button type='submit' className='bg-primary hover:bg-primary/80 w-full p-3 text-white rounded-md'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {
                showModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                        <div className='bg-white p-8 rounded-md shadow-lg'>
                            <h2 className='text-2xl font-bold mb-4'>Thank you!</h2>
                            <p>Thank you, {name}, for submiting your query.</p>
                            <button className='mt-4 px-4 py-2 bg-primary text-white rounded-md'
                            onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
  )
}

export default Contact

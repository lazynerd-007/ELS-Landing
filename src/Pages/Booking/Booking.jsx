import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorBlocks from "../../assets/color blocks.png"

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const Booking = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        from_name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any of the fields are empty
        if (!values.from_name || !values.email || !values.message) {
            // Display an error toast
            toast.error('Please fill out all fields');
            return;
        }

        // Now 'values' contains the current form data
        console.log('Form values:', values);

        // Perform your emailjs.send() with the 'values' object
        emailjs.send('service_u6jb8rw', 'template_ffruusu', values, 'MiHjFMb3Hhwh8R9De')
            // .then((response) => {
            //     console.log('Email sent successfully:', response);
            //     // Display a success toast
            //     toast.success('Message sent successfully, Expect a response within 24hours');
            // })
            .then((response) => {
                console.log('Message sent successfully:', response);

                // Display a success toast with an onClose callback for delayed navigation
                toast.success('Message sent successfully', {
                    onClose: () => {
                        // Introduce a delay (3 seconds) before navigating back to the home page
                        setTimeout(() => {
                            navigate('/');
                        }, 5000);
                    },
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Display an error toast
                toast.error('Error sending email');
            });

        // Reset the form after submission
        setValues({
            from_name: '',
            email: '',
            message: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };


    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            <ToastContainer />

            <section className="bg-[#0C0C0C] tablet:bg-hero-bg text-white pt-16">
                <div className="pt- min-h-screen laptop:px-12 tablet:px-8 px-4">
                    <div className="flex flex-col min-h-screen">
                        <div className="container flex flex-col flex-1 py-12 mx-auto">
                            <div className="flex-1 laptop:flex laptop:items-cente laptop:-mx-6">
                                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 hidde mb-10 laptop:mb-0 laptop:block">
                                    <div className="space-y-3">

                                        <img src={ColorBlocks} className='mb-4' alt='color-blocks' />
                                        <h1
                                            className="mb-5 text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-none font-black">
                                            Book Your Ride
                                        </h1>
                                        <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                                            Every Detail Crafted for the Discerning Connoisseur.
                                        </p>
                                    </div>
                                </div>

                                <div className="laptop:w-1/2 laptop:mx-6">
                                    <div className="w-full tablet:px-8 tablet:border-none border px-2 border-white/5 py-10 mx-auto overflow-hidden bg-[#0C0C0C]  shadow-2xl rounded-xl  laptop:max-w-xl">
                                        <form onSubmit={handleSubmit}
                                            className="">

                                            <div className="w-full py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Select a service
                                                </label>
                                                <select
                                                    name="cars"
                                                    id="cars"
                                                    className='text-[#A6A6A6] py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="Buy a Car">Buy a Car</option>
                                                    <option value="Rent a Car">Rent a Car</option>
                                                    <option value="Sell a Car">Sell a Car</option>
                                                    <option value="Become a Driver">Become a Driver</option>
                                                </select>
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Select a vehicle
                                                </label>
                                                <select
                                                    name="cars"
                                                    id="cars"
                                                    className='text-[#A6A6A6] py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="BMW">BMW</option>
                                                    <option value="Bentley">Bentley</option>
                                                    <option value="Mercedes">Mercedes</option>
                                                    <option value="Audi">Audi</option>
                                                    <option value="Range Rover">Range Rover</option>
                                                    <option value="Rolls-Royce">Rolls-Royce</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Departure
                                                </label>
                                                <input
                                                    id="Departure"
                                                    name="Departure"
                                                    type="text"
                                                    // value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Departure"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick up date
                                                </label>
                                                <Space direction="vertical" className='w-full mb-1'>
                                                    <DatePicker onChange={onChange}
                                                        className='w-full text-[#A6A6A6]' />
                                                </Space>
                                                {/* className='text-[#A6A6A6] py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick Up time
                                                </label>
                                                <select
                                                    name="cars"
                                                    id="cars"
                                                    className='text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="9am">9am</option>
                                                    <option value="10am">10am</option>
                                                    <option value="11am">11am</option>
                                                    <option value="12pm">12pm</option>
                                                    <option value="1pm">1pm</option>
                                                    <option value="2pm">2pm</option>
                                                    <option value="3pm">3pm</option>
                                                    <option value="4pm">4pm</option>
                                                    <option value="5pm">5pm</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Destination
                                                </label>
                                                <input
                                                    id="Destination"
                                                    name="Destination"
                                                    type="text"
                                                    // value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Your destination"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    End date
                                                </label>
                                                <Space direction="vertical" className='w-full mb-1'>
                                                    <DatePicker onChange={onChange}
                                                        className='w-full text-[#A6A6A6]' />
                                                </Space>
                                                {/* className='text-[#A6A6A6] py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Drop Off time
                                                </label>
                                                <select
                                                    name="cars"
                                                    id="cars"
                                                    className='text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="9am">9am</option>
                                                    <option value="10am">10am</option>
                                                    <option value="11am">11am</option>
                                                    <option value="12pm">12pm</option>
                                                    <option value="1pm">1pm</option>
                                                    <option value="2pm">2pm</option>
                                                    <option value="3pm">3pm</option>
                                                    <option value="4pm">4pm</option>
                                                    <option value="5pm">5pm</option>
                                                </select>
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick up address
                                                </label>
                                                <input
                                                    id="PickUpAddress"
                                                    name="PickUpAddress"
                                                    type="text"
                                                    // value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Address"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    DROP OFF address
                                                </label>
                                                <input
                                                    id="DropOffAddress"
                                                    name="DropOffAddress"
                                                    type="text"
                                                    // value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Address"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Price
                                                </label>
                                                <select
                                                    name="cars"
                                                    id="cars"
                                                    className='text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="₦1.5m">₦1.5m</option>
                                                    <option value="₦2m">₦2m</option>
                                                    <option value="₦2.5m">₦2.5m</option>
                                                    <option value="₦3m">₦3m</option>
                                                </select>
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Name
                                                </label>
                                                <input
                                                    id="from_name"
                                                    name="from_name"
                                                    type="text"
                                                    value={values.from_name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                {/* className='text-[#A6A6A6] py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Email address
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="johndoe@example.com"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Phone Number
                                                </label>
                                                <input
                                                    id="from_name"
                                                    name="from_name"
                                                    type="text"
                                                    value={values.from_name}
                                                    onChange={handleInputChange}
                                                    placeholder="+234 123 456 789"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-dashed border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <button type="submit"
                                                    className="py-3 mt-6 w-3/4 border border-transparent rounded-full font-medium bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                                    Book Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </motion.div>
    )
}

export default Booking
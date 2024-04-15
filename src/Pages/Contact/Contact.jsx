import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Contact = () => {
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

            <section className="bg-[#0C0C0C] text-white ">
                <div className="pt- min-h-screen laptop:px-12 tablet:px-8 px-4">
                    <div className="flex flex-col min-h-screen">
                        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                            <div className="flex-1 laptop:flex laptop:items-center laptop:-mx-6">
                                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 hidden laptop:block">
                                    <div className="space-y-3">
                                        <h1 className="text-2xl font-semibold capitalize laptop:text-3xl">
                                            ELS
                                        </h1>

                                        <p className="max-w-xl italic">
                                            ...where Luxury is not a Choice, but a Lifestyle...
                                            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                                        </p>

                                        <Link to="/" className="inline-block">
                                            <button type="btn"
                                                className="py-3 px-5 border capitalize border-transparent rounded-lg font-medium bg-[#FEBB1B] sm:w-fit text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                                Home
                                            </button>
                                        </Link>
                                    </div>

                                </div>

                                <div className="laptop:w-1/2 laptop:mx-6">
                                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#3138341a]  shadow-2xl rounded-xl  laptop:max-w-xl">
                                        <h1 className="text-2xl text-center font-medium dark:text-gray-200">
                                            Contact Us
                                        </h1>

                                        <p className="mt-2 text-center text-gray-400">
                                            Ask us anything, we would love to hear from you!
                                        </p>

                                        <form onSubmit={handleSubmit}
                                            className="mt-6">
                                            <div className="flex-1">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="from_name"
                                                    name="from_name"
                                                    type="text"
                                                    value={values.from_name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Email address
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={values.email}
                                                    onChange={handleInputChange}
                                                    placeholder="johndoe@example.com"
                                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="w-full mt-6">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows="4"
                                                    value={values.message}
                                                    onChange={handleInputChange}
                                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                    placeholder="Message..."
                                                ></textarea>
                                            </div>

                                            <div className="mt-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                                                <input
                                                    className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] border-[0.125rem]"
                                                    // className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                    type="checkbox"
                                                    value=""
                                                    id="exampleCheck10"
                                                />
                                                <label
                                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                                    htmlFor="exampleCheck10"
                                                >
                                                    Send me a copy of this message
                                                </label>
                                            </div>

                                            <button type="submit"
                                                className="py-3 px-5 mt-6 border border-transparent rounded-lg font-medium bg-[#FEBB1B] sm:w-fit text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                                Send message
                                            </button>
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

export default Contact
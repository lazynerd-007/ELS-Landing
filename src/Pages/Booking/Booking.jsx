import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { carList, Times } from './content';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorBlocks from "../../assets/color blocks.png"
import { BookingModal } from './Modal';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const onChange = (date, dateString) => {
    // console.log(date, dateString);
};

const Booking = () => {
    const [service, setService] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [fuelOption, setFuelOption] = useState('');
    const [pickUpTime, setPickupTime] = useState('');
    const [dropOffTime, setDropOffTime] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [values, setValues] = useState({
        from_name: '',
        email: '',
        phoneNo: '',
        service: '',
        selectedCar: '',
        departure: '',
        pickUpDate: '',
        pickUpTime: '',
        destination: '',
        endDate: '',
        dropOffTime: '',
        pickUpAddress: '',
        dropOffAddress: '',
        fuelOption: '',
        discountPrice: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the fields are empty
        // if (!values.from_name || !values.email || !values.phoneNo)
        // || !values.service || !values.selectedCar || !values.departure
        // || !values.pickUpDate || !values.pickUpTime || !values.destination
        // || !values.endDate || !values.dropOffTime || !values.pickUpAddress
        // || !values.fuelOption)
        // Display an error toast
        // {
        //     toast.error('Please fill out all fields');
        //     return;
        // }

        // Now 'values' contains the current form data
        console.log('Form values:', values);

        // Set the discounted price in the form values
        const priceInfo = calculatePrice();

        if (typeof priceInfo === 'string') {
            // Handle the error (e.g., display a toast)
            toast.error(priceInfo);
            return;
        }

        const discountedPrice = priceInfo.discounted;

        // Set the discounted price in the state
        setDiscountedPrice(discountedPrice);

        // Perform your emailjs.send() with the 'values' object
        try {
            // Use await to ensure that setDiscountedPrice is completed before continuing
            await new Promise(resolve => setTimeout(resolve, 0));

            // Perform your emailjs.send() with the 'values' object
            const emailResponse = await emailjs.send('service_u6jb8rw', 'template_ffruusu', {
                ...values,
                discountPrice: discountedPrice,
            }, 'MiHjFMb3Hhwh8R9De');

            console.log('Email sent successfully:', emailResponse);

            // Display the modal only if the email was sent successfully
            setOpenModal(true);

        } catch (error) {
            console.error('Error sending email:', error);
            // Display an error toast
            toast.error('Error sending email');
        }
    };

    const handleCloseModal = () => {
        // Clear the form values
        setValues({
            from_name: '',
            email: '',
            phoneNo: '',
            service: '',
            selectedCar: '',
            departure: '',
            pickUpDate: '',
            pickUpTime: '',
            destination: '',
            endDate: '',
            dropOffTime: '',
            pickUpAddress: '',
            dropOffAddress: '',
            fuelOption: '',
            discountPrice: '',
        });
        // Close the modal
        setOpenModal(false);

        // Or Refresh the page
        // window.location.reload();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };


    // Form select logic
    const getServiceOptions = () => {
        return [
            { value: 'pickup', label: 'Airport Pickup' },
            { value: 'rental', label: 'Daily Rental' },
        ];
    };

    const getFuelOptions = (service) => {
        if (service === 'rental') {
            return [
                { value: 'withFuel', label: 'With Fuel' },
                { value: 'withoutFuel', label: 'Without Fuel' },
            ];
        } else if (service === 'pickup') {
            return [
                { value: 'withFuel', label: 'With Fuel' },
                { value: 'dropOff', label: 'Pick Up / Drop Off / Airport Transfer' },
            ];
        } else {
            return [];
        }
    };

    const handleServiceChange = (event) => {
        const value = event.target.value;
        setService(value);
        setSelectedCar(''); // Reset selectedCar when changing service
        setFuelOption(''); // Reset fuelOption when changing service
        // console.log('Selected service:', value);
        setValues({
            ...values,
            service: value,
            selectedCar: '', // Reset selectedCar
            fuelOption: '', // Reset fuelOption
        });
    };

    const handleCarChange = (event) => {
        const selectedCarId = event.target.value;
        setSelectedCar(selectedCarId);

        // Find the corresponding car object from carList
        const selectedCarObject = carList.find((car) => car.id === parseInt(selectedCarId));
        // console.log('Selected car:', selectedCarId);
        // Set the car name in the values state
        setValues({
            ...values,
            selectedCar: selectedCarObject ? selectedCarObject.name : '',
        });
    };




    const handlePickupTimeChange = (event) => {
        const value = event.target.value;
        setPickupTime(value);
        // console.log('Pickup Time:', value);
        setValues({
            ...values,
            pickUpTime: value,
        });
    };

    const handleDropOffTimeChange = (event) => {
        const value = event.target.value;
        setDropOffTime(value);
        // console.log('Dropoff Time:', value);
        setValues({
            ...values,
            dropOffTime: value,
        });
    };

    const handleFuelOptionChange = (event) => {
        const value = event.target.value;
        setFuelOption(value);
        // console.log('Fuel Option:', value);
        setValues({
            ...values,
            fuelOption: value,
        });
    };

    const calculatePrice = () => {
        if (!service || !selectedCar || !fuelOption) {
            return 'Please select service, car, and fuel option';
        }

        const car = carList[selectedCar - 1];
        const serviceKey = service === 'rental' ? 'rental' : 'pickup';
        const fuelKey = service === 'pickup' && fuelOption === 'dropOff' ? 'dropOff' : fuelOption === 'withFuel' ? 'WithFuel' : 'WithoutFuel';

        const originalPriceKey = `${serviceKey}${fuelKey}`;
        const discountedPriceKey = `${serviceKey}${fuelKey}Discounted`;

        if (!car.prices.hasOwnProperty(originalPriceKey)) {
            return `Price key "${originalPriceKey}" not found in car object`;
        }

        const originalPrice = car.prices[originalPriceKey];
        const discountedPrice = originalPrice - (originalPrice * 0.025);
        console.log('Discounted Price:', discountedPrice)

        return { original: originalPrice.toFixed(2), discounted: discountedPrice.toFixed(2) };
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
            <BookingModal openModal={openModal} onClose={handleCloseModal} values={values} />


            <section className="bg-[#0C0C0C] tablet:bg-hero-bg bg-cover bg-center text-white pt-20 laptop:pt-28">
                <div className="pt- min-h-screen laptop:px-12 tablet:px-8 px-4">
                    <div className="flex flex-col min-h-screen">
                        <div className="container flex flex-col flex-1 py-12 mx-auto">
                            <div className="flex-1 laptop:flex laptop:items-cente laptop:-mx-6">
                                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 mb-10 laptop:mb-0 laptop:block">
                                    <div className="">

                                        <div className='laptop:space-y-8 space-y-4 '>
                                            <img src={ColorBlocks} className='mb-4' alt='color-blocks' />
                                            <h1
                                                className="mb-5 text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-none font-black">
                                                Book Your Ride
                                            </h1>
                                            <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                                                Every Detail Crafted for the Discerning Connoisseur.
                                            </p>
                                        </div>

                                        {/* Rental conditions */}
                                        <div className='bg-black laptop:mt-28 mt-14 text-sm bg-opacity-60 py-2 px-4 '>
                                            <h2 className='text-center text-lg underline'>
                                                Rental conditions:
                                            </h2>
                                            <p className='tablet:flex justify-between'>
                                                Please note that our working period is between 6am –6pm.
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Normal Overtime Rate (7pm – 12 midnight)  <span>N2,000 per hour</span>
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Abnormal Overtime Rate (12 midnight—6 am) <span>N2,500 per hour</span>
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Weekend Allowance <span>N3,000 per day</span>
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Public holiday allowance <span>N5,000 per day</span>
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Travel Allowance <span>N4,000 per day</span>
                                            </p>
                                            <p className='tablet:flex justify-between'>
                                                - Outstation allowance <span>N10,000 per night</span>
                                            </p>
                                            <p className=''>
                                                Toll – pass/Parking Toll is excluded
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="laptop:w-1/2 laptop:mx-6">
                                    <div className="w-full tablet:px-8 tablet:border-none border px-2 border-white/5 py-10 mx-auto overflow-hidden bg-[#0C0C0C]  shadow-2xl rounded-xl  laptop:max-w-xl">
                                        <form onSubmit={handleSubmit}
                                            className="">

                                            {/* Service Select */}
                                            <div className="w-full py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Select a service
                                                </label>
                                                <select
                                                    value={service}
                                                    onChange={(event) => handleServiceChange(event)}
                                                    name="service"
                                                    id="service"
                                                    className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="" className='bg-black'>Select Service</option>
                                                    {getServiceOptions().map((option) => (
                                                        <option key={option.value} value={option.value} className='bg-black'>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Car Select */}
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Select a vehicle
                                                </label>
                                                <select
                                                    value={selectedCar}
                                                    onChange={(event) => handleCarChange(event)}
                                                    disabled={!service}
                                                    name="selectedCar"
                                                    id="selectedCar"
                                                    className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="" className='bg-black'>Select Car</option>
                                                    {carList
                                                        .filter((car) => (service === 'rental' ? car.rentalAvailable : car.pickupAvailable))
                                                        .map((car) => (
                                                            <option key={car.id} value={car.id} className='bg-black'>
                                                                {car.name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Departure
                                                </label>
                                                <input
                                                    id="departure"
                                                    name="departure"
                                                    type="text"
                                                    value={values.departure}
                                                    onChange={handleInputChange}
                                                    placeholder="State: Lagos"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick up date
                                                </label>
                                                <Space direction="vertical" className="w-full mb-1">
                                                    <DatePicker
                                                        onChange={(date, dateString) => handleInputChange({ target: { name: 'pickUpDate', value: dateString } })}
                                                        className='w-full text-[#A6A6A6]'
                                                        disabledDate={(current) => current && current < dayjs().startOf('day')}
                                                    // style={{
                                                    //     backgroundColor: 'transparent',
                                                    //     color: 'white',
                                                    // }}
                                                    // pickerInputClass="custom-datepicker" // Add a custom class for the picker input
                                                    />
                                                </Space>
                                                {/* className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick Up time
                                                </label>
                                                <select
                                                    name="pickUpTime"
                                                    id="pickUpTime"
                                                    value={pickUpTime}
                                                    onChange={(event) => handlePickupTimeChange(event)}
                                                    className='text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="" className='bg-black'>Select Time</option>
                                                    {Times.map((time, index) => (
                                                        <option key={index} value={time} className='bg-black'>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Destination
                                                </label>
                                                <input
                                                    id="destination"
                                                    name="destination"
                                                    type="text"
                                                    value={values.destination}
                                                    onChange={handleInputChange}
                                                    placeholder="(Same as Departure)"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    End date
                                                </label>
                                                <Space direction="vertical" className='w-full mb-1'>
                                                    <DatePicker
                                                        onChange={(date, dateString) => handleInputChange({ target: { name: 'endDate', value: dateString } })}
                                                        className='w-full text-[#A6A6A6]'
                                                        disabledDate={(current) => current && current < dayjs().startOf('day')}
                                                    />
                                                </Space>
                                                {/* className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Drop Off time
                                                </label>
                                                <select
                                                    name="dropOffTime"
                                                    id="dropOffTime"
                                                    value={dropOffTime}
                                                    onChange={(event) => handleDropOffTimeChange(event)}
                                                    className='text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="" className='bg-black'>Select Time</option>
                                                    {Times.map((time, index) => (
                                                        <option key={index} value={time} className='bg-black'>
                                                            {time}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Pick up address
                                                </label>
                                                <input
                                                    id="pickUpAddress"
                                                    name="pickUpAddress"
                                                    type="text"
                                                    value={values.pickUpAddress}
                                                    onChange={handleInputChange}
                                                    placeholder="Address"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    DROP OFF address
                                                </label>
                                                <input
                                                    id="dropOffAddress"
                                                    name="dropOffAddress"
                                                    type="text"
                                                    value={values.dropOffAddress}
                                                    onChange={handleInputChange}
                                                    placeholder="Address"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>

                                            {/* Fuel Option Select */}
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Options
                                                </label>
                                                <select
                                                    value={fuelOption}
                                                    onChange={(event) => handleFuelOptionChange(event)}
                                                    name="fuelOption"
                                                    id="fuelOption"
                                                    disabled={!selectedCar}
                                                    className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full'
                                                >
                                                    <option value="" className='bg-black'>Select Fuel Option</option>
                                                    {getFuelOptions(service).map((option) => (
                                                        <option key={option.value} value={option.value} className='bg-black'>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Display Price */}
                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Price
                                                </label>
                                                {selectedCar && fuelOption && (
                                                    <>
                                                        <p className='text-green-500 mt-2'>
                                                            {`₦${calculatePrice().original}`}
                                                        </p>
                                                        {/* Display the discounted price directly from the state */}
                                                        <p className='text-green-500 mt-2'>
                                                            {`₦${calculatePrice().discounted}`}
                                                        </p>
                                                    </>
                                                )}
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
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                                {/* className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
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
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                                                />
                                            </div>

                                            <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                                                <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                                                    Phone Number
                                                </label>
                                                <input
                                                    id="phoneNo"
                                                    name="phoneNo"
                                                    type="tel"
                                                    value={values.phoneNo}
                                                    onChange={handleInputChange}
                                                    placeholder="+234 123 456 789"
                                                    className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
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
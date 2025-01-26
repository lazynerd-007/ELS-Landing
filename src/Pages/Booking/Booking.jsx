import { useState, useEffect } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Select from "react-select";
import car from "../../assets/Car2.png";
import Video from "../../assets/ELS.mp4";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColorBlocks from "../../assets/color blocks.png";
import { BookingModal } from "./Modal";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const CarSelect = ({ cars, handleCarChange }) => {
  const formatOptionLabel = ({ value, label, alt, carImage }) => {
    // Fallback image if model_image is null or undefined
    const imageSrc = carImage || car;
    return (
      <div className="flex items-center">
        <img src={imageSrc} alt={alt} style={{ width: 50, marginRight: 30 }} />
        <div>{label}</div>
      </div>
    );
  };

  const options = cars.map((car) => ({
    value: car.id,
    label: `${car.modelName}`,
    alt: `${car.vehicle_type}`,
    carImage: car.model_image,
    daily_rental: car.daily_rental,
    hourly_rental: car.hourly_rental,
  }));

  return (
    <Select
      options={options}
      onChange={handleCarChange}
      formatOptionLabel={formatOptionLabel}
      placeholder="Select vehicle"
      className="text-[#A6A6A6] cursor-pointer py-1 rounded-sm bg-transparent border-none w-full"
    />
  );
};

const Booking = () => {
  const [service, setService] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [time_frame, settime_frame] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [values, setValues] = useState({
    service: "",
    vehicle_id: "",
    departure: "",
    pickup_date: "",
    hours: "",
    pick_up_address: "",
    drop_off_address: "",
    name: "",
    email: "",
    phone: "",
    price: 0,
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://els.lazynerdstudios.com/api/vehicles"
        );
        if (response.ok) {
          const data = await response.json();
          setCars(data.vehicles);
        } else {
          console.error("Failed to fetch cars:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
    window.location.reload();
  };

  const handleServiceChange = (event) => {
    const selectedService = event.target.value;
    setService(selectedService);
    setValues((prevValues) => ({
      ...prevValues,
      service: selectedService,
      hours: "",
      price: 0,
    }));
  };

  const handleCarChange = (selectedOption) => {
    setSelectedCar(selectedOption);

    // Calculate price based on service type
    let price = 0;
    if (service === "daily_rental") {
      price = selectedOption.daily_rental;
    } else if (service === "hourly_rental" && time_frame) {
      const hourCount = parseInt(time_frame);
      price = selectedOption.hourly_rental * hourCount;
    }

    setValues((prevValues) => ({
      ...prevValues,
      vehicle_id: selectedOption.value,
      price: price.toFixed(2),
    }));
  };

  const handletime_frameChange = (event) => {
    const selectedTimeFrame = event.target.value;
    const hourCount = parseInt(selectedTimeFrame);

    settime_frame(selectedTimeFrame);

    // Recalculate price if car and service are already selected
    if (selectedCar && service === "hourly_rental") {
      const price = selectedCar.hourly_rental * hourCount;

      setValues((prevValues) => ({
        ...prevValues,
        hours: selectedTimeFrame,
        price: price.toFixed(2),
      }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      "service",
      "vehicle_id",
      "departure",
      "pickup_date",
      "pick_up_address",
      "drop_off_address",
      "name",
      "email",
      "phone",
    ];

    // Validate hours for hourly rental
    if (service === "hourly_rental" && !values.hours) {
      toast.error("Please select a time frame for hourly rental");
      return;
    }

    const missingFields = requiredFields.filter((field) => {
      const value = values[field];
      return (
        value === undefined ||
        value === null ||
        value === "" ||
        (typeof value === "string" && value.trim() === "")
      );
    });

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    try {
      // Create a copy of values to modify
      const submitValues = { ...values };

      // Then extract just the number from hours string if it exists
      if (service === "hourly_rental" && submitValues.hours) {
        submitValues.hours = parseInt(submitValues.hours.split(" ")[0]);
      }

      const response = await fetch(
        "https://els.lazynerdstudios.com/api/bookVehicle",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-Key": "pEzfI487GKExKu0BeSOXNqOSYORHzCCj20ZAEQTC4W8=",
          },
          body: JSON.stringify(submitValues),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Booking successful!");
        setOpenModal(true);
      } else {
        toast.error(
          responseData.message || "Booking failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const getServiceOptions = () => {
    return [
      { value: "daily_rental", label: "Daily Rental" },
      { value: "hourly_rental", label: "Hourly Rental" },
    ];
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
      <BookingModal
        openModal={openModal}
        onClose={handleCloseModal}
        values={values}
      />

      <section className="bg-[#0C0C0C] tablet:bg-[#292D32] text-white pt-20 laptop:pt-28">
        {/* bg-[#0C0C0C] tablet:bg-hero-bg bg-cover bg-center */}

        {/* video bg */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="z-50 min-h-screen laptop:px-12 tablet:px-8 px-4">
          <div className="flex flex-col min-h-screen">
            <div className="container flex flex-col flex-1 py-12 mx-auto z-50">
              <div className="flex-1 laptop:flex laptop:items-cente laptop:-mx-6">
                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 mb-10 laptop:mb-0 laptop:block">
                  <div className="">
                    <div className="laptop:space-y-8 space-y-4">
                      <img
                        src={ColorBlocks}
                        className="mb-4"
                        alt="color-blocks"
                      />
                      <h1 className="mb-5 text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-none font-black">
                        Book Your Ride
                      </h1>
                      <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                        Every Detail Crafted for the Discerning Connoisseur.
                      </p>
                    </div>

                    {/* Rental conditions */}
                    <div className="bg-black laptop:mt-28 laptop:block hidden mt-14 text-sm bg-opacity-60 py-2 px-4 ">
                      <h2 className="text-center text-lg underline">
                        Rental conditions:
                      </h2>
                      <p className="tablet:flex justify-between">
                        Please note that our working period is between 6am –6pm.
                      </p>
                      <p className="tablet:flex justify-between">
                        - Normal Overtime Rate (7pm – 12 midnight){" "}
                        <span>N2,000 per hour</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Abnormal Overtime Rate (12 midnight—6 am){" "}
                        <span>N2,500 per hour</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Weekend Allowance <span>N3,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Public holiday allowance <span>N5,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Travel Allowance <span>N4,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Outstation allowance <span>N10,000 per night</span>
                      </p>
                      <p className="">Toll – pass/Parking Toll is excluded</p>

                      <p className="mt-4 text-[#FEBB1B]">
                        Note: You have the option to reserve your ride 24 hours
                        before your scheduled departure or due date.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="laptop:w-1/2 laptop:mx-6 z-50">
                  <div className="w-full tablet:px-8 tablet:border-none border px-2 border-white/5 py-10 mx-auto overflow-hidden bg-[#0C0C0C]  shadow-2xl rounded-xl  laptop:max-w-xl">
                    <p className="mb-4 text-[#FEBB1B] laptop:hidden">
                      Note: You have the option to reserve your ride 24 hours
                      before your scheduled departure or due date.
                    </p>

                    <form onSubmit={handleSubmit} className="">
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
                          className="text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full"
                        >
                          <option value="" className="bg-black">
                            Select Service
                          </option>
                          {getServiceOptions().map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-black"
                            >
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
                        <CarSelect
                          cars={cars}
                          handleCarChange={handleCarChange}
                        />
                      </div>

                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Departure
                        </label>

                        <select
                          name="departure"
                          id="departure"
                          className="text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full"
                          value={values.departure}
                          onChange={(e) =>
                            setValues((prevValues) => ({
                              ...prevValues,
                              departure: e.target.value,
                            }))
                          }
                        >
                          <option value="" className="bg-black">
                            Select state
                          </option>
                          <option value="Lagos" className="bg-black">
                            Lagos
                          </option>
                          <option value="Abuja" className="bg-black">
                            Abuja
                          </option>
                          <option value="Port-Harcourt" className="bg-black">
                            Port-Harcourt
                          </option>
                        </select>
                      </div>

                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Pick up date
                        </label>
                        <Space direction="vertical" className="w-full mb-1">
                          <DatePicker
                            onChange={(date, dateString) =>
                              handleInputChange({
                                target: {
                                  name: "pickup_date",
                                  value: dateString,
                                },
                              })
                            }
                            className="w-full text-[#A6A6A6]"
                            disabledDate={(current) =>
                              current && current < dayjs().endOf("day")
                            }
                            // style={{
                            //     backgroundColor: 'transparent',
                            //     color: 'white',
                            // }}
                            // pickerInputClass="custom-datepicker" // Add a custom class for the picker input
                          />
                        </Space>
                      </div>

                      {service === "hourly_rental" && (
                        <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                          <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                            Time Frame
                          </label>
                          <select
                            name="time_frame"
                            id="time_frame"
                            value={values.hours} // Bind to 'hours'
                            onChange={handletime_frameChange}
                            className="text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full"
                          >
                            <option value="" className="bg-black">
                              Select Time
                            </option>
                            {[...Array(12).keys()].map((hour) => (
                              <option
                                key={hour + 1}
                                value={`${hour + 1} hour${hour > 0 ? "s" : ""}`} // Display remains unchanged
                                className="bg-black"
                              >
                                {hour + 1} hour{hour > 0 ? "s" : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Pick up address
                        </label>
                        <input
                          id="pick_up_address"
                          name="pick_up_address"
                          type="text"
                          value={values.pick_up_address}
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
                          id="drop_off_address"
                          name="drop_off_address"
                          type="text"
                          value={values.drop_off_address}
                          onChange={handleInputChange}
                          placeholder="Address"
                          className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                        />
                      </div>

                      {/* Display Price */}
                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Price
                        </label>
                        <p className="text-[#FEBB1B] mt-2">₦ {values.price}</p>
                        {/* {discountedPrice && (
                          <>
                            <label className="block mt-2 mb-2 text-sm text-[#E5E7E8] capitalize">
                              With Discount:
                            </label>
                            <p className="text-[#FEBB1B] mt-2">
                              ₦ {discountedPrice}
                            </p>
                          </>
                        )} */}
                      </div>

                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
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
                          id="phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={handleInputChange}
                          placeholder="+234 123 456 789"
                          className="block w-full py-2 mb-1 text-[#A6A6A6] bg-transparent border-b border-x-transparent border-t-transparent border-gray-200 focus:ring-opacity-40 focus:outline-none focus:ring-transparent"
                        />
                      </div>

                      <div className="flex items-center justify-center">
                        <button
                          type="submit"
                          className="py-3 mt-6 w-3/4 border border-transparent rounded-full font-medium bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] "
                        >
                          Book Now
                        </button>
                      </div>
                    </form>

                    {/* Rental conditions */}
                    <div className="bg-black laptop:hidden block mt-20 text-sm bg-opacity-60 py-6 px-4 ">
                      <h2 className="text-center text-lg underline">
                        Rental conditions:
                      </h2>
                      <p className="tablet:flex justify-between">
                        Please note that our working period is between 6am –6pm.
                      </p>
                      <p className="tablet:flex justify-between">
                        - Normal Overtime Rate (7pm – 12 midnight){" "}
                        <span>N2,000 per hour</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Abnormal Overtime Rate (12 midnight—6 am){" "}
                        <span>N2,500 per hour</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Weekend Allowance <span>N3,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Public holiday allowance <span>N5,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Travel Allowance <span>N4,000 per day</span>
                      </p>
                      <p className="tablet:flex justify-between">
                        - Outstation allowance <span>N10,000 per night</span>
                      </p>
                      <p className="">Toll – pass/Parking Toll is excluded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;

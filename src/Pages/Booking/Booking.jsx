import React, { useState, useEffect } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Times } from "./content";
import Select from "react-select";
import car from "../../assets/Car2.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColorBlocks from "../../assets/color blocks.png";
import { BookingModal } from "./Modal";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const onChange = (date, dateString) => {
  // console.log(date, dateString);
};

const CarSelect = ({ cars, handleCarChange }) => {
  // Function to customize how options are displayed
  const formatOptionLabel = ({ value, label, alt, customAbbreviation }) => (
    <div className="flex items-center">
      <img
        // src={customAbbreviation}
        src={car}
        alt={alt}
        style={{ width: 50, marginRight: 30 }}
      />
      <div>{label}</div>
    </div>
  );

  // Preparing options for react-select
  const options = cars.map((car) => ({
    value: car.id,
    label: `${car.modelName}`,
    // - (${car.status})
    alt: `${car.vehicle_type}`,
    customAbbreviation: car.model_image,
  }));

  return (
    <Select
      options={options}
      onChange={handleCarChange} // Ensure this is connected correctly
      formatOptionLabel={formatOptionLabel}
      placeholder="Select vehicle"
      className="text-[#A6A6A6] cursor-pointer py-1 rounded-sm bg-transparent border-none w-full"
    />
  );
};

const Booking = () => {
  const [service, setService] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [fuelOption, setFuelOption] = useState("");
  const [pickup_time, setpickup_time] = useState("");
  const [drop_off_time, setdrop_off_time] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // State to store the list of cars
  const [cars, setCars] = useState([]);

  // Fetch cars from the API endpoint
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://fms.elsluxuryblackcar.com/api/vehicles"
        );
        if (response.ok) {
          const data = await response.json();
          // Set the list of cars in state
          setCars(data.vehicles);
        } else {
          console.error("Failed to fetch cars:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); // Run only once on component mount

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle_id: "",
    // departure: '',
    pickup_date: "",
    pickup_time: "",
    end_date: "",
    drop_off_time: "",
    pick_up_address: "",
    drop_off_address: "",
    trip_option: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form values before submission:", values); // Check the values before submission

    // Check if any of the fields are empty
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.service ||
      !values.vehicle_id ||
      !values.pickup_date ||
      !values.pickup_time ||
      !values.end_date ||
      !values.drop_off_time ||
      !values.pick_up_address ||
      !values.trip_option
    ) {
      // Display an error toast
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://fms.elsluxuryblackcar.com/api/bookVehicle",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-Key": "pEzfI487GKExKu0BeSOXNqOSYORHzCCj20ZAEQTC4W8=",
            //   "X-API-Key": "api_key",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Handle successful response
        const responseData = await response.json();
        console.log("Booking successful:", responseData);
        setOpenModal(true);
      } else {
        // Handle error response
        console.error("Error:", response.statusText);
        toast.error("Failed to book vehicle");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Fetch error:", error);
      toast.error("Failed to book vehicle");
    }
  };

  const handleCloseModal = () => {
    // Close the modal
    setOpenModal(false);

    // Or Refresh the page
    window.location.reload();
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
      { value: "pickup", label: "Airport Pickup" },
      { value: "rental", label: "Daily Rental" },
    ];
  };

  const getFuelOptions = (service) => {
    return [
      { value: "withFuel", label: "With Fuel" },
      { value: "withoutFuel", label: "Without Fuel" },
    ];
  };

  const handleServiceChange = (event) => {
    const value = event.target.value;
    setService(value);
    setSelectedCar(""); // Reset selectedCar when changing service
    setFuelOption(""); // Reset fuelOption when changing service
    setValues({
      ...values,
      service: value,
      vehicle_id: "", // Reset selectedCar
    });
  };

  const handleCarChange = (selectedOption) => {
    const selectedCarId = selectedOption ? selectedOption.value : null;
    const selectedCar = selectedCarId
      ? cars.find((car) => car.id === selectedCarId)
      : null;

    setValues((prevValues) => ({
      ...prevValues,
      vehicle_id: selectedCarId || "",
      // price: calculatePrice(selectedCar, fuelOption), // Calculate and set the price
      price: calculatePrice(selectedCar, fuelOption).toString(), // Convert price to string
    }));
  };

  const handleFuelOptionChange = (event) => {
    const newFuelOption = event.target.value;
    setFuelOption(newFuelOption);

    const selectedCarId = values.vehicle_id;
    const selectedCar = selectedCarId
      ? cars.find((car) => car.id === selectedCarId)
      : null;

    setValues((prevValues) => ({
      ...prevValues,
      trip_option: newFuelOption,
      // price: calculatePrice(selectedCar, newFuelOption), // Calculate and set the price
      price: calculatePrice(selectedCar, newFuelOption).toString(), // Convert price to string
    }));
  };

  // const handleCarChange = (selectedOption) => {
  //   if (selectedOption) {
  //     const selectedCarId = selectedOption.value;
  //     const selectedCar = cars.find((car) => car.id === selectedCarId);

  //     if (selectedCar) {
  //       // Set the selected car's ID as the vehicle_id in the values state
  //       setValues({
  //         ...values,
  //         vehicle_id: selectedCarId,
  //       });

  //       // Calculate and set the default price based on the selected service and fuel option
  //       calculatePrice(selectedCar, fuelOption);
  //     }
  //   } else {
  //     // Handle cases where no option is selected (e.g., cleared selection)
  //     setValues({
  //       ...values,
  //       vehicle_id: "",
  //     });
  //   }
  // };

  // const handleFuelOptionChange = (event) => {
  //   const value = event.target.value;
  //   setFuelOption(value);

  //   // Calculate and set the price based on the selected car and fuel option
  //   calculatePrice(selectedCar, value);

  //   // Set the trip_option value in the values state
  //   setValues({
  //     ...values,
  //     trip_option: value, // Update trip_option with fuel option value
  //   });
  // };

  const calculatePrice = (selectedCar, fuelOption) => {
    if (!selectedCar) return 0; // If no car is selected, return 0

    let basePrice = 0;

    if (service === "pickup") {
      basePrice =
        fuelOption === "withFuel"
          ? selectedCar.pickup_with_fuel_price
          : selectedCar.pickup_without_fuel_price;
    } else if (service === "rental") {
      basePrice =
        fuelOption === "withFuel"
          ? selectedCar.rental_with_fuel_price
          : selectedCar.rental_without_fuel_price;
    }

    // Only apply discount if fuelOption is set and matches a discount entry
    if (
      fuelOption &&
      selectedCar.has_discount &&
      selectedCar.discount_price[fuelOption]
    ) {
      return selectedCar.discount_price[fuelOption];
    }

    return basePrice;
  };

  // const calculatePrice = (selectedCar, fuelOption) => {
  //   if (selectedCar && service) {
  //     let price;

  //     if (service === "pickup") {
  //       if (fuelOption === "withFuel") {
  //         price = selectedCar.pickup_with_fuel_price;
  //       } else if (fuelOption === "withoutFuel") {
  //         price = selectedCar.pickup_without_fuel_price;
  //       }
  //     } else if (service === "rental") {
  //       if (fuelOption === "withFuel") {
  //         price = selectedCar.rental_with_fuel_price;
  //       } else if (fuelOption === "withoutFuel") {
  //         price = selectedCar.rental_without_fuel_price;
  //       }
  //     }

  //     // Apply discount if available
  //     if (selectedCar.has_discount) {
  //       const discountPrice = selectedCar.discount_price[fuelOption];
  //       setDiscountedPrice(discountPrice);
  //     } else {
  //       setDiscountedPrice(null);
  //     }

  //     setPrice(price);
  //   }
  // };

  const setPrice = (price) => {
    setValues({
      ...values,
      price: price,
    });
  };

  // pickup
  const handlepickup_timeChange = (event) => {
    const value = event.target.value;
    setpickup_time(value);
    // console.log('Pickup Time:', value);
    setValues({
      ...values,
      pickup_time: value,
    });
  };

  // dropoff
  const handledrop_off_timeChange = (event) => {
    const value = event.target.value;
    setdrop_off_time(value);
    // console.log('Dropoff Time:', value);
    setValues({
      ...values,
      drop_off_time: value,
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
      <BookingModal
        openModal={openModal}
        onClose={handleCloseModal}
        values={values}
      />

      <section className="bg-[#0C0C0C] tablet:bg-hero-bg bg-cover bg-center text-white pt-20 laptop:pt-28">
        <div className="pt- min-h-screen laptop:px-12 tablet:px-8 px-4">
          <div className="flex flex-col min-h-screen">
            <div className="container flex flex-col flex-1 py-12 mx-auto">
              <div className="flex-1 laptop:flex laptop:items-cente laptop:-mx-6">
                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 mb-10 laptop:mb-0 laptop:block">
                  <div className="">
                    <div className="laptop:space-y-8 space-y-4 ">
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

                <div className="laptop:w-1/2 laptop:mx-6">
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
                        <p className="text-[#FEBB1B] mt-2">Lagos</p>
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
                        {/* className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                      </div>
                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Pick Up time
                        </label>
                        <select
                          name="pickup_time"
                          id="pickup_time"
                          value={pickup_time}
                          onChange={(event) => handlepickup_timeChange(event)}
                          className="text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full"
                        >
                          <option value="" className="bg-black">
                            Select Time
                          </option>
                          {Times.map((time, index) => (
                            <option
                              key={index}
                              value={time}
                              className="bg-black"
                            >
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          End date
                        </label>
                        <Space direction="vertical" className="w-full mb-1">
                          <DatePicker
                            onChange={(date, dateString) =>
                              handleInputChange({
                                target: { name: "end_date", value: dateString },
                              })
                            }
                            className="w-full text-[#A6A6A6]"
                            disabledDate={(current) =>
                              current && current < dayjs().endOf("day")
                            }
                          />
                        </Space>
                        {/* className='text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full' */}
                      </div>

                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Drop Off time
                        </label>
                        <select
                          name="drop_off_time"
                          id="drop_off_time"
                          value={drop_off_time}
                          onChange={(event) => handledrop_off_timeChange(event)}
                          className="text-[#A6A6A6] uppercase py-1 px-2 rounded-sm bg-transparent border-none w-full"
                        >
                          <option value="" className="bg-black">
                            Select Time
                          </option>
                          {Times.map((time, index) => (
                            <option
                              key={index}
                              value={time}
                              className="bg-black"
                            >
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
                          // trip_option
                          // disabled={!selectedCar}
                          className="text-[#A6A6A6] cursor-pointer py-1 px-2 rounded-sm bg-transparent border-none w-full"
                        >
                          <option value="" className="bg-black">
                            Select Fuel Option
                          </option>
                          {getFuelOptions(service).map((option) => (
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

                      {/* Display Price */}
                      <div className="w-full mt-6 py-2 px-4 rounded-lg bg-[#292D32]">
                        <label className="block mb-2 text-sm text-[#E5E7E8] uppercase">
                          Price
                        </label>
                        <p className="text-[#FEBB1B] mt-2">₦ {values.price}</p>
                        {discountedPrice && (
                          <>
                            <label className="block mt-2 mb-2 text-sm text-[#E5E7E8] capitalize">
                              With Discount:
                            </label>
                            <p className="text-[#FEBB1B] mt-2">
                              ₦ {discountedPrice}
                            </p>
                          </>
                        )}
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

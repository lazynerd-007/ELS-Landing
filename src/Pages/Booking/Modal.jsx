
import { Button, Modal } from 'flowbite-react';

export const BookingModal = ({ openModal, onClose, values }) => {

    // Access and use form values
    console.log(values);

    return (
        <>
            {/* <button onClick={() => setOpenModal(true)}
                className='bg-blue-500 p-2 rounded-lg'>
                Toggle modal
            </button> */}
            <Modal dismissible show={openModal} size="lg" onClose={onClose} className='bg-[#121313] text-white'>
                <Modal.Header>
                    <span className='font-bold text-2xl'>
                        Booking details
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <p className="text-xl text-center leading-relaxed text-black">
                            Great news! Your ride has been successfully booked.
                            A sleek <span className='text-green-500 text-xl'>{values.selectedCar || 'Car'}</span> will
                            be arriving at your location on <span className='text-green-500 text-xl'>{values.pickUpDate || 'Date'}</span> at <span className='text-green-500 text-xl'>{values.pickUpTime || 'Time'}</span> to take you to your destination.
                            Thank you for booking a ride with us. You will be attended to shortly.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex w-full items-center justify-center">
                        <button onClick={onClose} className="py-3 mt-6 w-full border border-transparent font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                            Book Again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

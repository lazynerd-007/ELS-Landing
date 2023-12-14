import React from 'react'
import { Carousel } from 'flowbite-react';


const ImageSlider = () => {
    return (
        <div className="h-80 tablet:hidden">
            <Carousel slideInterval={3000}>
                <img src="https://img.sbtjapan.com/dealercarphoto/DTS4562/f.jpg?v=1691747082&imwidth=640" className="opacity-60" alt="TOYOTA FORTUNER 2019" />
                <img src="https://senda.us/autocraft/avisnew/images/veh_images/1611909034_image_13.jpeg" className="opacity-60" alt="TOYOTA LANDCRUISER 2018" />
                <img src="https://senda.us/autocraft/avisnew/images/veh_images/16135224914image_13.jpeg" className="opacity-60" alt="TOYOTA PRADO 2018" />
                <img src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/02/28/0301_WEB_c_Test_Drive.JPG" className="opacity-60" alt="LEXUS GX 460 2015" />
            </Carousel>
        </div>
    )
}

export default ImageSlider
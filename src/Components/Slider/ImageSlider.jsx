import React from 'react'
import { Carousel } from 'flowbite-react';


const ImageSlider = () => {
    return (
        <div className="h-80 tablet:hidden">
            <Carousel slideInterval={3000}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTROPkHgDyJkGDf_DKpY8fxXTd2YmKnvWHag&usqp=CAU" className="opacity-60" alt="TOYOTA FORTUNER 2019" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmKRwgLH-3Ms0ari546CIGj9eWHYTRSVkSg8DIY8LWjqMJOCCoHcD4LQUQaD5aDUS6KE&usqp=CAU" className="opacity-60" alt="TOYOTA LANDCRUISER VX" />
                <img src="https://senda.us/autocraft/avisnew/images/veh_images/16135224914image_13.jpeg" className="opacity-60" alt="TOYOTA PRADO 2018" />
                <img src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/02/28/0301_WEB_c_Test_Drive.JPG" className="opacity-60" alt="LEXUS GX 460 2015" />
            </Carousel>
        </div>
    )
}

export default ImageSlider
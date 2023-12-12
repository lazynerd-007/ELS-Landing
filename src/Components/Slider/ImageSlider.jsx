import React from 'react'
import { Carousel } from 'flowbite-react';


const ImageSlider = () => {
    return (
        <div className="h-80 tablet:hidden">
            <Carousel slideInterval={3000}>
                <img src="https://pbs.twimg.com/media/F7BVWetXYAAs7wK.jpg" className="opacity-60" alt="" />
                <img src="https://www.victorylotus.com/imagetag/102/2/l/Used-2014-Toyota-RAV4-XLE.jpg" className="opacity-60" alt="" />
                <img src="https://senda.us/autocraft/avisnew/images/veh_images/16135224914image_13.jpeg" className="opacity-60" alt="" />
                <img src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/02/28/0301_WEB_c_Test_Drive.JPG" className="opacity-60" alt="" />
            </Carousel>
        </div>
    )
}

export default ImageSlider
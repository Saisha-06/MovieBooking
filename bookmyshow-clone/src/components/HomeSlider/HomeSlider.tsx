import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;
const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1727710500223_lollapaloozaindia2025web.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1728051098369_hazariwitharrahmanwebshowcase1240x300.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1729169742818_rahulduahorizontalbannergeneric.jpg'
        }
    ])



    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {
                banners.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
                                style={{
                                    objectFit: "cover"
                                }} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default HomeSlider
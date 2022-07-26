import React from 'react'

import { motion } from 'framer-motion'

import { useScroll } from '../useScroll';

import { productsAnimation } from '../Animation'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import './Product.css'

import '../Mobile.css'

const Products = () => {

    const [element, controls] = useScroll()
    return (
        <>

            <div className='Products_container' id='Projects'>
                <div className='Products_heading'>
                    <h2>Check Out My Works</h2>
                </div>
                <motion.div
                    ref={element}
                    animate={controls}
                    variants={productsAnimation}
                    initial="hidden"
                    className="Container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='Card'>
                                <div className='Image'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1BbNczeZWx24hMvYPHsBqF_0HZw1Q_Jk9w&usqp=CAU" alt="" />
                                </div>
                                <div className='Image_contentBox'>
                                    <div className='Image_content'>
                                        <h3>work 1</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Card'>
                                <div className='Image'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1BbNczeZWx24hMvYPHsBqF_0HZw1Q_Jk9w&usqp=CAU" alt="" />
                                </div>
                                <div className='Image_contentBox'>
                                    <div className='Image_content'>
                                        <h3>work 1</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Card'>
                                <div className='Image'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1BbNczeZWx24hMvYPHsBqF_0HZw1Q_Jk9w&usqp=CAU" alt="" />
                                </div>
                                <div className='Image_contentBox'>
                                    <div className='Image_content'>
                                        <h3>work 1</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Card'>
                                <div className='Image'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1BbNczeZWx24hMvYPHsBqF_0HZw1Q_Jk9w&usqp=CAU" alt="" />
                                </div>
                                <div className='Image_contentBox'>
                                    <div className='Image_content'>
                                        <h3>work 1</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </>
    )
}

export default Products
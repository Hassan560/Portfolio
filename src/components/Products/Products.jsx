import React from 'react'

// framer motion
import { motion } from 'framer-motion'

// components
import { useScroll } from '../useScroll';

// animations
import { productsAnimation } from '../Animation'

// react swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// data
import { Projects } from '../../Data'

// mobile css
import '../Mobile.css'

// products css
import './Product.css'

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
                        {
                            Projects.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a href={item.href} target="_blank" rel="noreferrer">
                                        <div className='Card'>
                                            <div className='Image'>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className='Image_contentBox'>
                                                <div className='Image_content'>
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </motion.div>
            </div>
        </>
    )
}

export default Products
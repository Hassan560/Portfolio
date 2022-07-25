import React from 'react'

// banner logo
import bannerLogo from '../../Assets/Img/BannerLogo.png'

import { motion } from 'framer-motion'

// banner css
import './Banner.css'

import '../Mobile.css'

import { titleAnimation, imageAnimation } from '../Animation'

const Banner = () => {
    return (
        <div className='banner_container' id='Home'>
            <div className='banner_leftSide'>
                <motion.h2
                    variants={titleAnimation}
                    initial='hidden'
                    animate='visible'>
                    Welcome to my portfolio My name is <br /> <span>
                        Syed Hassan Hussain
                    </span> </motion.h2>
                <div>
                    <motion.div
                        variants={titleAnimation}
                        initial='hidden'
                        animate='visible'
                        className='banner_btn'>
                        <button>Download CV</button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={imageAnimation}
                initial='hidden'
                animate='visible'
                className="banner_rightSide">
                <img src={bannerLogo} alt="" />
            </motion.div>
        </div>
    )
}

export default Banner
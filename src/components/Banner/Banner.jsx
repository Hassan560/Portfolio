import React from 'react'

// banner logo
import bannerLogo from '../../Assets/Img/BannerLogo.png'

// framer motion
import { motion } from 'framer-motion'

// animation
import { titleAnimation, imageAnimation } from '../Animation'

// resume pdf
import Resume from '../../Assets/Img/Resume.pdf'

// react scroll
import { Link } from 'react-scroll'

// mobile css
import '../Mobile.css'

// banner css
import './Banner.css'


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
                <motion.div
                    variants={titleAnimation}
                    initial='hidden'
                    animate='visible'
                    className='banner_btn'>
                    <a href={Resume} download>
                        <button className='btn1'>Download CV</button>
                    </a>
                    <Link
                        to="Projects"
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='transition-all duration-300'
                    >
                        <button className='btn2'>See Projects</button>
                    </Link>
                </motion.div>
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
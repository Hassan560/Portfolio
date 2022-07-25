import React from 'react'
import { Link } from 'react-scroll'
import { navigation } from '../../Data'

// motion framer
import { motion } from 'framer-motion'

// mobile css
import '../Mobile.css'
import './Nav.css'


const Nav = () => {
    return (
        <div className="nav">
            <ul>
                {
                    navigation.map((item, index) => {
                        return (
                            <motion.li key={index}
                                whileHover={{ scale: 1.3, color: '#fd6c4d' }}
                                whileTap={{ scale: 1.3 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link
                                    to={item.href}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className='transition-all duration-300'
                                >{item.name}</Link>
                            </motion.li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
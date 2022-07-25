import React, { useEffect, useState } from 'react'

import './Header.css'

// components
import Nav from '../Nav/Nav'
import NavMobile from '../NavMobile/NavMobile'
import { Link } from 'react-scroll'

const Header = () => {
    // changing navbar color state 
    const [navbarColor, setNavbarColor] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <header className={navbarColor ? 'head active' : 'head'}>
            <div className='header_container'>
                <Link
                    to='Home'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='transition-all duration-300'>
                    <h1 className='header_container_head'>
                        Portfolio
                    </h1>
                </Link>
                <Nav />
                <NavMobile />
            </div>
        </header>
    )
}

export default Header
import React, { useState } from 'react'

// react icons
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'

// data
import { navigation } from '../../Data'

// react scroll
import { Link } from 'react-scroll'

// framer motion
import { motion } from 'framer-motion'

// mobile css
import './NavMobile.css'

const NavMobile = () => {

  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <div className='navmobile'>
      <div className='menu_bar' onClick={showSideBar}>
        <HiMenuAlt3 size={35} />
      </div>
      <div className={sideBar ? 'nav_menu active' : 'nav_menu'}>
        <ul className='nav_menu_items' onClick={showSideBar}>
          <li className='navbar_toggle' >
            <HiOutlineX size={35} />
          </li>
          {
            navigation.map((elem, index) => (
              <motion.li
                whileHover={{ scale: 1.3, color: '#fd6c4d' }}
                whileTap={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={index} className="nav_text">
                <Link
                  onClick={showSideBar}
                  to={elem.href}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='transition-all duration-300'>
                  {elem.name}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
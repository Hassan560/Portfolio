import React, { useState } from 'react'

import './NavMobile.css'


import { motion } from 'framer-motion'

import { Link } from 'react-scroll'

import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";


// import { menuVariants } from '../Animation'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 60,
      }
    }
  }
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }
  return (
    <div className="navmobile">
      {/* menu icon */}
      <div onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
        <HiMenuAlt3 size={35} />
      </div>
      {/* circle */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        style={{ width: '16px', height: "16px", backgroundColor: 'aqua', position: 'fixed', top: 0, right: 0, borderRadius: 9999 }}
      >
      </motion.div>
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}

  >
      </motion.ul>
      <div onClick={() => setIsOpen(false)} style={{ cursor: 'pointer', position: 'absolute', top: 8, right: 8 }}>
        <HiOutlineX size={35} />
      </div>
    </div>
  )
}

export default NavMobile
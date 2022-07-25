import React from 'react'


import { motion } from 'framer-motion'

import { titleAnimation, reactAnimation, reduxAnimation, javascriptAnimation, firebaseAnimation, mernAnimation } from '../Animation'

import { useScroll } from '../useScroll'

import './Personal.css'

import '../Mobile.css'

const Personal = () => {

  const [element, controls] = useScroll()

  return (
    <motion.div
      ref={element}
      animate={controls}
      initial="hidden"
      className='personal_container'
      id="About"
    >
      <div className='Education_container'>
        <div className='Education_leftSide'>
          <h2>EDUCATION</h2>
          <hr />
        </div>
        <div
          className='Education_rightSide'>
          <div className='Education_content'>
            <motion.h2
              variants={titleAnimation}
              initial='hidden'
              animate={controls}>St Paul's English High School, Karachi</motion.h2>
            <motion.p
              variants={titleAnimation}
              initial='hidden'
              animate={controls}>Matriculation.Nov 2019</motion.p>
          </div>
          <div className='Education_content2'>
            <motion.h2
              variants={titleAnimation}
              initial='hidden'
              animate={controls}>S.M Commerce College, Karachi</motion.h2>
            <motion.p
              variants={titleAnimation}
              initial='hidden'
              animate={controls}>Intermediate.Nov 2019</motion.p>
          </div>
        </div>
      </div>
      <div className='Work_container'>
        <div className='Work_leftSide'>
          <h2>WORK</h2>
          <hr />
        </div>
        <div className='Work_rightSide'>
          <motion.h2
            variants={titleAnimation}
            initial='hidden'
            animate={controls}>Bootcamp in Expertizo, Karachi</motion.h2>
          <motion.p
            variants={titleAnimation}
            initial='hidden'
            animate={controls}>Frontend Developer.June 2022</motion.p>
        </div>
      </div>
      <div className='Skills_container'>
        <div className='Skills_rightSide'>
          <h2>SKILLS</h2>
          <hr />
        </div>
        <div className='Skills_leftSide'>
          <div className='Skills_content'>
            <motion.p
              variants={titleAnimation}
              initial='hidden'
              animate={controls}>My Programming Language Proficiency</motion.p>
          </div>
          <div className='Skills_content2'>
            <div>
              <h2>ReactJs</h2>
              <div className='Reactjs'>
                <motion.div
                  variants={reactAnimation}
                  initial='hidden'
                  animate={controls}
                  className='Reactjs_content'></motion.div>
              </div>
            </div>
            <div>
              <h2>Javascript</h2>
              <div className='Javascript'>
                <motion.div
                  variants={javascriptAnimation}
                  initial='hidden'
                  animate={controls}
                  className='Javascript_content'></motion.div>
              </div>
            </div>
            <div>
              <h2>Redux</h2>
              <div className='Redux'>
                <motion.div
                  variants={reduxAnimation}
                  initial='hidden'
                  animate={controls}
                  className='Redux_content'></motion.div>
              </div>
            </div>
            <div>
              <h2>MERN Stack</h2>
              <div className='Mern'>
                <motion.div
                  variants={mernAnimation}
                  initial='hidden'
                  animate={controls}
                  className='Mern_content'></motion.div>
              </div>
            </div>
            <div>
              <h2>Firebase</h2>
              <div className='Firebase'>
                <motion.div
                  variants={firebaseAnimation}
                  initial='hidden'
                  animate={controls}
                  className='Firebase_content'></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Personal
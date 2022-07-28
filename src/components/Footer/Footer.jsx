import React from 'react'

// data
import { social } from '../../Data'

// mobile css
import '../Mobile.css'

// footer css
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer_container'>
            <div className='Footer_social'>
                {
                    social.map((elem, index) => {
                        const { icon, href } = elem
                        return (
                            <span className='social' key={index}>
                                <a href={href}  target="_blank" rel="noreferrer">
                                    {icon}
                                </a>
                            </span>
                        )
                    })
                }
            </div>
            <div className='Footer_content'>
                Made by <br /> <span>Syed Hassan Hussain</span>
            </div>
        </div>
    )
}

export default Footer
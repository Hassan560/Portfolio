
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

// navigation 

export const navigation = [
    {
        name: 'Home',
        href: 'Home',
    },
    {
        name: 'About',
        href: 'About',
    },
    {
        name: 'Projects',
        href: 'Projects',
    },
    {
        name: 'Contact',
        href: 'Contact',
    }
]

// products 

export const Projects = [
    {
        image: "https://i.postimg.cc/xjp7PgkX/Capture.png",
        title: "Reactjs Website And Responsive Using Firebase",
        href: "https://marketing-website-334a6.web.app/"
    },
    {
        image: "https://i.postimg.cc/zf7Srncs/Capture2.png",
        title: "Reactjs Quiz App Using Scrollbar With Funtionality",
        href: "https://chic-arithmetic-87dd8a.netlify.app/"
    },
]

// social 

export const social = [
    {
        icon: <FaFacebookF size={25} />,
        href: "https://www.facebook.com/syedhassan.hussain.96"
    },
    {
        icon: <FaGithub size={25} />,
        href: "https://github.com/Hassan560"
    },
    {
        icon: <FaLinkedinIn size={25} />,
        href: 'https://www.linkedin.com/in/syed-hassan-hussain-15a40720a/'
    },
    {
        icon: <FaInstagram size={25} />,
        href: 'https://www.instagram.com/s.hassan__1/'
    }
]
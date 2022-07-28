import React from 'react'

// components
import ContactForm from './ContactForm';

// contactlogo
import ContactLogo from '../../Assets/Img/ContactLogo.png'

// react toast
import { ToastContainer } from 'react-toastify';

// mobile css
import '../Mobile.css'

// contact css
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='Contact_container' id='Contact'>
        <div className='Contact_heading'>
          <h1>Get in touch with me</h1>
        </div>
        <div className='Contact_content'>
          <div className="Contact_leftside">
            <ContactForm />
          </div>
          <div className="Contact_rightside">
            <img src={ContactLogo} alt="contactImg" />
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
      <div className='Contact_details'>
        <div className='Contact_details_head'>
          <h2>
            Contact Details
          </h2>
        </div>
        <div className='Contact_details_content'>
          <h3>Syed Hassan Hussian</h3>
          <h3>Saddar,Karachi</h3>
          <h3>0314-2329334</h3>
          <h3>syedhassanhussain001@gmail.com</h3>
        </div>
      </div>
    </>
  )
}

export default Contact
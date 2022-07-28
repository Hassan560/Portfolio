import React, { useState } from 'react'

// material ui
import { Button, TextField } from '@mui/material'

// emailjs
import emailjs from '@emailjs/browser'

// react toast
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    // loading state
    const [loading, setLoading] = useState(false)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const inputValue = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    // submit form in emailjs
    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        if (!userData.name || !userData.email || !userData.message) {
            toast.error(`Sorry , there were some error 😮`)
        } else {
            emailjs.sendForm('service_pcnj91e', 'template_vzrc29a', e.target, 'UE22SX1rItu1C9EpI')
                .then(
                    (result) => {
                        setLoading(false)
                        toast.success(`we've received your message`)
                        setUserData({
                            name: "",
                            email: "",
                            message: ""
                        })
                    }, (error) => {
                        setLoading(false)
                        toast.error(error.text)
                    }
                )
        }
    }

    return (
        <form autoComplete='off' onSubmit={submitForm}>
            <TextField
                type='text'
                name='name'
                required
                value={userData.name}
                onChange={inputValue}
                className='text'
                label="Name"
                variant="outlined" />
            <TextField
                type='email'
                name='email'
                required
                value={userData.email}
                onChange={inputValue}
                label="Email"
                variant="outlined" />
            <TextField
                multiline
                name='message'
                required
                value={userData.message}
                onChange={inputValue}
                label="Message"
                variant="outlined" />
            <Button
                type="submit"
                style={{ backgroundColor: '#FD6C4D', color: 'white', fontWeight: 'bold' }}>{loading ? 'loading...' : 'Submit Form'}</Button>
        </form>
    )
}

export default ContactForm
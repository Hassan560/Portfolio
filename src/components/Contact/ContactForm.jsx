import React, { useState } from 'react'

// material ui
import { Button, TextField } from '@mui/material'

import { styled } from '@mui/material/styles'

// emailjs
import emailjs from '@emailjs/browser'

// react toast
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


// textfield css
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FD6C4D',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FD6C4D',
    },
    '& .MuiInputLabel-root': {
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#FD6C4D',
        },
        '&:hover fieldset': {
            borderColor: '#FD6C4D',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FD6C4D',
        },
        '& input': {
            color: 'white'
        },
        '& textarea': {
            color: 'white'
        },
    },
});


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
            <CssTextField
                type='text'
                label="Name"
                name='name'
                value={userData.name}
                onChange={inputValue}
                required />
            <CssTextField
                type='email'
                label="Email"
                name='email'
                value={userData.email}
                onChange={inputValue}
                required />
            <CssTextField
                multiline
                label="Message"
                name='message'
                value={userData.message}
                onChange={inputValue}
                required />
            <Button
                type="submit"
                style={{ backgroundColor: '#FD6C4D', color: 'white', fontWeight: 'bold' }}>{loading ? 'loading...' : 'Submit Form'}</Button>
        </form>
    )
}

export default ContactForm
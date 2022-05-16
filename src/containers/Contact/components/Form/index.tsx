import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import './index.scss'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

//todo: change recaptcha domain when deployed

type FormState = {
    email: string
    name: string
    message: string
}
type ServiceMessage = {
    class: string
    text: string
}

const Form = () => {
    const initialFormState = {
        email: '',
        name: '',
        message: '',
    }

    const [formState, setFormState] = useState<FormState>(initialFormState)
    const [submitting, setSubmitting] = useState<boolean>(false)
    const [message, setMessage] = useState<ServiceMessage>()
    const [recaptchaToken, setRecaptchaToken] = useState<string>()

    const recaptchaKey = '6Lfc0fAfAAAAAElDAnpK0CFXmKS6HiBaHq1H5QG8'
    const recaptchaRef = useRef<any>()

    const formID = 'yWTzTy3u'
    const formSparkURL = `https://submit-form.com/${formID}`
    const submitForm = async (event: FormEvent) => {
        event.preventDefault()
        setSubmitting(true)
        await postSubmission()
        setSubmitting(false)
    }
    const postSubmission = async () => {
        const payload = {
            ...formState,
            'g-recaptcha-response': recaptchaToken,
        }
        try {
            const result = await axios.post(formSparkURL, payload)
            setMessage({
                class: 'result-message success',
                text: 'Form submitted successfully. I will get back to you as soon as possible!',
            })
            setFormState(initialFormState)
            recaptchaRef.current.reset()
        } catch (error) {
            setMessage({
                class: 'result-message failed',
                text: 'There was an error. Please try again or email directly to connorgawley@uvic.ca',
            })
        }
    }

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target
        const formKey = id as keyof FormState
        const updatedFormState = { ...formState }
        updatedFormState[formKey] = value
        setFormState(updatedFormState)
    }

    const updateRecaptchaToken = (token: string | null) => {
        setRecaptchaToken(token as string)
    }

    return (
        <div className={message ? 'form message-show' : 'form'}>
            {message && <div className={message.class}>{message.text}</div>}
            <form onSubmit={submitForm}>
                <div className='name'>
                    <input
                        type='text'
                        id='name'
                        className='name-input'
                        value={formState.name}
                        onChange={updateFormControl}
                        placeholder='Name'
                        required
                    />
                </div>
                <div className='email'>
                    <input
                        type='text'
                        id='email'
                        className='email-input'
                        value={formState.email}
                        onChange={updateFormControl}
                        placeholder='Email'
                        required
                    />
                </div>
                <div className='message'>
                    <textarea
                        className='message-input'
                        id='message'
                        onChange={updateFormControl}
                        value={formState.message}
                        placeholder='Your message'
                        rows={1}
                        required></textarea>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    onChange={updateRecaptchaToken}
                    className='recaptcha'></ReCAPTCHA>
                <button disabled={submitting} className='submit-button'>
                    {submitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Form

import { useState } from 'react';
import '../assets/css/Contact.css';
import SpanDivider from './SpanDivider';

function Contact(props) {

    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
    const [formLoading, setFormLoading] = useState(false)

    const checkContactForm = () => {
        if (contactForm.name.length < 8) {
            props.alertFunction('Error', 'Name too short!')
            return false
        }
        if (contactForm.email.length < 12) {
            props.alertFunction('Error', 'Enter valid email please!')
            return false
        }
        if (contactForm.message.length < 8) {
            props.alertFunction('Error', 'Invalid message or to short!')
            return false
        }
        return true
    }

    const handleForm = (key, value) => {
        setContactForm((contactForm) => ({ ...contactForm, [key]: value }))
    }


    function sendMail() {
        setFormLoading(true)
        setTimeout(() => {
            if (!checkContactForm()) {
                setFormLoading(false)

                return
            }
            props.alertFunction('Success', 'Email sended successfully!')
        }, 1500)

    }


    const copyToBoard = (e) => {
        navigator.clipboard.writeText(e.target.innerText).then(function () {
            props.alertFunction('Success', 'Copying to clipboard was successful!')
        }, function (err) {
            props.alertFunction('Error', 'Could not copy text: ', err)
        });
    }

    return (
        <div id='contact' className="Contact">
            <section className='contactContent'>
                <div className='contactInfo'>
                    <div className='contactTitle'>
                        <h1>
                            <SpanDivider textArray="Get a quote" />
                        </h1>
                        <p>
                            Fill up the form and our Team will get back to you within 24 hours.
                        </p>

                    </div>
                    <div className='contactData'>
                        <div className='contactDataItem' onClick={(e) => copyToBoard(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                            </svg>

                            <p>+54 2267 XXXXXX</p>
                        </div>
                        <div className='contactDataItem' onClick={(e) => copyToBoard(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>


                            <p>alanhoffer2012@gmail.com</p>
                        </div>
                        <div className='contactDataItem' onClick={(e) => copyToBoard(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>


                            <p>Buenos Aires, St 7 236</p>
                        </div>
                    </div>
                    <div className='contactSocial'>
                        <a target="_blank" className='contactSocialItem' href='https://github.com/alanhoffer/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </a>
                        <a target="_blank" className='contactSocialItem' href='https://www.linkedin.com/in/alan-hoffer/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 50 50" height="1em">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
                        </a>
                        <a target="_blank" className='contactSocialItem' href='https://github.com/alanhoffer/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="1em" viewBox="0 0 512 512"><path d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" /></svg>
                        </a>
                    </div>
                </div >
                <div className='contactForm'>

                    <div className='contactFormName'>
                        <p> Your Name</p>
                        <input type='text' onChange={(e) => { handleForm('name', e.target.value) }} value={contactForm.name} />
                    </div>
                    <div className='contactFormEmail'>
                        <p> Email </p>
                        <input type='email' onChange={(e) => { handleForm('email', e.target.value) }} value={contactForm.email} />
                    </div>
                    <div className='contactFormMessage'>
                        <p> Message</p>
                        <textarea placeholder='Message' onChange={(e) => { handleForm('message', e.target.value) }} value={contactForm.message} />
                    </div>
                    <div className='contactFormSubmit' onClick={() => sendMail('Test Name', "alanhoffer97@hotmail.com", 'Test Subject', 'Test Message')}>

                        <a href={$`mailto:alanhoffer2012@gmail.com?subject = ${contactForm.name + contactForm.email} = Message ${contactForm.message}`} value="Send" > {formLoading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : 'Send'}</a>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Contact;

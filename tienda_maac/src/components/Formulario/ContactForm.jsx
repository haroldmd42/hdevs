import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { onInputForm } from './InputForm';
import { useRef } from 'react';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Mensaje enviado con éxito');
          console.log(result.text);
        },
        (error) => {
          alert('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
          console.log(error.text);
        }
      );
  };

  return (
    <div> <h1>Contact Form</h1> <form className='cf'> <div className='half left cf'> <input type='text' placeholder='Name' name='user_name' /> <input type='email' placeholder='Email address' name='user_email' /> </div> <div className='half right cf'> <textarea name='message' type='text' placeholder='Message'></textarea> </div> <input type='submit' value='Submit' id='input-submit' /> </form> </div> );

}

export default ContactForm;
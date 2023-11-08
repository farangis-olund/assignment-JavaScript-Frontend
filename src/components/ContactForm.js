import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState('')

  const form = useFormik({

    initialValues: {
      Name: '',
      Email: '',
      Message: ''
    },

    validationSchema: Yup.object({
      
      Name: Yup.string()
        .required('Name is required')
        .min(2, 'Name should contain at least two symbols')
        .matches(/^[a-zA-Z\s]*$/, 'Invalid Name'),
      
      Email: Yup.string()
        .required('Email is required')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address'),
      
      Message: Yup.string()
        .required('Message is required')
        .min(2, 'Message should contain at least two symbols')
      }),

    onSubmit: async (values, { resetForm }) => {
      
      try {
        const response = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values) })
  
        if (response.status === 200) {
          setSubmissionStatus('Success! Your message has been sent.');
          resetForm();
        } else {
          throw new Error("Request failed with status: " + response.status)
        }
      } catch (error) {
        console.error(error)
        setSubmissionStatus('An error occurred while sending the message.')
      }
    }
  
  })
 
  return (
    <div className="contacts">
      <div className="container section-padding">
        <h2>Leave us a message<br></br>for any information.</h2>
        <form onSubmit={form.handleSubmit} className="contact-form" noValidate>
          <div id="alert" 
            className={submissionStatus === 'Success! Your message has been sent.' ? 'alert-success' : 
            submissionStatus ? 'alert-warning' : ''}>
            {submissionStatus}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="Name"
              value={form.values.Name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={(form.touched.Name && form.errors.Name) ? 'error-input' : ''}
              placeholder="Name*"
            />
            <span className="error">{(form.touched.Name && form.errors.Name)}</span>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={form.values.Email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={form.touched.Email && form.errors.Email  ? 'error-input' : ''}
              placeholder="Email*"
            />
            <span className="error">{form.touched.Email && form.errors.Email}</span>
          </div>
          
          <div className="form-group">
            <textarea
              name="Message"
              value={form.values.Message}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={form.touched.Message && form.errors.Message ? 'error-input' : ''}
              cols="30"
              rows="5"
              placeholder="Message*"
            ></textarea>
            <span className="error">{form.touched.Message && form.errors.Message}</span>
          </div>
          
          <div id="btn-submit" className="form-group">
            <button className="btn-yellow btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm

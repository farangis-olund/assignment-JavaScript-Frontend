import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });
  const [errors, setErrors] = useState({})
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newErrors = { ...errors }

    if (name === 'Name') {
      if (!value.trim()) {
        newErrors.Name = 'Name is required'
      } else if (value.length < 2) {
        newErrors.Name = 'Name should be at least 2 letters'
      } else if (!/^[a-zA-Z\s]*$/.test(value)) {
        newErrors.Name = 'Invalid Name (should not contain numbers or special characters)'
      } else {
        delete newErrors.Name
      }
    } else if (name === 'Email') {
      if (!value.trim() || !validateEmail(value)) {
        newErrors.Email = 'Invalid email address'
      } else {
        delete newErrors.Email
      }
    } else if (name === 'Message') {
      if (!value.trim()) {
        newErrors.Message = 'Message is required'
      } else {
        delete newErrors.Message
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Form submission validation
    const newErrors = {}
    if (!formData.Name.trim()) {
      newErrors.Name = 'Name is required'
    } else if (!/^[a-zA-Z\s]*$/.test(formData.Name)) {
      newErrors.Name = 'Invalid Name'
    }
    if (!formData.Email.trim() || !validateEmail(formData.Email)) {
      newErrors.Email = 'Invalid email address'
    }
    if (!formData.Message.trim()) {
      newErrors.Message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        if (response.status === 200) {
          setSubmissionStatus('Success! Your message has been sent.')
        } else {
          throw new Error("Request failed with status: " + response.status)
        }
      } catch (error) {
        console.error(error)
        setSubmissionStatus('An error occurred while sending the message.')
      }
    }
  }

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email);
  }

  return (
    <div className="contacts">
      <div className="container section-padding">
        <h2>Leave us a message<br></br>for any information.</h2>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div id="alert" className={submissionStatus === 'Success! Your message has been sent.' ? 'alert-success' : submissionStatus ? 'alert-warning' : ''}>
            {submissionStatus}
        </div>

          <div className="form-group">
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className={errors.Name ? 'error-input' : ''}
              placeholder="Name*"
            />
            <span className="error">{errors.Name}</span>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              className={errors.Email ? 'error-input' : ''}
              placeholder="Email*"
            />
            <span className="error">{errors.Email}</span>
          </div>
          <div className="form-group">
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleInputChange}
              className={errors.Message ? 'error-input' : ''}
              cols="30"
              rows="5"
              placeholder="Message*"
            ></textarea>
            <span className="error">{errors.Message}</span>
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

export default ContactForm;

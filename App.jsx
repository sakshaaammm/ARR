import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p><strong>Phone:</strong> [Your Phone Number]</p>
        <p><strong>Email:</strong> [Your Gmail Address]</p>
      </div>

      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;


import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        {/* Contact Info (Left Side) */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>You can reach me by filling out the contact form below. I’ll get back to you as soon as possible. Thank you for visiting my portfolio!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email icon" />
              <p>buddhirathnayaka94@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>+94789856090</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Samanella Road, Maningamuwa, Maho.</p>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-right"
        >
          {/* Hidden access key */}
          <input type="hidden" name="access_key" value="bbd62768-d7ad-4840-aa8a-d7461e4404eb" />

          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

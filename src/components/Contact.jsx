import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    setStatus('Submitting...');

    try {
      const response = await fetch("https://formspree.io/f/xzdywjnb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Error');
      }
    } catch (error) {
      setStatus('Error');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <span className="section-subtitle reveal-element">Get In Touch</span>
        <h2 className="section-title reveal-element delay-100" style={{ marginBottom: '2rem' }}>Let's Work Together</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <p className="reveal-element delay-200">
              Currently available for freelance opportunities and exciting new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-item reveal-element delay-300">
              <h4>Email</h4>
              <p><a href='mailto:devanshgupte444@gmail.com'>devanshgupte444@gmail.com </a></p>
            </div>
            
            <div className="contact-item reveal-element delay-400">
              <h4>Location</h4>
              <p>Madhya Pradesh, India</p>
            </div>
          </div>
          
          <form className="contact-form reveal-element delay-300" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="btn" disabled={status === 'Submitting...'}>
              {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'Success' && <p style={{ color: '#4ade80', marginTop: '1rem', fontFamily: 'Poppins' }}>Message sent successfully!</p>}
            {status === 'Error' && <p style={{ color: '#f87171', marginTop: '1rem', fontFamily: 'Poppins' }}>Oops! There was a problem submitting your form.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'mixers',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Industrial Submission logic goes here
    console.log("Submitting Project Specs to Philorenda Operations:", formData);
    alert(`Thank you ${formData.fullName}. Your engineering request has been sent to our production floor!`);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-grid">
        
        {/* Left Side: Structural Operations Info */}
        <div className="contact-info-panel">
          <span className="section-tagline">PROJECT ESTIMATES</span>
          <h2>Request a Production Estimate</h2>
          <p className="contact-intro">
            Submit your structural blueprints, structural dimensions, or machinery order quantities. Our engineering estimators review incoming tickets within 24 business hours.
          </p>

          <div className="info-cards-stack">
            <div className="info-card">
              <div className="info-icon">🏢</div>
              <div className="info-text">
                <h3>Main Office & Foundry</h3>
                <p>Kariobangi North, Plot 14, Manufacturing District</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Direct Sales Line</h3>
                <p>(+254) 726 471 291(Mon - Sat, 7AM - 5PM)</p>
               
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Procurement Email</h3>
                <p>estimates@philorenda.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Request Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name / Company Representative</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="form-row-split">
              <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="j.doe@company.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+1 (555) 000-0000" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Target Production Line</label>
              <select 
                id="category" 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
              >
                <option value="mixers">Concrete Mixers Series</option>
                <option value="blocks">Block Production Machinery</option>
                <option value="windows">Metallic Windows / Windows Framing</option>
                <option value="doors">Reinforced Security Doors</option>
                <option value="gates">Steel Sliding/Swing Gates</option>
                <option value="molds">Custom Engineering Molds</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Scope & Specifications</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                placeholder="Describe product capacity requirements, dimensional profiles, or custom design request parameters..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-quote">
              Transmit Specifications
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
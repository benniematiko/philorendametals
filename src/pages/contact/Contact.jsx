import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceType: 'laser-cutting',
    materialType: 'carbon-steel',
    specs: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RFQ Submitted Project Specs:', formData);
    // Integrate email or backend endpoint dispatch protocols here
  };

  return (
    <section id="contact" className="rfq-section">
      <div className="rfq-container">
        
        {/* Left Panel: Manufacturing Thresholds */}
        <div className="rfq-info">
          <span className="section-tagline">PROCUREMENT & ESTIMATION</span>
          <h2>Submit Engineering <br />Specifications</h2>
          <p className="rfq-description">
            Upload your CAD/DXF/STEP schematics or detail your processing requirements. Our engineering estimating team reviews files within 4–8 business hours.
          </p>

          <div className="specs-metrics">
            <div className="metric-row">
              <span className="metric-label">Max Sheet Capacity:</span>
              <span className="metric-value">3000mm × 1500mm</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Precision Tolerance:</span>
              <span className="metric-value">± 0.1mm (Linear)</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">Welding Compliance:</span>
              <span className="metric-value">AWS D1.1 / EN 1090</span>
            </div>
          </div>

          <div className="direct-channels">
            <h4>Direct Engineering Channels</h4>
            <p>Estimating Desk: <span>estimates@pmwfab.co.ke</span></p>
            <p>Production Facility: <span>Nairobi, Industrial Area</span></p>
          </div>
        </div>

        {/* Right Panel: Premium Interactive RFQ Form */}
        <div className="rfq-form-wrapper">
          <form onSubmit={handleSubmit} className="rfq-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g., Eng. Ben Munyiri" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organization</label>
                <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="Entity Name" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Corporate Email Address</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@company.com" />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="serviceType">Primary Process Required</label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
                  <option value="laser-cutting">CNC Laser Profiling</option>
                  <option value="heavy-welding">Structural Welded Assembly</option>
                  <option value="precision-bending">CNC Form Pressing</option>
                  <option value="turnkey-fab">Full Turnkey Fabrication</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="materialType">Material Specification</label>
                <select id="materialType" name="materialType" value={formData.materialType} onChange={handleChange}>
                  <option value="carbon-steel">Carbon Steel Grade S275/S355</option>
                  <option value="stainless">Stainless Steel (304 / 316)</option>
                  <option value="aluminum">Aluminum Alloy (6000 Series)</option>
                  <option value="other">Other / Custom Superalloy</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specs">Project Scope & Material Thickness (mm)</label>
              <textarea id="specs" name="specs" rows="4" value={formData.specs} onChange={handleChange} placeholder="Provide target batch quantity, plate thickness metrics, design details, or drawing drive URLs..."></textarea>
            </div>

            <button type="submit" className="rfq-submit-btn">
              Dispatch RFQ to Engineering Desk
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
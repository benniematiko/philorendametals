import React from 'react';
import './ActionSection.css';

const ActionSection = () => {
  return (
    <section id="cta-action" className="action-section">
      <div className="action-overlay"></div>
      <div className="action-container">
        <div className="action-content">
          <span className="action-tagline">READY TO BEGIN PRODUCTION?</span>
          <h2>Have a Custom Engineering or Fabrication Project?</h2>
          <p>
            Whether you need a fleet of heavy-duty diesel concrete mixers, custom architectural structural window framings, or industrial steel gates built to exact dimensions—our manufacturing floor is equipped to deliver precision.
          </p>
        </div>
        <div className="action-buttons">
          <a href="#contact" className="btn-action-primary">
            Get an Instant Quote
          </a>
          <a href="tel:+123456789" className="btn-action-secondary">
            Speak to an Engineer
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
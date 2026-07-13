import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'structural',
      title: 'Warehouse I-Beam Framework',
      metric: '420 Tons Truss Structure',
      alloy: 'Grade S355 Carbon Steel',
      imageText: 'Structural Steel Frame Setup'
    },
    {
      id: 2,
      category: 'architectural',
      title: 'Laser-Cut Commercial Facade',
      metric: '±0.2mm Clean Edge Precision',
      alloy: 'Grade 5052 Marine Aluminum',
      imageText: 'Geometric Facade Panels'
    },
    {
      id: 3,
      category: 'industrial',
      title: 'Heavy Hopper & Silo Assemblies',
      metric: 'Pressure Tested Welds (AWS D1.1)',
      alloy: '316L Stainless Steel Plating',
      imageText: 'Industrial Processing Silo'
    },
    {
      id: 4,
      category: 'structural',
      title: 'High-Load Equipment Platforms',
      metric: 'Fully Modular Bolt-Up Design',
      alloy: 'Galvanized Structural Steel',
      imageText: 'Heavy Duty Mezzanine Platform'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        
        <div className="portfolio-header">
          <div>
            <span className="section-tagline">CASE STUDIES</span>
            <h2>Executed Operations</h2>
          </div>
          
          {/* Suave Technical Filter Menu */}
          <div className="portfolio-filters">
            <button className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('all')}>All Systems</button>
            <button className={activeFilter === 'structural' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('structural')}>Structural Steel</button>
            <button className={activeFilter === 'architectural' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('architectural')}>Architectural Facades</button>
            <button className={activeFilter === 'industrial' ? 'filter-btn active' : 'filter-btn'} onClick={() => setActiveFilter('industrial')}>Industrial Plant</button>
          </div>
        </div>

        {/* Dynamic Project Layout Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">
                {/* Visual Anchor representing architectural blueprint styles */}
                <div className="blueprint-grid-overlay"></div>
                <span className="placeholder-text">{project.imageText}</span>
              </div>
              <div className="project-details">
                <span className="project-alloy">{project.alloy}</span>
                <h3>{project.title}</h3>
                <div className="project-spec-badge">
                  <span className="spec-label">Capacity Delta:</span>
                  <span className="spec-val">{project.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
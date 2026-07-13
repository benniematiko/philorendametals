import React from 'react';
import heroBg from '../../assets/hero.png';

import './Home.css';

// Import images from assets folder
import Mixer350 from "../../assets/mixer.png";
import Sheller350 from "../../assets/sheller.png";

const Home = () => {
  // 1. Structural Categories Config Matrix (Used for the quick anchor navigation links)
  const categories = [
    { id: 'mixers', label: 'Concrete Mixers', short: 'Machinery', imgText: 'Mixer' },
    { id: 'blocks', label: 'Block Machines', short: 'Production', imgText: 'Block' },
    { id: 'windows', label: 'Metallic Windows', short: 'Architectural', imgText: 'Window' },
    { id: 'doors', label: 'Security Doors', short: 'Fabrication', imgText: 'Door' },
    { id: 'gates', label: 'Steel Gates', short: 'Perimeter', imgText: 'Gate' },
    { id: 'molds', label: 'Custom Molds', short: 'Engineering', imgText: 'Mold' }
  ];

  // 2. Full Catalog Database Matrix
  const productCatalog = {
    mixers: [
      { 
        name: "PMW-350L Diesel Engine Mixer", 
        detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
        price: "$4,850.00",
        image: Mixer350
      },
      { 
        name: "PMW-500L Electric Site Mixer", 
        detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching.",
        price: "$6,200.00",
        image: Sheller350
      },
      { 
        name: "PMW-750L Heavy Duty Mixer", 
        detail: "Industrial-grade mixer with reinforced drum and advanced hydraulic system for large-scale projects.",
        price: "$8,950.00",
        image: ""
      }
    ],
    blocks: [
      { 
        name: "Manual Drop-Egg Layer System", 
        detail: "High-yield mobile setup for structural 9x9x18 block units. Low maintenance costs.",
        price: "$3,450.00",
        image: ""
      },
      { 
        name: "Hydraulic Multi-Cavity Static Press", 
        detail: "Stationary production machine built for high-density paving blocks and solid foundation bricks.",
        price: "$12,750.00",
        image: ""
      }
    ],
    windows: [
      { 
        name: "T-Section Steel Casement Units", 
        detail: "Heavy gauge iron frames complete with integrated burglarproofing bars and brass fastener points.",
        price: "$2,850.00",
        image: ""
      },
      { 
        name: "Modern Architectural Slimline Framing", 
        detail: "Premium clean-line steel profiles pre-treated for maximum weather protection and aesthetic integration.",
        price: "$3,400.00",
        image: ""
      }
    ],
    doors: [
      { 
        name: "Reinforced Single-Leaf Anti-Burglar Door", 
        detail: "Heavy sheets over custom skeletal framework, featuring multi-point heavy deadbolt locking channels.",
        price: "$4,250.00",
        image: ""
      },
      { 
        name: "Double-Leaf Commercial Facility Shutter", 
        detail: "Industrial-grade double door set up tailored with heavy hinges and overhead escape configurations.",
        price: "$7,800.00",
        image: ""
      }
    ],
    gates: [
      { 
        name: "Heavy Structural Sliding Gate Assembly", 
        detail: "Constructed with solid structural frames and heavy rollers, optimized for automation systems.",
        price: "$5,600.00",
        image: ""
      },
      { 
        name: "Ornate Classical Swing Gate Set", 
        detail: "Hand-forged detailing panels combined with structural square tubes for maximum perimeter resilience.",
        price: "$6,950.00",
        image: ""
      }
    ],
    molds: [
      { 
        name: "Pre-Cast Culvert Ring Steel Shuttering", 
        detail: "Interlocking heavy plate mold configurations optimized for uniform culvert production runs.",
        price: "$9,200.00",
        image: ""
      },
      { 
        name: "Custom Column & Fencing Post Molds", 
        detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
        price: "$3,850.00",
        image: ""
      }
    ]
  };

  return (
    <div className="home-page">
      
      {/* --- HERO BANNER SECTION --- */}
      <section 
        id="home" 
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-badge">
            <span className="badge-pulse"></span> Industrial Grade Metal Fabrication
          </div>
          <h1 className="hero-title">
            Philorenda Metal Works
          </h1>
          <p className="hero-subtitle">
            A premium Engineering & Machinery Manufacturing. From high-output construction machinery to custom architectural fittings. Built with premium materials, engineered for long-term production resilience.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Request Quote</a>
            <a href="#catalog-explore" className="btn-secondary">Explore Catalog</a>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE CATEGORIES INDEX PLATFORM --- */}
      <section id="catalog-explore" className="catalog-section">
        <div className="section-container">
          
          <div className="section-header">
            <span className="section-tagline">PRODUCT PLATFORM</span>
            <h2>Our Manufacturing Categories</h2>
          </div>

          {/* Anchor Nav Links Matrix */}
          <div className="categories-circular-grid">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#section-${cat.id}`}
                className="category-circle-card"
              >
                <div className="circle-image-wrapper">
                  <div className="circle-blueprint-overlay"></div>
                  <span className="circle-placeholder-text">{cat.imgText}</span>
                </div>
                <div className="circle-card-meta">
                  <span className="cat-short-tag">{cat.short}</span>
                  <h3>{cat.label}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* Sequential E-Commerce Row Display */}
          <div className="sequential-catalog-wrapper">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                id={`section-${cat.id}`} 
                className="catalog-display-panel"
              >
                <div className="panel-header-badge">
                  <span className="category-row-tag">{cat.short} Series</span>
                  <h2>{cat.label} Collection</h2>
                </div>
                
                <div className="product-cards-grid">
                  {productCatalog[cat.id].map((product, index) => (
                    <div key={index} className="product-card">
                      <div className="product-image-container">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="product-image" />
                        ) : (
                          <div className="blueprint-fallback-placeholder">
                            <span>Image Specifications Pending</span>
                          </div>
                        )}
                        <div className="product-badge">{index + 1}</div>
                      </div>
                      <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.detail}</p>
                        <div className="product-price">{product.price}</div>
                        <div className="product-actions">
                          <button className="btn-order-now">Order Now</button>
                          <button className="btn-place-order">Place Order</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
     
    </div>
  );
};

export default Home;
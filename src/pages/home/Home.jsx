import React from 'react';
import ActionSection from '../../components/actionsection/ActionSection';
import ContactSection from '../../components/contactsection/ContactSection';
import heroBg from '../../assets/hero.png';

import './Home.css';

// Import images from assets folder
import Mixer350 from "../../assets/mixer.png";
import Sheller350 from "../../assets/sheller.png";
import Block from "../../assets/block.png";
import Block2 from "../../assets/block2.png";
import Cabros from "../../assets/cabros.png";
import Colors from "../../assets/colors.png";
import Culvert from "../../assets/culvert.png";
import CulvertMold from "../../assets/culvertmold.png";
import FeedMix from "../../assets/feedmix.png";

import SecurityDoor1 from "../../assets/steeldoor.png"; 
import SecurityDoor2 from "../../assets/steeldoors1.png"; 

import SlidingGate from "../../assets/zigzagcabromold.png"; 
import SwingGate from "../../assets/vibratingtable.png";  

const Home = () => {
  // 1. Structural Categories Config Matrix (Now featuring mapped image objects)
  const categories = [
    { id: 'mixers', label: 'Concrete Mixers', short: 'Machinery', image: Mixer350 },
    { id: 'blocks', label: 'Block Machines', short: 'Production', image: Block },
    { id: 'windows', label: 'Metallic Windows', short: 'Architectural', image: Cabros },
    { id: 'doors', label: 'Security Doors', short: 'Fabrication', image: SecurityDoor1 },
    { id: 'gates', label: 'Steel Gates', short: 'Perimeter', image: SlidingGate },
    { id: 'molds', label: 'Custom Molds', short: 'Engineering', image: CulvertMold }
  ];

  // 2. Full Catalog Database Matrix
  const productCatalog = {
    mixers: [
      { 
        name: "PMW-350L Diesel Engine Mixer", 
        detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
        price: "Kshs 4,850.00",
        image: Mixer350
      },
      { 
        name: "PMW-500L Electric Site Mixer", 
        detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching.",
        price: "Kshs 6,200.00",
        image: Sheller350
      },
      { 
        name: "PMW-750L Heavy Duty Mixer", 
        detail: "Industrial-grade mixer with reinforced drum and advanced hydraulic system for large-scale projects.",
        price: "Kshs 8,950.00",
        image: FeedMix 
      }
    ],
    blocks: [
      { 
        name: "Manual Drop-Egg Layer System", 
        detail: "High-yield mobile setup for structural 9x9x18 block units. Low maintenance costs.",
        price: "Kshs 3,450.00",
        image: Block
      },
      { 
        name: "Hydraulic Multi-Cavity Static Press", 
        detail: "Stationary production machine built for high-density paving blocks and solid foundation bricks.",
        price: "Kshs 12,750.00",
        image: Block2
      }
    ],
    windows: [
      { 
        name: "T-Section Steel Casement Units", 
        detail: "Heavy gauge iron frames complete with integrated burglarproofing bars and brass fastener points.",
        price: "Kshs 2,850.00",
        image: Cabros 
      },
      { 
        name: "Modern Architectural Slimline Framing", 
        detail: "Premium clean-line steel profiles pre-treated for maximum weather protection and aesthetic integration.",
        price: "Kshs 3,400.00",
        image: Colors 
      }
    ],
    doors: [
      { 
        name: "Reinforced Single-Leaf Anti-Burglar Door", 
        detail: "Heavy sheets over custom skeletal framework, featuring multi-point heavy deadbolt locking channels.",
        price: "Kshs 4,250.00",
        image: SecurityDoor1
      },
      { 
        name: "Double-Leaf Commercial Facility Shutter", 
        detail: "Industrial-grade double door set up tailored with heavy hinges and overhead escape configurations.",
        price: "Kshs 7,800.00",
        image: SecurityDoor2
      }
    ],
    gates: [
      { 
        name: "Heavy Structural Sliding Gate Assembly", 
        detail: "Constructed with solid structural frames and heavy rollers, optimized for automation systems.",
        price: "Kshs 5,600.00",
        image: SlidingGate 
      },
      { 
        name: "Ornate Classical Swing Gate Set", 
        detail: "Hand-forged detailing panels combined with structural square tubes for maximum perimeter resilience.",
        price: "Kshs 6,950.00",
        image: SwingGate 
      }
    ],
    molds: [
      { 
        name: "Pre-Cast Culvert Ring Steel Shuttering", 
        detail: "Interlocking heavy plate mold configurations optimized for uniform culvert production runs.",
        price: "Kshs 9,200.00",
        image: CulvertMold
      },
      { 
        name: "Custom Column & Fencing Post Molds", 
        detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
        price: "Kshs 3,850.00",
        image: Culvert
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

          {/* Updated Rounded/Circular Grid with Image Backgrounds and Text Overlays */}
          <div className="categories-circular-grid">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#section-${cat.id}`}
                className="category-circle-card"
              >
                <div className="circle-image-wrapper">
                  {/* Category Background Image */}
                  <img src={cat.image} alt={cat.label} className="circle-bg-image" />
                  
                  {/* Deep Dark Overlay to ensure readability */}
                  <div className="circle-blueprint-overlay"></div>
                  
                  {/* Content positioned on top of the image */}
                  <div className="circle-overlay-content">
                    <span className="cat-short-tag">{cat.short}</span>
                    <h3 className="category-overlay-title">{cat.label}</h3>
                  </div>
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
                      
                      {/* Product Image Window Component */}
                      <div className="product-image-container">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="product-image" />
                        ) : (
                          <div className="blueprint-fallback-placeholder">
                            <span>Image Specifications Pending</span>
                          </div>
                        )}
                        
                        {/* Absolute bottom text overlay wrapper */}
                        <div className="home-image-text-overlay">
                          <span className="home-overlay-delivery">Free delivery within Nairobi</span>
                          <span className="home-overlay-brand">A product of PMW</span>
                        </div>

                        {/* Top-Right Premium Status Indicator */}
                        <div className="product-orange-status">
                          PMW Certified
                        </div>
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

      <ActionSection />
      <ContactSection />
     
    </div>
  );
};

export default Home;
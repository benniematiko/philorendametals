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

import Grill from "../../assets/grill.png";

import SecurityDoor1 from "../../assets/steeldoor.png"; 
import SecurityDoor2 from "../../assets/steeldoor1.png"; 

import SlidingGate from "../../assets/zigzagcabromold.png"; 
import SwingGate from "../../assets/vibratingtable.png";  

import PostMold10Feet from "../../assets/postmold10feet.png";  
import PostMold8Feet from "../../assets/postmold8feet.png";  
import Sheller1 from "../../assets/sheller.png"; 

import Wheel1 from "../../assets/wheel1.png";  
import Doors1 from "../../assets/steeldoor1.png";  
import Window from "../../assets/window.png";  

const Home = () => {
  // 1. Structural Categories Config Matrix (Expanded with 6 new categories)
  const categories = [
    { id: 'mixers', label: 'Concrete Mixers', short: 'Machinery', image: Mixer350 },
    { id: 'blocks', label: 'Block Machines', short: 'Production', image: Block },
    { id: 'windows', label: 'Metallic Windows', short: 'Architectural', image: Cabros },
    { id: 'loovers', label: 'Industrial Louvres', short: 'Ventilation', image: Colors },
    { id: 'doors', label: 'Security Doors', short: 'Fabrication', image: SecurityDoor1 },
    { id: 'gates', label: 'Steel Gates', short: 'Perimeter', image: SlidingGate },
    { id: 'cabros', label: 'Cabro Blocks & Paving', short: 'Masonry', image: Cabros },
    { id: 'table', label: 'Vibrating Tables', short: 'Compaction', image: SwingGate },
    { id: 'molds', label: 'Custom Molds', short: 'Engineering', image: CulvertMold },
    { id: 'wheelbarrow', label: 'Heavy Duty Wheelbarrows', short: 'Transport', image: FeedMix },
    { id: 'crusher', label: 'Industrial Crushers', short: 'Milling', image: Sheller350 },
    { id: 'plodder', label: 'Extrusion Plodders', short: 'Manufacturing', image: PostMold10Feet }
  ];

  // 2. Full Catalog Database Matrix (All categories mapped perfectly)
  const productCatalog = {
    mixers: [
      { 
        name: "PMW-350L Diesel Engine Mixer Concrete Mixer Machine 350L", 
        detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque Lister Petter type engine.",
        price: "Kshs 380,000.00",
        image: Mixer350
      },
      { 
        name: "PMW-500L Electric Site Mixer", 
        detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching.",
        price: "Price Available Upon request",
        image: Mixer350
      },
      { 
        name: "PMW-750L Heavy Duty Mixer", 
        detail: "Industrial-grade mixer with reinforced drum and advanced hydraulic system for large-scale projects.",
        price: "Price Available Upon request",
        image: Mixer350
      }
    ],
    blocks: [
      { 
        name: "Manual Drop-Egg Layer System", 
        detail: "High-yield mobile setup for structural 9x9x18 block units. Low maintenance costs.",
        price: "Kshs 220,000.00",
        image: Grill
      },
      { 
        name: "Grill Vent", 
        detail: "Grill vent mold",
        price: "Kshs 4,700.00",
        image: Grill
      },
      { 
        name: "Interlock Block Machine", 
        detail: "Interlocking block making machine.",
        price: "Kshs 60,000.00",
        image: Block
      },
      { 
        name: "Interlock Block Machine", 
        detail: "Interlocking block making machine.",
        price: "Kshs 60,000.00",
        image: Block2
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
        name: "Steel Windows", 
        detail: "Security windows.",
        price: "Kshs 10,000.00",
        image: Window
      },
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
    loovers: [
      {
        name: "Heavy Gauge Metal Air Louvre Systems",
        detail: "Optimized fixed-blade ventilation shutters for factories, warehouses, and structural substations.",
        price: "Kshs 4,500.00",
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
        name: "Steel Doors", 
        detail: "Security doors.",
        price: "Kshs 15,000.00",
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
    cabros: [
      {
        name: "Heavy-Duty Interlocking Cabro Blocks",
        detail: "High-density concrete paving units manufactured for heavy-traffic driveways and commercial logistics yards.",
        price: "Kshs 1,200.00 / SqM",
        image: Cabros
      }
    ],
    table: [
      {
        name: "Industrial Concrete Vibrating Table",
        detail: "High-frequency compaction platform optimized for air-bubble removal in pre-cast cabros, posts, and blocks.",
        price: "Kshs 85,000.00",
        image: SwingGate
      }
    ],
    molds: [
      { 
        name: "Pre-Cast Culvert Ring Steel Shuttering", 
        detail: "Interlocking heavy plate mold configurations optimized for uniform culvert production runs.",
        price: "Price Available Upon request",
        image: CulvertMold
      },
      { 
        name: "Culvert Mold 900mm", 
        detail: "Used for making concrete culverts",
        price: "Kshs 65,000.00",
        image: CulvertMold
      },
      { 
        name: "Culvert Mold 600mm", 
        detail: "Used for making concrete culverts",
        price: "Kshs 40,000.00",
        image: CulvertMold
      },
      { 
        name: "Custom Column & Fencing Post Molds", 
        detail: "Precision dimension templates engineered to cast crisp, structural load-bearing concrete modules.",
        price: "Price Available Upon request",
        image: Culvert
      },
      { 
        name: "Post Mold 10 Feet", 
        detail: "Mold for creating concrete fencing post.",
        price: "Kshs 11,000.00",
        image: PostMold10Feet
      },
      { 
        name: "Post Mold 8 Feet", 
        detail: "Mold for creating concrete fencing post.",
        price: "Kshs 10,000.00",
        image: PostMold8Feet
      },
      { 
        name: "Maize Sheller", 
        detail: "Used fro shelling maize seeds from its corn..",
        price: "Kshs 55,000.00",
        image: Sheller1
      }
    ],
    wheelbarrow: [
      {
        name: "PMW Deep-Tray Construction Wheelbarrow",
        detail: "Reinforced pan sheet with heavy structural tubing handles, built for site concrete and aggregative haulage.",
        price: "Price Available Upon request",
        image: ""
      },
      {
        name: "Wheel Barrow",
        detail: "Wheel barrow.",
        price: "Kshs 6,000.00",
        image: Wheel1
      }
    ],
    crusher: [
      {
        name: "High-Output Aggregate Mechanical Crusher",
        detail: "Heavy duty impact blades engineered to break down raw industrial substances with uniform sizing outputs.",
        price: "Price Available Upon request",
        image: ""
      },
      {
        name: "Tone Gold Crusher",
        detail: "Heavy duty impact blades engineered to break down raw industrial substances with uniform sizing outputs.",
        price: "Kshs 350,000.00",
        image: FeedMix
      }
    ],
    plodder: [
      {
        name: "Industrial Extrusion Plodder Assembly",
        detail: "Refining and extrusion machine designed with continuous feed compression worms for manufacturing processes.",
        price: "Price Available Upon request",
        image: ""
      },
      {
        name: "Soap Plodder Big size",
        detail: "Makes bar soaps.",
        price: "Kshs 260,000.00",
        image: ""
      }
    ]
  };

  // WhatsApp Redirect Handler
  const handlePlaceOrder = (productName, productPrice) => {
    // Replace with Philorenda's actual WhatsApp line (Keep international format prefix, no '+')
    const phoneNumber = "+254726471291"; 
    
    // Check if price is custom or dynamic
    const priceText = productPrice.toLowerCase().includes("request") 
      ? "Price available upon request" 
      : productPrice;

    // Build the WhatsApp message template
    const message = `Hello Philorenda Metal Works,\n\nI would like to place an order/inquire about the following product:\n\n*Product:* ${productName}\n*Price:* ${priceText}\n\nPlease let me know about delivery arrangements and payment details. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
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

          {/* Dynamic Circular Grid Layout */}
          <div className="categories-circular-grid">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#section-${cat.id}`}
                className="category-circle-card"
              >
                <div className="circle-image-wrapper">
                  <img src={cat.image} alt={cat.label} className="circle-bg-image" />
                  <div className="circle-blueprint-overlay"></div>
                  <div className="circle-overlay-content">
                    <span className="cat-short-tag">{cat.short}</span>
                    <h3 className="category-overlay-title">{cat.label}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Sequential Row Display Framework */}
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
                  {productCatalog[cat.id] && productCatalog[cat.id].map((product, index) => (
                    <div key={index} className="product-card">
                      
                      <div className="product-image-container">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="product-image" />
                        ) : (
                          <div className="blueprint-fallback-placeholder">
                            <span>Image Specifications Pending</span>
                          </div>
                        )}
                        
                        <div className="home-image-text-overlay">
                          <span className="home-overlay-delivery">Free delivery within Nairobi</span>
                          <span className="home-overlay-brand">A product of PMW</span>
                        </div>

                        <div className="product-orange-status">
                          PMW Certified
                        </div>
                      </div>

                      <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.detail}</p>
                        <div className="product-price">{product.price}</div>
                        <div className="product-actions">
                          <button 
                            className="btn-order-now"
                            onClick={() => handlePlaceOrder(product.name, product.price)}
                          >
                            Order Now
                          </button>
                          <button 
                            className="btn-place-order"
                            onClick={() => handlePlaceOrder(product.name, product.price)}
                          >
                            Place Order
                          </button>
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
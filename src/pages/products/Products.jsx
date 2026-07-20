import React, { useState, useMemo } from 'react';
import './Products.css';

// Import asset files matching the product catalog matrix
import Mixer350 from "../../assets/mixer.png";
import Sheller350 from "../../assets/sheller.png";
import Mixer750 from "../../assets/mixer750.png";
import Square1 from "../../assets/square.png";
import Zigzag1 from "../../assets/zigzagcabromold.png";
import Feedmix from "../../assets/feedmix.png";
import Grill from "../../assets/grill.png";
import Inter1 from "../../assets/inter.png";
import Paving1 from "../../assets/paving.png";
import SlidingGate from "../../assets/steeldoor.png";
import CulvertMold from "../../assets/culvertmold.png";
import PostMold10Feet from "../../assets/postmold10feet.png"; 

const Products = () => {
  // Reactive Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Target phone number formatted for global WhatsApp API execution
  const WHATSAPP_NUMBER = "+254700000000"; // Replace with your actual business number

  // Verified Complete Product Database
  const fullProductsMatrix = useMemo(() => [
    { 
      id: "mix-350",
      category: "mixers",
      name: "PMW-350L Diesel Engine Mixer", 
      specs: { capacity: "1-Bag Mix", power: "Lister Petter Type Diesel", weight: "380 kg" },
      detail: "Heavy-duty steel drum, 1-bag capacity, powered by a high-torque mechanical start engine optimized for rough site conditions.",
      price: "Kshs 380,000.00",
      image: Mixer350,
      availability: "In Stock"
    },
    { 
      id: "mix-500",
      category: "mixers",
      name: "PMW-500L Electric Site Mixer", 
      specs: { capacity: "2-Bag Mix", power: "Three-Phase 5HP Motor", weight: "510 kg" },
      detail: "Three-phase electric motor setup engineered for stationary high-volume commercial concrete batching operations.",
      price: "Kshs 6,200.00",
      image: Sheller350,
      availability: "3 Days Lead Time"
    },
    { 
      id: "mix-750",
      category: "mixers",
      name: "PMW-750L Heavy Duty Mixer", 
      specs: { capacity: "3-Bag Mix", power: "Hydraulic Diesel Combo", weight: "740 kg" },
      detail: "Industrial-grade mixer with reinforced alloy drum structural framing and advanced hydraulic tip control configurations.",
      price: "Kshs 8,950.00",
      image: Mixer750,
      availability: "Built to Order"
    },
    { 
      id: "blk-drop",
      category: "blocks",
      name: "Manual Drop-Egg Layer System", 
      specs: { output: "900 Units / Day", moldSize: "9x9x18 inches", operation: "Manual Lever" },
      detail: "High-yield mobile mechanical drop layout for structural block units. Low maintenance overhead, perfect for decentralized fabrication.",
      price: "Kshs 3,450.00",
      image: Paving1,
      availability: "In Stock"
    },
    { 
      id: "blk-hyd",
      category: "blocks",
      name: "Hydraulic Multi-Cavity Static Press", 
      specs: { output: "3,200 Units / Day", pressure: "160 Bar Hydraulic", operation: "Semi-Automated" },
      detail: "Stationary heavy production matrix machine built for high-density interlocking paving blocks and solid foundation bricks.",
      price: "Kshs 12,750.00",
      image: Grill,
      availability: "6 Weeks Production"
    },
    { 
      id: "win-case",
      category: "windows",
      name: "T-Section Steel Casement Units", 
      specs: { gauge: "14-Gauge Profile", security: "Integrated Bars", glass: "Fits 5mm-8mm" },
      detail: "Heavy gauge iron frames complete with integrated burglarproofing bars, cold-rolled weather seals, and brass fastener hinges.",
      price: "Kshs 2,850.00",
      image: Feedmix,
      availability: "In Stock"
    },
    { 
      id: "win-slim",
      category: "windows",
      name: "Modern Architectural Slimline Framing", 
      specs: { gauge: "16-Gauge Slim", security: "High-Tensile Internal", glass: "Double-Glaze Ready" },
      detail: "Premium clean-line steel architectural profiles pre-treated with zinc chromate primer for maximum weather protection.",
      price: "Kshs 3,400.00",
      image: Zigzag1,
      availability: "Custom Dimensions"
    },
    { 
      id: "door-sec",
      category: "doors",
      name: "Reinforced Single-Leaf Anti-Burglar Door", 
      specs: { cladding: "3mm Steel Plate", lock: "4-Way Deadbolt System", finish: "Powder Coated" },
      detail: "Heavy cladding sheets over structural framework, featuring internal anti-cut armor channels and reinforced hinge points.",
      price: "Kshs 4,250.00",
      image: Square1,
      availability: "In Stock"
    },
    { 
      id: "gate-slide",
      category: "gates",
      name: "Heavy Structural Sliding Gate Assembly", 
      specs: { track: "Solid Ground V-Track", core: "4x4 inch Frame", automation: "Ready Layout" },
      detail: "Constructed with massive structural perimeter profiles and heavy guide wheels, structurally balanced for external automation gear.",
      price: "Kshs 5,600.00",
      image: SlidingGate,
      availability: "Custom Layout Only"
    },
    { 
      id: "mold-cul",
      category: "molds",
      name: "Pre-Cast Culvert Ring Steel Shuttering", 
      specs: { diameter: "900mm Standard", plate: "6mm Heavy Plate", lock: "Tapered Pins" },
      detail: "Heavy-duty interlocking structural wall mold assemblies optimized for repeatable, uniform drainage concrete casting.",
      price: "Kshs 9,200.00",
      image: CulvertMold,
      availability: "2 Weeks Lead Time"
    }
  ], []);

  // Live Parsing Computation Engine
  const processedProducts = useMemo(() => {
    return fullProductsMatrix.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             item.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.id.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, fullProductsMatrix]);

  // Compiles product details and redirects user to WhatsApp
  const handleWhatsAppRedirect = (product) => {
    const specsString = Object.entries(product.specs)
      .map(([key, val]) => `• ${key.toUpperCase()}: ${val}`)
      .join('\n');

    const message = `Hello, I would like to request the full Blueprint Specs package for the following model:\n\n` +
                    `📦 *Model Name:* ${product.name}\n` +
                    `🆔 *Catalog ID:* ${product.id.toUpperCase()}\n` +
                    `💰 *Price Estimate:* ${product.price}\n` +
                    `⚡ *Availability Status:* ${product.availability}\n\n` +
                    `*Technical Metrics:* \n${specsString}\n\n` +
                    `Please share the detailed engineering sizing options and deployment requirements.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="products-page">
      
      {/* HEADER HERO CONTEXT */}
      <div className="products-hero-banner">
        <div className="products-hero-container">
          <span className="banner-tag">PRODUCTION OPERATIONS INDEX</span>
          <h1>Industrial Inventory Catalog</h1>
          <p>Browse engineered specifications, structural dimensions, and direct hardware models ready for deployment.</p>
        </div>
      </div>

      <div className="products-dashboard-layout">
        <div className="dashboard-container">
          
          {/* SEARCH CONTROL STATION */}
          <div className="control-station-panel">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search models, item specs, or mechanical components..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dashboard-search-bar"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
              )}
            </div>
          </div>

          {/* DYNAMIC RESULTS READOUT SUMMARY */}
          <div className="results-meta-row">
            <p>Showing <strong>{processedProducts.length}</strong> industrial units match your criteria</p>
            {searchQuery && <span className="active-filter-pill">Search: "{searchQuery}"</span>}
          </div>

          {/* GRID INVENTORY INTERFACE */}
          {processedProducts.length > 0 ? (
            <div className="inventory-dashboard-grid">
              {processedProducts.map((product) => (
                <div key={product.id} className="inventory-spec-card">
                  
                  {/* Card Visual Head */}
                  <div className="inventory-visual-box">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="inventory-raw-img" />
                    ) : (
                      <div className="inventory-blueprint-mesh">
                        <div className="mesh-icon">📐</div>
                        <span>Specification Model: {product.id.toUpperCase()}</span>
                      </div>
                    )}
                    <span className={`status-tag ${product.availability.toLowerCase().replace(/\s+/g, '-')}`}>
                      {product.availability}
                    </span>
                  </div>

                  {/* Card Data Body */}
                  <div className="inventory-data-core">
                    <span className="inventory-cat-indicator">{product.category}</span>
                    <h2 className="inventory-item-title">{product.name}</h2>
                    <p className="inventory-item-desc">{product.detail}</p>

                    {/* Labeled Engineering Specs List */}
                    <div className="technical-specs-table">
                      <h4>Engineering Metrics:</h4>
                      <div className="specs-inline-grid">
                        {Object.entries(product.specs).map(([key, val]) => (
                          <div key={key} className="spec-metric-row">
                            <span className="metric-label">{key}:</span>
                            <span className="metric-val">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Matrix & Callout Controls */}
                    <div className="inventory-footer-pricing">
                      <div className="price-tag-wrap">
                        <span className="pricing-label">FOB Estimate</span>
                        <h3 className="currency-readout">{product.price}</h3>
                      </div>
                      <div className="inventory-action-group">
                        <button 
                          onClick={() => handleWhatsAppRedirect(product)} 
                          className="btn-spec-quote"
                        >
                          Blueprint Specs
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* EMPTY FILTER CONFIGURATION STATE */
            <div className="empty-inventory-state">
              <div className="empty-warning-graphic">⚠️</div>
              <h3>No Engineering Matrix Found</h3>
              <p>No machinery matching those specific descriptors is logged in active inventory.</p>
              <button 
                className="reset-dashboard-btn"
                onClick={() => setSearchQuery('')}
              >
                Reset System Query
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Products;
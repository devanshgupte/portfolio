import React from 'react';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <span className="section-subtitle reveal-element">What I Do</span>
        <h2 className="section-title reveal-element delay-100">My Services</h2>
        
        <div className="services-grid">
          <div className="glass-card reveal-element delay-100">
            <div className="service-icon">💻</div>
            <h3>Full-Stack Web Apps</h3>
            <p>Custom-built, responsive web applications utilizing PHP, React, and robust MySQL database architectures.</p>
          </div>
          
          <div className="glass-card reveal-element delay-200">
            <div className="service-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Cross-platform mobile applications built with React Native (Expo) for seamless Android and iOS experiences.</p>
          </div>
          
          <div className="glass-card reveal-element delay-300">
            <div className="service-icon">⚙️</div>
            <h3>WordPress & CMS</h3>
            <p>Premium, highly-optimized WordPress websites tailored for corporate branding and high-conversion lead generation.</p>
          </div>

        <div className="glass-card reveal-element delay-400">
  <div className="service-icon">🔄</div>
  <h3>Platform Migrations</h3>
  <p>Seamless, zero-downtime migrations for websites, legacy databases, and web applications to modern, high-performance servers and architectures.</p>
</div>
        </div>
      </div>
    </section>
  );
}
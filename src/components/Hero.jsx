import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="status-badge reveal-element">
            <span className="status-dot"></span>
            Available for Freelance Projects
          </div>
          <h1 className="reveal-element delay-100">
          Transforming Ideas Into <span>High-Performing</span> Apps
          </h1>
          <p className="reveal-element delay-200">
            I'm Devansh Gupte, a Full-Stack Developer with 2.5+ years of expertise in high-performance Web Apps, Mobile Apps, AI Integrations, and Enterprise Architecture.
          </p>
          <div className="btn-group reveal-element delay-300">
            <a href="#work" className="btn">Explore My Work</a>
            <a href="#contact" className="btn btn-outline">Start a Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
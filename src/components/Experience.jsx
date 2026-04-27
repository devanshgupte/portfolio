import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-subtitle reveal-element">My Journey</span>
        <h2 className="section-title reveal-element delay-100">Experience</h2>
        
        <div className="timeline">    
          
          <div className="timeline-item reveal-element delay-300">
            <span className="timeline-date">2025 - Present</span>
            <h3>Freelance Full Stack Dev</h3>
            <p className="timeline-company">Independent</p>
            <p>Developed and deployed a comprehensive School ERP application (iOS/Android). Engineered backend family ledger systems, automated result portals, and integrated AI voice assistants for student data retrieval.</p>
          </div>

          <div className="timeline-item reveal-element delay-400">
            <span className="timeline-date">2023-2024</span>
            <h3>Jr. Full Stack Dev</h3>
            <p className="timeline-company">Multidots</p>
            <p>Built responsive websites, designed database schemas, and created custom plugins/themes to meet specific client requirements across various industries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
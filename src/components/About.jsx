import React from 'react';

export default function About() {
  const skills = ["PHP", "React Native", "JavaScript", "MySQL", "WordPress", "Node.js", "REST APIs", "Cloudflare", "CSS", "HTML"];

  return (
    <section id="about">
      <div className="container">
        <span className="section-subtitle reveal-element">Who I Am</span>
        <h2 className="section-title reveal-element delay-100">About Me</h2>
        
        <div className="grid-2-col">
          <div className="about-text">
            <p className="reveal-element delay-200">
  I am a full-stack developer dedicated to building high-performance digital solutions. With a strong foundation in both frontend interfaces and backend architectures, I help businesses transform their ideas into functional, scalable products.
</p>
<p className="reveal-element delay-300">
  I lead projects ranging from corporate lead-generation websites to complex educational ERP systems and innovative AI voice integrations. My focus is always on writing clean code, optimizing performance, and delivering exceptional user experiences.
</p>
          </div>
          
          <div className="about-skills reveal-element delay-400">
            <h3>Core Technologies</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images so Vite processes the paths correctly for GitHub Pages
import ssvnerpImg from '../assets/ssvnerp.png';
import ssvnImg from '../assets/ssvn.png';
import vsnImg from '../assets/vsn.png';
import secondhomeImg from '../assets/secondhome.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const allProjects = [
    {
      id: 1,
      category: 'Real-World',
      type: 'Full Stack Mobile & Web',
      title: 'School Management ERP',
      desc: 'Comprehensive educational management system built from the ground up, featuring a mobile app and custom family ledger integration.',
      tech: ['PHP', 'MySQL', 'React Native'],
      image: ssvnerpImg
    },
    {
      id: 2,
      category: 'Real-World',
      type: 'Web Development',
      title: 'Shri Sai Vidhya Niketan Higher Secondary School',
      desc: 'A complete digital transformation featuring a high-performance web presence, streamlined administrative portals, and optimized student information access.',
      tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
      image: ssvnImg
    },
     {
      id: 3,
      category: 'Real-World',
      type: 'Web Development',
      title: 'VSN NGO',
      desc: 'A performance-optimized platform developed to streamline outreach, manage campaigns, and significantly enhance the organization\'s digital footprint.',
      tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
      image: vsnImg
    },
     {
      id: 4,
      category: 'Real-World',
      type: 'Web Development',
      title: 'Second Home Restaurant',
      desc: 'A highly responsive, conversion-focused website tailored for a local dining establishment, designed to drive customer engagement and inquiries.',
      tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
      image: secondhomeImg
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter((project) => project.category === activeTab);

  return (
    <section id="work">
      <div className="container">
        <span className="section-subtitle reveal-element">Portfolio</span>
        <h2 className="section-title reveal-element delay-100">Selected Work</h2>

        <div className="project-tabs reveal-element delay-200">
          {['All', 'Real-World', 'Demos'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <Link key={project.id} to={`/project/${project.id}`} className={`project-link reveal-element active delay-${(index % 3 + 1) * 100}`}>
              <div className="project-card glass-card">
                <img src={project.image} alt={project.title} className="project-img" />
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
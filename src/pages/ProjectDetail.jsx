import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Import images so Vite processes the paths correctly
import ssvnerpImg from '../assets/ssvnerp.png';
import ssvnImg from '../assets/ssvn.png';
import vsnImg from '../assets/vsn.png';
import secondhomeImg from '../assets/secondhome.png';

const projectsData = {
  1: {
    title: 'School Management ERP',
    type: 'Full Stack Mobile & Web',
    role: 'Lead Full-Stack Developer',
    duration: '2025 - 2026',
    tech: ['PHP', 'MySQL', 'React Native', 'Expo'],
    overview: 'A comprehensive educational management system built from the ground up to replace outdated paper-based processes. It features a mobile app for parents and staff, alongside a robust secure web dashboard for school administrators.',
    challenges: 'The school required a custom family ledger system that standard out-of-the-box ERPs could not handle. Additionally, rural internet connectivity meant the mobile application needed highly optimized data fetching.',
    features: ['Custom family ledger integration', 'Real-time attendance tracking', 'Automated student result processing', 'Cross-platform mobile application deployed on Android/iOS'],
    image: ssvnerpImg,
    liveLink: 'https://erp.shrisaividhyaniketanhs.in/',
    githubLink: '#'
  },
  2: {
    title: 'Shri Sai Vidhya Niketan',
    type: 'Web Development',
    role: 'Lead Developer',
    duration: '2025',
    tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
    overview: 'A complete digital transformation featuring a high-performance web presence, streamlined administrative portals, and optimized student information access.',
    challenges: 'Creating a highly responsive, fast-loading platform that handles high traffic during admission seasons while remaining easy for non-technical school staff to update.',
    features: ['Optimized Core Web Vitals', 'Advanced caching via Cloudflare', 'Custom inquiry capture forms', 'Responsive mobile-first design'],
    image: ssvnImg,
    liveLink: 'https://www.shrisaividhyaniketanhs.in/',
    githubLink: '#'
  },
  3: {
    title: 'VSN NGO',
    type: 'Web Development',
    role: 'Web Developer',
    duration: '2025',
    tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
    overview: 'A performance-optimized platform developed to streamline outreach, manage campaigns, and significantly enhance the organization\'s digital footprint to drive engagement and support.',
    challenges: 'Structuring complex information about multiple ongoing social campaigns in a way that is accessible, visually engaging, and drives user action.',
    features: ['Campaign management integration', 'Optimized media delivery', 'Secure form handling', 'Accessibility-focused UI design'],
    image: vsnImg,
    liveLink: 'https://vsnnepal.org',
    githubLink: '#'
  },
  4: {
    title: 'Second Home Restaurant',
    type: 'Web Development',
    role: 'Web Developer',
    duration: '2026',
    tech: ['WordPress', 'Custom CSS', 'Cloudflare'],
    overview: 'A highly responsive, conversion-focused website tailored for a local dining establishment, designed to showcase the menu, drive customer engagement, and increase reservations and inquiries.',
    challenges: 'Designing a highly visual, fast-loading experience that works perfectly on mobile devices, as over 80% of restaurant searches occur on phones.',
    features: ['Mobile-first menu showcase', 'Click-to-call and map integrations', 'High-speed image delivery', 'Local SEO optimization foundations'],
    image: secondhomeImg,
    liveLink: 'https://secondhomemds.com/',
    githubLink: '#'
  },
  5: {
    title: '"Pragya" Voice Bot',
    type: 'AI Integration Demo',
    role: 'AI Integration Specialist',
    duration: '2026',
    tech: ['JavaScript', 'PHP API', 'AI Voice API', 'MySQL'],
    overview: 'Custom AI voice assistant processing direct audio input to fetch student results instantly from a secure backend database. It removes multi-step questioning in favor of direct roll-number extraction for faster responses.',
    challenges: 'Refactoring standard chatbot flows to handle highly specific local accents and bypass conversational filler to directly extract the student roll numbers.',
    features: ['Direct roll-number extraction', 'Unified voice input handler', 'Real-time API fetching', 'Natural language processing integration'],
    image: 'https://placehold.co/1200x600/141419/3b82f6?text=Pragya+Voice+Assistant',
    liveLink: '#',
    githubLink: '#'
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id] || projectsData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger animations for this page
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal-element, .reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [id]);

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        <Link to="/" className="btn-outline reveal-element" style={{ display: 'inline-flex', marginBottom: '2.5rem', padding: '0.6rem 1.5rem', borderRadius: '99px', textDecoration: 'none', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        
        <span className="section-subtitle reveal-element delay-100">{project.type}</span>
        <h1 className="section-title reveal-element delay-200" style={{ marginBottom: '2.5rem' }}>{project.title}</h1>
        
        <img src={project.image} alt={project.title} className="detail-img reveal-element delay-300" />
        
        <div className="detail-grid">
          <div className="main-content reveal-element delay-400">
            <div className="content-section">
              <h3>Project Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div className="content-section">
              <h3>The Challenge</h3>
              <p>{project.challenges}</p>
            </div>

            <div className="content-section">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="meta-card reveal-element delay-400">
            <div className="meta-item">
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
            
            <div className="meta-item">
              <h4>Timeline</h4>
              <p>{project.duration}</p>
            </div>

            <div className="meta-item">
              <h4>Tech Stack</h4>
              <div className="tech-stack" style={{ marginTop: '0.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag" style={{ padding: '0.4rem 1rem' }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%' }}>
                View Live Site
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                View Source Code
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
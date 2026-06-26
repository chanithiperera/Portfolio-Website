import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
} from 'lucide-react';
import heroPortrait from './assets/chanithi-upper-body-cutout.png';

const profile = {
  name: 'Chanithi Perera',
  role: 'Frontend Developer',
  location: 'Sri Lanka',
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/in/chanithi-perera-5253b7392/',
  github: 'https://github.com/',
  summary:
    'I create clean, responsive web experiences with React, modern CSS, and a strong eye for simple user-friendly interfaces.',
};

const projects = [
  {
    title: 'Portfolio Website',
    type: 'React / Vite',
    description:
      'A personal portfolio with a minimal monochrome hero, responsive layout, and React-powered sections.',
    tags: ['React', 'CSS', 'Responsive'],
  },
  {
    title: 'Task Dashboard',
    type: 'Frontend Practice',
    description:
      'A dashboard interface concept focused on readable cards, clear status views, and reusable UI patterns.',
    tags: ['Components', 'State', 'UX'],
  },
  {
    title: 'Shop Landing Page',
    type: 'Frontend Build',
    description:
      'A responsive landing page concept with polished visual hierarchy, product sections, and clean styling.',
    tags: ['Vite', 'Layout', 'Design'],
  },
];

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Vite',
  'Responsive Design',
  'Git',
  'UI Design',
  'Web Design',
];

const stats = [
  ['React', 'Primary stack'],
  ['Sri Lanka', 'Based in'],
  ['2026', 'Portfolio update'],
];

function App() {
  return (
    <main>
      <section className="index-frame" id="home" aria-label="Portfolio home">
        <div className="device-shell">
          <div className="device-notch" />
          <nav className="navbar" aria-label="Main navigation">
            <a className="brand" href="#home" aria-label="Home">
              <span />
            </a>
            <div className="nav-links">
              <a href="#about">About Me</a>
              <a href="#projects">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#contact">Blog</a>
            </div>
            <a className="book-link" href={`mailto:${profile.email}`}>
              Book A Call <ArrowUpRight size={14} />
            </a>
          </nav>

          <div className="hero-grid">
            <aside className="side-rail" aria-label="Profile meta">
              <span>{profile.role}</span>
              <i />
              <strong>2026</strong>
            </aside>

            <div className="hero-copy-block">
              <div className="hero-stats">
                <div>
                  <strong>React</strong>
                  <span>Frontend focused</span>
                </div>
                <div>
                  <strong>UI</strong>
                  <span>Clean web design</span>
                </div>
              </div>

              <div className="hello-stack">
                <h1>Hello</h1>
                <p>- I&apos;m {profile.name}, a React developer</p>
              </div>

              <a className="scroll-cue" href="#about">
                Scroll down
                <span>&darr;</span>
              </a>
            </div>

            <img
              className="portrait"
              src={heroPortrait}
              alt="Portrait of Chanithi Perera"
            />
          </div>
        </div>
      </section>

      <section
        className="intro-band"
        id="services"
        aria-label="Profile highlights"
      >
        <div className="intro-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>Clean interfaces, practical code, and details that feel right.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m Chanithi Perera, a Sri Lanka-based frontend developer
            shaping modern web interfaces with React, JavaScript, HTML, and CSS.
          </p>
          <p>
            This portfolio is prepared around your LinkedIn identity and ready
            for your real photo, email, project links, and detailed experience.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-icon">
                <Code2 size={22} />
              </div>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Toolkit</p>
          <h2>Skills</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="experience-title">
          <BriefcaseBusiness size={22} />
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          <article>
            <span>2026</span>
            <h3>Frontend Developer Portfolio</h3>
            <p>
              Building a personal React portfolio to present projects, skills,
              and contact details with a polished first impression.
            </p>
          </article>
          <article>
            <span>2025</span>
            <h3>Web Development Practice</h3>
            <p>
              Practicing responsive layouts, JavaScript interactions, component
              structure, and clean visual design through hands-on builds.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s build something polished.</h2>
          <p>
            Connect through LinkedIn now, and add your preferred email or
            GitHub profile whenever you are ready.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <b className="link-mark">GH</b>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <b className="link-mark">IN</b>
            LinkedIn
          </a>
          <span>
            <MapPin size={18} />
            {profile.location}
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;

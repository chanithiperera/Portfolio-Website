import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  PenLine,
} from 'lucide-react';
import heroPortrait from './assets/chanithi-upper-body-cutout.png';

const profile = {
  name: 'Chanithi Perera',
  role: 'Data Science Undergraduate',
  location: 'Colombo, Western Province, Sri Lanka',
  email: 'chanithi.perera23@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chanithi-perera-5253b7392/',
  github: 'https://github.com/',
  summary:
    'I am a Data Science undergraduate at SLIIT with a growing focus on AI, machine learning, data science, and software engineering.',
};

const projects = [
  {
    title: 'Projects coming soon',
    type: 'Portfolio update',
    description:
      'This section is ready for your academic, data science, AI, and software engineering projects once you send the details.',
    tags: ['Data Science', 'AI', 'Software'],
  },
  {
    title: 'Licenses and certifications',
    type: 'Details pending',
    description:
      'Add course names, issuing organizations, credential links, and dates here when you are ready.',
    tags: ['Learning', 'Credentials', 'Growth'],
  },
  {
    title: 'Honors and awards',
    type: 'Details pending',
    description:
      'A dedicated space for recognitions, competitions, scholarships, and awards you want to showcase.',
    tags: ['Leadership', 'Recognition', 'Achievement'],
  },
];

const skills = [
  'Leadership',
  'Communication',
  'Technical Writing',
  'Team Coordination',
  'Event Planning',
  'Event Handling',
  'Finance',
  'Budgeting',
  'Project Management',
  'Programming',
  'Public Speaking',
  'Teamwork',
];

const stats = [
  ['SLIIT', 'BSc (Hons) IT'],
  ['Data', 'Science focus'],
  ['Open', 'To work'],
];

const experiences = [
  {
    period: 'Jun 2026 - Present',
    title: 'Vice Secretary',
    organization: 'SLIIT Women In FOSS Community',
    description:
      'Appointed for the 2026/27 term, supporting organizational documentation, meeting records, and official communications.',
  },
  {
    period: 'May 2026 - Present',
    title: 'Industry 360 Cast Content Writing Team Lead',
    organization: 'IEEE Student Branch of SLIIT',
    description:
      'Leads content writing for Industry 360 Cast while coordinating with the organizing committee and event teams.',
  },
  {
    period: 'Sep 2025 - Present',
    title: 'Technical Writer',
    organization: 'Medium',
    description:
      'Authors technical articles on artificial intelligence, machine learning, data science, and software engineering.',
  },
  {
    period: 'Dec 2024 - Dec 2025',
    title: 'Organizing Committee Member',
    organization: 'SLIIT Gavel Club',
    description:
      'Contributed to the 187th Educational Meeting and strengthened public speaking, event planning, and coordination skills.',
  },
  {
    period: 'Jan 2016 - Sep 2023',
    title: 'President Guide Award Recipient',
    organization: 'Sri Lanka Girl Guides Association',
    description:
      'Completed advanced guiding challenges, national-level assessments, camps, and community initiatives to earn the association highest achievement.',
  },
];

const education = [
  {
    school: 'SLIIT',
    period: '2024 - 2028',
    details: 'BSc (Hons) in Information Technology, Information Technology',
  },
  {
    school: 'Devi Balika Vidyalaya',
    period: 'Jan 2021 - Dec 2023',
    details:
      'GCE A/L - Physical Science English Medium. Committee Member in the Senior Science Society and Model United Nations Club.',
  },
  {
    school: 'Dharmapala Vidyalaya Pannipitiya',
    period: 'Feb 2010 - Dec 2020',
    details:
      'Grade 1 - 11. Junior/Senior Prefect, Junior Western Band member, and Junior/Senior Choir Group member.',
  },
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
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
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
                  <strong>AI</strong>
                  <span>Data science learner</span>
                </div>
                <div>
                  <strong>395</strong>
                  <span>LinkedIn connections</span>
                </div>
              </div>

              <div className="hello-stack">
                <h1>Hello</h1>
                <p>- I&apos;m {profile.name}, a data science undergraduate</p>
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
            I&apos;m Chanithi Perera, a Colombo-based Data Science undergraduate
            following the BSc (Hons) in Information Technology pathway at SLIIT.
          </p>
          <p>
            My profile brings together technical curiosity, writing, leadership,
            community work, and event coordination across SLIIT Women In FOSS,
            IEEE Student Branch of SLIIT, Medium, MS Club of SLIIT, and SLIIT
            Gavel Club.
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
          {experiences.map((experience) => (
            <article key={`${experience.title}-${experience.organization}`}>
              <span>{experience.period}</span>
              <h3>{experience.title}</h3>
              <p className="timeline-org">{experience.organization}</p>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div className="experience-title">
          <GraduationCap size={22} />
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <article key={item.school}>
              <span>{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s connect and build something meaningful.</h2>
          <p>
            I am open to opportunities in Colombo with on-site or hybrid work,
            and interested in data science, AI, technical writing, and
            technology community initiatives.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <span>
            <b className="link-mark">GH</b>
            GitHub details coming soon
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <b className="link-mark">IN</b>
            LinkedIn
          </a>
          <span>
            <PenLine size={18} />
            Technical Writer on Medium
          </span>
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

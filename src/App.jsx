import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Moon,
  PenLine,
  Send,
  Sun,
  UserRound,
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
    title:
      'GoviSmart - Smart Fertilizer Recommendation for Paddy Cultivation',
    type: 'Y2S2 AIML Project',
    academicYear: '2nd Year',
    year: '2026',
    description:
      'Integrated agricultural web platform for data-driven fertilizer guidance and centralized resource management in Sri Lanka, powered by an XGBoost microservice.',
    contribution:
      'Focused on agricultural service booking workflows, officer availability, farmer request tracking, notifications, and structured soil and climate datasets.',
    github:
      'https://github.com/chanithiperera/Smart_Fertilizer_Recommendation.git',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'XGBoost'],
  },
  {
    title: 'Zoo & Visitor Management System',
    type: 'Y2S2 Mobile Application Project',
    academicYear: '2nd Year',
    year: '2026',
    description:
      'Full-stack mobile application for zoo operations and visitor experiences, covering ticketing, animal information, online shopping, and administrative management.',
    contribution:
      'Built ticket and show booking workflows, scheduling, visitor validation, backend API integration, and MongoDB database management.',
    github: 'https://github.com/chanithiperera/Zoo-Management.git',
    tags: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB Atlas'],
  },
  {
    title: 'Student Depression Prediction System',
    type: '2nd Year AI & Machine Learning Group Project',
    academicYear: '2nd Year',
    year: '2025',
    description:
      'Predictive system that identifies students at risk of depression using supervised machine learning models and a Streamlit decision-support interface.',
    contribution:
      'Developed and evaluated the Random Forest model, built the Streamlit app, and focused on interpretability, ethics, and performance tuning.',
    github:
      'https://github.com/chanithiperera/Student_Depression_Prediction_System.git',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'Streamlit', 'pandas'],
  },
  {
    title: 'Web-Based Healthcare Customer Care System',
    type: '2nd Year Software Engineering Group Project',
    academicYear: '2nd Year',
    year: '2025',
    description:
      'Healthcare management platform for appointment handling, medical records, customer support tickets, feedback, and real-time notifications.',
    contribution:
      'Applied software engineering principles, design patterns, Agile practices, secure backend development, and UI/database integration.',
    github:
      'https://github.com/chanithiperera/Healthcare_CustomerCare_System.git',
    tags: ['Java 17', 'Spring Boot', 'Spring Security', 'SQL Server', 'Thymeleaf'],
  },
  {
    title: 'Online Medicine Store',
    type: '1st Year Java Spring Boot & JSON Group Project',
    academicYear: '1st Year',
    year: '2025',
    description:
      'Web-based e-commerce medicine store with separate user and admin workflows, JSON-based storage, cart checkout, prescription uploads, and order processing.',
    contribution:
      'Implemented cart and checkout functionality, queue-based order processing, and JSON CRUD logic for products and cart operations.',
    github:
      'https://github.com/chanithiperera/Online-Medicine-Store-Springboot.git',
    tags: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'JSON'],
  },
  {
    title: 'Automated Garage System',
    type: '1st Year Arduino + IoT Project',
    academicYear: '1st Year',
    year: '2025',
    description:
      'Smart garage prototype using Arduino microcontrollers, IoT monitoring, RFID access, sensor automation, lighting control, and remote control via Blynk.',
    contribution:
      'Designed sensor-based automation with RFID, ultrasonic and IR validation, smart lighting, display output, and Bluetooth-controlled ventilation.',
    github: 'https://github.com/chanithiperera/AutomatedGarageSystem.git',
    tags: ['Arduino', 'ESP8266', 'IoT', 'Sensors', 'Blynk', 'C/C++'],
  },
];

const projectGroups = ['1st Year', '2nd Year', '3rd Year', 'Final Year'];
const currentAcademicYear = '2nd Year';

const writingArticles = [
  {
    title: 'What Are Artificial Neural Networks? A Simple Guide for Beginners',
    publication: 'Medium',
    category: 'Artificial Intelligence',
    description:
      'A beginner-friendly guide explaining how AI thinks through neural networks, with simple language for readers new to machine learning.',
    link: 'https://lnkd.in/gstD3t7d',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks'],
  },
  {
    title:
      'Prompt Engineering for Beginners: How to Get Better Results from ChatGPT',
    publication: 'SLIIT Women in FOSS Medium',
    category: 'Prompt Engineering',
    description:
      'Breaks down how small changes in prompts can improve AI outputs, using simple examples and the C.L.E.A.R. framework.',
    link: 'https://lnkd.in/guK9gReZ',
    tags: ['Prompt Engineering', 'ChatGPT', 'Women in Tech'],
  },
  {
    title: 'Navigating Software Quality with Black Box and White Box Testing',
    publication: 'MS Club of SLIIT',
    category: 'Software Quality',
    description:
      'Explores the difference between black box and white box testing, their role in QA, and how both support reliable software delivery.',
    link: 'https://lnkd.in/gDdctPjh',
    tags: ['Software Testing', 'Quality Assurance', 'Technical Writing'],
  },
];

const communityHighlights = [
  {
    title: 'She Talks Tech - Guest Speaker',
    role: 'Guest Speaker',
    organization: 'SLIIT Women in FOSS',
    date: 'August 28',
    description:
      'Delivered “From Bugs to Breakthroughs: Why Software Projects Fail and How Teams Succeed,” sharing practical lessons on scope creep, technical debt, communication gaps, collaboration, agile workflows, and resilient teams.',
    tags: ['Tech Talks', 'Leadership', 'Women in FOSS'],
  },
  {
    title: 'She Talks Tech Podcast - Psychology of Getting Hacked',
    role: 'Moderator',
    organization: 'Women in FOSS Community - SLIIT',
    date: 'January session',
    description:
      'Moderated a cybersecurity discussion on the human factors behind scams, social engineering, and awareness, guiding the conversation and audience questions.',
    tags: ['Moderation', 'Cybersecurity', 'Public Speaking'],
  },
  {
    title: 'GO 101 - Practical Introduction for University Students',
    role: 'Moderator',
    organization: 'SLIIT FOSS Community',
    date: 'Community session',
    description:
      'Moderated a beginner-friendly session introducing the Go programming language, its simplicity, performance, and relevance in modern software development.',
    tags: ['GoLang', 'Tech Community', 'Student Life'],
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

const leadershipActivities = [
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
];

const licensesCertifications = [
  {
    period: 'Coming soon',
    title: 'Licenses and certifications',
    organization: 'Details to be added',
    description:
      'A dedicated place for professional certificates, completed courses, badges, and verified credentials.',
  },
];

const honoursAwards = [
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
  const mainRef = useRef(null);
  const projectScrollerRef = useRef(null);
  const [activeProjectGroup, setActiveProjectGroup] =
    useState(currentAcademicYear);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return undefined;

    const revealItems = root.querySelectorAll(
      '.section, .intro-band, .project-card, .feature-card, .timeline article, .contact-links > *',
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-on-scroll');
      item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
      revealObserver.observe(item);
    });

    const countItems = root.querySelectorAll('[data-count-to]');
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const item = entry.target;
          const target = Number(item.dataset.countTo);
          const suffix = item.dataset.countSuffix || '';
          const start = performance.now();
          const duration = 1200;

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            item.textContent = `${Math.round(target * eased)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          countObserver.unobserve(item);
        });
      },
      { threshold: 0.7 },
    );

    countItems.forEach((item) => countObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.academicYear === activeProjectGroup,
  );

  useEffect(() => {
    projectScrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeProjectGroup]);

  const scrollProjectRow = (direction) => {
    const scroller = projectScrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === 'next' ? 420 : -420,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <aside className="site-sidebar" aria-label="Section navigation">
        <a className="sidebar-mark" href="#home" aria-label="Home">
          <span>CP</span>
        </a>
        <nav className="sidebar-nav" aria-label="Quick links">
          <a href="#home" aria-label="Home">
            <Home size={18} />
          </a>
          <a href="#about" aria-label="About">
            <UserRound size={18} />
          </a>
          <a href="#projects" aria-label="Projects">
            <Code2 size={18} />
          </a>
          <a href="#contact" aria-label="Contact">
            <Send size={18} />
          </a>
        </nav>
      </aside>
      <main className="site-main" ref={mainRef}>
      <div className="scroll-progress" aria-hidden="true" />
      <section className="index-frame" id="home" aria-label="Portfolio home">
        <div className="device-shell">
          <div className="device-notch" />
          <div className="motion-grid" aria-hidden="true" />
          <nav className="navbar" aria-label="Main navigation">
            <button
              className="theme-toggle theme-toggle-hero"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'dark' ? 'light' : 'dark',
                )
              }
            >
              <span className="theme-toggle-thumb">
                {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
              </span>
            </button>
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
                  <strong data-count-to="395">0</strong>
                  <span>LinkedIn connections</span>
                </div>
              </div>

              <div className="hello-stack">
                <h1>Hello</h1>
                <p>- I&apos;m {profile.name}, a data science undergraduate</p>
                <div className="hero-socials" aria-label="Featured profile links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <b>IN</b>
                    LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <b>GH</b>
                    GitHub
                  </a>
                  <a href="#writing">
                    <b>M</b>
                    Medium
                  </a>
                </div>
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
        <div className="project-tabs" role="tablist" aria-label="Project groups">
          {projectGroups.map((group) => (
            <button
              key={group}
              className={activeProjectGroup === group ? 'is-active' : ''}
              type="button"
              role="tab"
              aria-selected={activeProjectGroup === group}
              onClick={() => setActiveProjectGroup(group)}
            >
              {group} Projects
            </button>
          ))}
        </div>
        <div className="project-panel" role="tabpanel">
          {filteredProjects.length > 0 ? (
            <>
              <div className="project-row-header">
                <span>{filteredProjects.length} projects</span>
                <div className="project-row-controls">
                  <button
                    type="button"
                    aria-label="Previous projects"
                    onClick={() => scrollProjectRow('previous')}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next projects"
                    onClick={() => scrollProjectRow('next')}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="projects-grid" ref={projectScrollerRef}>
                {filteredProjects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-media-slot">
                      <Code2 size={24} />
                      <span>Media coming soon</span>
                    </div>
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                    <small className="project-year">{project.year}</small>
                    <span>{project.description}</span>
                    <strong className="project-contribution">
                      My contribution
                    </strong>
                    <span>{project.contribution}</span>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <small key={tag}>{tag}</small>
                      ))}
                    </div>
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <article className="project-empty-card">
              <Code2 size={24} />
              <h3>{activeProjectGroup} projects coming soon</h3>
              <p>
                This space is ready for the projects, media, links, and outcomes
                you add later.
              </p>
            </article>
          )}
        </div>
      </section>

      <section className="section feature-section" id="writing">
        <div className="section-heading">
          <p className="section-kicker">Writing</p>
          <h2>Medium Articles</h2>
        </div>
        <div className="feature-grid">
          {writingArticles.map((article) => (
            <article className="feature-card" key={article.title}>
              <div className="feature-media-slot">
                <PenLine size={24} />
                <span>Article media coming soon</span>
              </div>
              <p>{article.publication}</p>
              <h3>{article.title}</h3>
              <small>{article.category}</small>
              <span>{article.description}</span>
              <div className="tag-row">
                {article.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
              <a
                className="project-link"
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                Read article <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section" id="community">
        <div className="section-heading">
          <p className="section-kicker">Community</p>
          <h2>Speaking & Moderation</h2>
        </div>
        <div className="feature-grid">
          {communityHighlights.map((highlight) => (
            <article className="feature-card" key={highlight.title}>
              <div className="feature-media-slot">
                <UserRound size={24} />
                <span>Session media coming soon</span>
              </div>
              <p>{highlight.role}</p>
              <h3>{highlight.title}</h3>
              <small>
                {highlight.organization} · {highlight.date}
              </small>
              <span>{highlight.description}</span>
              <div className="tag-row">
                {highlight.tags.map((tag) => (
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

      <section className="section leadership-section" id="leadership">
        <div className="experience-title">
          <BriefcaseBusiness size={22} />
          <h2>Leadership & Activities</h2>
        </div>
        <div className="timeline">
          {leadershipActivities.map((experience) => (
            <article key={`${experience.title}-${experience.organization}`}>
              <span>{experience.period}</span>
              <h3>{experience.title}</h3>
              <p className="timeline-org">{experience.organization}</p>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-section" id="certifications">
        <div className="experience-title">
          <BadgeCheck size={22} />
          <h2>Licenses & Certifications</h2>
        </div>
        <div className="timeline">
          {licensesCertifications.map((credential) => (
            <article key={`${credential.title}-${credential.organization}`}>
              <span>{credential.period}</span>
              <h3>{credential.title}</h3>
              <p className="timeline-org">{credential.organization}</p>
              <p>{credential.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section awards-section" id="awards">
        <div className="experience-title">
          <Award size={22} />
          <h2>Honours & Awards</h2>
        </div>
        <div className="timeline">
          {honoursAwards.map((award) => (
            <article key={`${award.title}-${award.organization}`}>
              <span>{award.period}</span>
              <h3>{award.title}</h3>
              <p className="timeline-org">{award.organization}</p>
              <p>{award.description}</p>
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
    </>
  );
}

export default App;

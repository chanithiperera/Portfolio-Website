import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Images,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Moon,
  PenLine,
  Send,
  Sun,
  UserRound,
  X,
} from 'lucide-react';
import articleAiFutureWorkWomenTech from './assets/article-ai-future-work-women-tech.png';
import articleNeuralNetworks from './assets/article-neural-networks.png';
import articlePromptEngineering from './assets/article-prompt-engineering.png';
import articleSoftwareQualityCover from './assets/article-software-quality-cover.png';
import articleSoftwareQualityTesting from './assets/article-software-quality-testing.png';
import automatedGaragePhoto from './assets/automated-garage-system.jpeg';
import garageCircuitGate from './assets/garage-circuit-gate.png';
import garageCircuitLighting from './assets/garage-circuit-lighting.png';
import garageCircuitVentilation from './assets/garage-circuit-ventilation.png';
import garageControlBoard from './assets/garage-control-board.png';
import garagePoster from './assets/garage-poster.png';
import garagePrototypeFront from './assets/garage-prototype-front.png';
import goviSmartHome from './assets/govismart-home.png';
import goviSmartRecommendationForm from './assets/govismart-recommendation-form.png';
import goviSmartRecommendationInputs from './assets/govismart-recommendation-inputs.png';
import go101HostSession from './assets/go101-host-session.png';
import go101IntroSlide from './assets/go101-intro-slide.png';
import go101SpeakerView from './assets/go101-speaker-view.png';
import healthcareCustomerCareHome from './assets/healthcare-customer-care-home.png';
import heroPortrait from './assets/chanithi-upper-body-cutout.png';
import medicineStoreHome from './assets/medicine-store-home.jpg';
import studentDepressionHighRisk from './assets/student-depression-high-risk.png';
import studentDepressionLowRisk from './assets/student-depression-low-risk.png';
import sheTalksTechPoster from './assets/she-talks-tech-poster.png';
import sheTalksTechPodcastPanel from './assets/she-talks-tech-podcast-panel.png';
import sheTalksTechPodcastSpeaker from './assets/she-talks-tech-podcast-speaker.png';
import sheTalksTechSessionIntro from './assets/she-talks-tech-session-intro.png';
import sheTalksTechSessionSdlc from './assets/she-talks-tech-session-sdlc.png';
import zooManagementWelcome from './assets/zoo-management-welcome.png';

const LinkedInLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M5.1 8.9h3.2v10.2H5.1V8.9Zm1.6-5a1.86 1.86 0 1 1 0 3.72 1.86 1.86 0 0 1 0-3.72ZM10.3 8.9h3.1v1.4h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.13 3.84 4.9v5.57h-3.2v-4.94c0-1.18-.02-2.7-1.64-2.7-1.65 0-1.9 1.29-1.9 2.62v5.02h-3.2V8.9Z"
      fill="currentColor"
    />
  </svg>
);

const GitHubLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M12 2.2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.88.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.92 0-1.08.39-1.97 1.02-2.67-.1-.25-.44-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.48 9.48 0 0 1 12 7.26c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.63.64.7 1.02 1.59 1.02 2.67 0 3.83-2.33 4.66-4.55 4.91.36.31.68.92.68 1.85v2.56c0 .26.18.58.69.48A10 10 0 0 0 12 2.2Z"
      fill="currentColor"
    />
  </svg>
);

const MediumLogo = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      d="M4.2 7.4c.02-.2-.06-.4-.22-.53L2.4 4.95v-.28h5.04l3.9 8.55 3.43-8.55h4.8v.28l-1.35 1.3c-.12.09-.18.24-.16.39v9.52c-.02.15.04.3.16.39l1.32 1.3v.28h-6.82v-.28l1.36-1.33c.14-.14.14-.18.14-.39V8.44l-3.78 9.66h-.52L5.5 8.44v6.46c-.04.28.06.57.26.78l1.77 2.15v.28H2.5v-.28l1.77-2.15c.2-.21.29-.5.25-.78V7.4Z"
      fill="currentColor"
    />
  </svg>
);

const profile = {
  name: 'Chanithi Perera',
  role: 'Data Science Undergraduate',
  location: 'Colombo, Western Province, Sri Lanka',
  email: 'chanithi.perera23@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chanithi-perera-5253b7392/',
  github: 'https://github.com/',
  medium: 'https://medium.com/@chanithidehansa',
  cv: '/Chanithi_Perera_CV.pdf',
  summary:
    'I am a Data Science undergraduate at SLIIT with a growing focus on AI, machine learning, data science, and software engineering.',
};

const projects = [
  {
    title:
      'GoviSmart - Smart Fertilizer Recommendation for Paddy Cultivation',
    titleNote: '& Agricultural Resource Management System',
    type: 'Y2S2 AIML Project - Team Leader',
    academicYear: '2nd Year',
    year: '2026',
    images: [
      {
        src: goviSmartHome,
        alt: 'GoviSmart paddy solutions home page',
      },
      {
        src: goviSmartRecommendationForm,
        alt: 'GoviSmart fertilizer recommendation form',
      },
      {
        src: goviSmartRecommendationInputs,
        alt: 'GoviSmart fertilizer recommendation input fields',
      },
    ],
    description:
      'Integrated agricultural web platform for data-driven fertilizer guidance and centralized resource management in Sri Lanka, powered by an XGBoost microservice.',
    contribution:
      'Focused on agricultural service booking workflows, officer availability, farmer request tracking, notifications, and structured soil and climate datasets.',
    github:
      'https://github.com/chanithiperera/Smart_Fertilizer_Recommendation.git',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'XGBoost'],
  },
  {
    title: 'ZentraZoo - Zoo & Visitor Management System',
    type: 'Y2S2 Mobile Application Project - Team Leader',
    academicYear: '2nd Year',
    year: '2026',
    images: [
      {
        src: zooManagementWelcome,
        alt: 'ZentraZoo mobile app welcome screen',
      },
    ],
    description:
      'Full-stack mobile application for zoo operations and visitor experiences, covering ticketing, animal information, online shopping, and administrative management.',
    contribution:
      'Built ticket and show booking workflows, scheduling, visitor validation, backend API integration, and MongoDB database management.',
    github: 'https://github.com/chanithiperera/Zoo-Management.git',
    tags: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB Atlas'],
  },
  {
    title: 'Student Depression Prediction System',
    type: 'Y2S1 AIML Project - Team Leader',
    academicYear: '2nd Year',
    year: '2025',
    images: [
      {
        src: studentDepressionHighRisk,
        alt: 'Student Depression Risk Predictor high risk result',
      },
      {
        src: studentDepressionLowRisk,
        alt: 'Student Depression Risk Predictor low risk result',
      },
    ],
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
    type: 'Y2S1 Software Engineering Project - Team Leader',
    academicYear: '2nd Year',
    year: '2025',
    images: [
      {
        src: healthcareCustomerCareHome,
        alt: 'MediFlow Connect healthcare customer care home page',
      },
    ],
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
    type: 'Y1S2 - Java Spring Boot Project',
    academicYear: '1st Year',
    year: '2025',
    images: [
      {
        src: medicineStoreHome,
        alt: 'Online Medicine Store home page interface',
      },
    ],
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
    type: 'Y1S1 - Arduino + IoT Project',
    academicYear: '1st Year',
    year: '2024',
    images: [
      {
        src: automatedGaragePhoto,
        alt: 'Automated Garage System prototype collage',
      },
      {
        src: garagePrototypeFront,
        alt: 'Front view of the Automated Garage System model',
      },
      {
        src: garageControlBoard,
        alt: 'Arduino and IoT control board wiring for the garage system',
      },
      {
        src: garagePoster,
        alt: 'Intelly Home project poster for the garage automation system',
      },
      {
        src: garageCircuitLighting,
        alt: 'Circuit diagram for lighting and ventilation controls',
      },
      {
        src: garageCircuitGate,
        alt: 'Circuit diagram for RFID gate access and obstacle detection',
      },
      {
        src: garageCircuitVentilation,
        alt: 'Circuit diagram for fan, lighting, clock, and display modules',
      },
    ],
    description:
      'Developed a smart garage prototype that automates access control, lighting, ventilation, and real-time monitoring using Arduino and IoT technologies.',
    highlights: [
      'RFID-based smart gate access',
      'Obstacle detection with ultrasonic & IR sensors',
      'PIR + LDR smart lighting',
      'ESP8266 + Blynk remote monitoring',
      'Bluetooth-controlled ventilation system',
    ],
    contribution:
      'Built the embedded control flow, sensor validation logic, smart lighting behavior, monitoring setup, and ventilation control workflow.',
    github: 'https://github.com/chanithiperera/AutomatedGarageSystem.git',
    tags: ['Arduino', 'IoT', 'Embedded Systems', 'ESP8266', 'RFID', 'C/C++'],
  },
];

const projectGroups = ['1st Year', '2nd Year', '3rd Year', 'Final Year'];
const currentAcademicYear = '2nd Year';

const writingArticles = [
  {
    title: 'What Are Artificial Neural Networks? A Simple Guide for Beginners',
    publication: 'Self Published',
    category: 'Artificial Intelligence',
    images: [
      {
        src: articleNeuralNetworks,
        alt: 'Artificial neural networks article cover',
      },
    ],
    description:
      'A beginner-friendly guide explaining how AI thinks through neural networks, with simple language for readers new to machine learning.',
    link:
      'https://medium.com/@chanithidehansa/what-are-artificial-neural-networks-a-simple-guide-for-beginners-ea2053d6bbe4?sharedUserId=chanithidehansa',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks'],
  },
  {
    title:
      'Prompt Engineering for Beginners: How to Get Better Results from ChatGPT',
    publication: 'Published by Women in FOSS Community',
    category: 'Prompt Engineering',
    images: [
      {
        src: articlePromptEngineering,
        alt: 'Prompt engineering article cover',
      },
    ],
    description:
      'Breaks down how small changes in prompts can improve AI outputs, using simple examples and the C.L.E.A.R. framework.',
    link:
      'https://medium.com/sliitwif/prompt-engineering-for-beginners-how-to-get-better-results-from-chatgpt-87f5e618f564?sharedUserId=chanithidehansa',
    tags: ['Prompt Engineering', 'ChatGPT', 'AI'],
  },
  {
    title: 'Navigating Software Quality with Black Box and White Box Testing',
    publication: 'Published by MS Club',
    category: 'Software Quality',
    images: [
      {
        src: articleSoftwareQualityCover,
        alt: 'Navigating software quality article cover',
      },
      {
        src: articleSoftwareQualityTesting,
        alt: 'Black box and white box testing comparison visual',
      },
    ],
    description:
      'Explores the difference between black box and white box testing, their role in QA, and how both support reliable software delivery.',
    link:
      'https://medium.com/ms-club-of-sliit/beyond-the-surface-navigating-software-quality-with-black-box-and-white-box-testing-ed6a37fcacf7?sharedUserId=chanithidehansa',
    tags: ['Software Testing', 'Quality Assurance', 'Software Engineering'],
  },
  {
    title: 'AI and the Future of Work: A New Era for Women in Tech',
    publication: 'Self Published - ImpactX Article Writing Challenge',
    category: 'Artificial Intelligence',
    images: [
      {
        src: articleAiFutureWorkWomenTech,
        alt: 'AI and the future of work article cover for women in tech',
      },
    ],
    description:
      'Explores how AI is reshaping work, skills, and opportunity, while highlighting why women must be included in building a fair and innovative future.',
    link:
      'https://medium.com/@chanithidehansa/ai-and-the-future-of-work-a-new-era-for-women-in-tech-035e61704933?sharedUserId=chanithidehansa',
    tags: ['AI', 'Future of Work', 'Women in Tech'],
  },
];

const communityHighlights = [
  {
    title:
      'She Talks Tech Podcast - From Bugs to Breakthroughs: Why Software Projects Fail and How Teams Succeed',
    role: 'Guest Speaker',
    organization: 'Women in FOSS Community',
    images: [
      {
        src: sheTalksTechSessionIntro,
        alt: 'She Talks Tech presentation introduction slide in MS Teams',
      },
      {
        src: sheTalksTechSessionSdlc,
        alt: 'She Talks Tech SDLC roadmap presentation slide in MS Teams',
      },
      {
        src: sheTalksTechPoster,
        alt: 'She Talks Tech guest speaker event poster',
      },
    ],
    description:
      'Had a great opportunity to speak about the SDLC lifecycle, agile workflows, and practical principles software development teams can follow to build successful projects.',
    tags: ['SDLC', 'Agile', 'Software Development'],
  },
  {
    title: 'She Talks Tech Podcast - Psychology of Getting Hacked',
    role: 'Moderator',
    organization: 'Women in FOSS Community',
    images: [
      {
        src: sheTalksTechPodcastSpeaker,
        alt: 'She Talks Tech podcast speaker view in MS Teams',
      },
      {
        src: sheTalksTechPodcastPanel,
        alt: 'She Talks Tech podcast panel view in MS Teams',
      },
    ],
    description:
      'Moderated a cybersecurity discussion on the human factors behind scams, social engineering, and awareness, guiding the conversation and audience questions.',
    tags: ['Cybersecurity', 'Social Engineering'],
  },
  {
    title: 'GO 101 - Practical Introduction for University Students',
    role: 'Moderator',
    organization: 'FOSS Community',
    images: [
      {
        src: go101IntroSlide,
        alt: 'GO 101 introduction slide in online session',
      },
      {
        src: go101HostSession,
        alt: 'GO 101 online session with speaker and moderator',
      },
      {
        src: go101SpeakerView,
        alt: 'GO 101 online session speaker view',
      },
    ],
    description:
      'Moderated a beginner-friendly session introducing the Go programming language, its simplicity, performance, and relevance in modern software development.',
    tags: ['Go Lang', 'Programming'],
  },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    title: 'Data Science & AI',
    items: [
      'Machine Learning',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow',
      'XGBoost',
      'Streamlit',
      'Data Analytics',
      'Data Visualization',
      'Power BI',
    ],
  },
  {
    title: 'Software Development',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'HTML',
      'CSS',
      'Spring Boot',
      'Flask',
      'TypeScript',
    ],
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL', 'MS SQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Postman'],
  },
];

const stats = [
  ['Explore', 'Driven by curiosity and continuous learning'],
  ['Innovate', 'Building intelligent, data-driven solutions'],
  ['Lead', 'Empowering communities through collaboration'],
];

const leadershipActivities = [
  {
    period: 'Jun 2026 - Present',
    title: 'Vice Secretary',
    organization: 'SLIIT Women in FOSS Community',
    category: 'Community Leadership',
    description:
      'Coordinates official communications and documentation while supporting community initiatives and events.',
    tags: ['Leadership', 'Communication', 'Coordination'],
  },
  {
    period: 'May 2026 - Present',
    title: 'Industry 360 Cast Content Writing Team Lead',
    organization: 'IEEE Student Branch of SLIIT',
    category: 'Content Leadership',
    description:
      'Leads content planning and writing for Industry 360 Cast communications.',
    tags: ['Team Leadership', 'Content Writing', 'Team Coordination'],
  },
  {
    period: 'May 2026 - Present',
    title: 'Industry 360 Cast Organizing Committee Member',
    organization: 'IEEE Student Branch of SLIIT',
    category: 'Event Organizing',
    description:
      'Supports planning, workflows, and committee coordination for an industry-focused student initiative.',
    tags: ['Event Planning', 'Event Handling', 'Teamwork'],
  },
  {
    period: 'Feb 2026 - Apr 2026',
    title: 'Finance Committee Member - ImpactX 2026',
    organization: 'SLIIT Women in FOSS Community',
    category: 'Finance & Events',
    description:
      'Contributed to ImpactX 2026, SLIIT first Women’s Day tech event, supporting finance-related planning, budgeting, and event coordination.',
    tags: ['Finance', 'Budgeting', 'Event Coordination'],
  },
  {
    period: 'Sep 2025 - Present',
    title: 'Technical Writer',
    organization: 'Medium',
    category: 'Technical Writing',
    description:
      'Writes beginner-friendly articles that simplify AI, data science, and software engineering concepts.',
    tags: ['Technical Writing', 'AI', 'Software Engineering'],
  },
  {
    period: 'Aug 2025 - Present',
    title: 'Member',
    organization: 'MS Club of SLIIT',
    category: 'Student Community',
    description:
      'Participates in a student tech community focused on learning, collaboration, and knowledge sharing around Microsoft and software technologies.',
    tags: ['Community', 'Learning', 'Technology'],
  },
  {
    period: 'Jul 2025 - Present',
    title: 'Member',
    organization: 'SLIIT Women in FOSS Community',
    category: 'Women in Tech',
    description:
      'Engages with initiatives that promote collaboration, innovation, and opportunities for women in technology.',
    tags: ['Women in Tech', 'Collaboration', 'Community'],
  },
  {
    period: 'Jul 2025 - Jun 2026',
    title: 'Member',
    organization: 'SLIIT FOSS Community',
    category: 'Open Source Community',
    description:
      'Participated in open-source community activities, programming-focused initiatives, and student-led technology events.',
    tags: ['Programming', 'Open Source', 'Hosting Events'],
  },
  {
    period: 'Dec 2024 - Dec 2025',
    title: 'Organizing Committee Member',
    organization: 'SLIIT Gavel Club',
    category: 'Public Speaking',
    description:
      'Helped organize educational meetings while strengthening public speaking and event coordination.',
    tags: ['Public Speaking', 'Event Planning', 'Communication'],
  },
  {
    period: 'Jan 2016 - Sep 2023',
    title: 'President Guide Award Recipient',
    organization: 'Sri Lanka Girl Guides Association',
    category: 'Early Leadership',
    description:
      'Completed national-level guiding challenges and community initiatives to earn the association highest award.',
    tags: ['Leadership', 'Teamwork', 'Community Service'],
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
  const articleScrollerRef = useRef(null);
  const [activeProjectGroup, setActiveProjectGroup] =
    useState(currentAcademicYear);
  const [mediaViewer, setMediaViewer] = useState(null);
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
  const groupedLeadershipActivities = leadershipActivities.reduce(
    (groups, activity) => {
      if (
        activity.title === 'Member' &&
        activity.organization === 'SLIIT Women in FOSS Community'
      ) {
        return groups;
      }

      const existingGroup = groups.find(
        (group) => group.organization === activity.organization,
      );

      if (existingGroup) {
        existingGroup.roles.push(activity);
        return groups;
      }

      return [
        ...groups,
        {
          organization: activity.organization,
          roles: [activity],
        },
      ];
    },
    [],
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

  const scrollArticleRow = (direction) => {
    const scroller = articleScrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === 'next' ? 420 : -420,
      behavior: 'smooth',
    });
  };

  const openMediaViewer = (project, imageIndex = 0) => {
    if (!project.images?.length) return;

    setMediaViewer({
      imageIndex,
      images: project.images,
      title: project.title,
    });
  };

  const closeMediaViewer = () => {
    setMediaViewer(null);
  };

  const showMediaImage = (direction) => {
    setMediaViewer((currentViewer) => {
      if (!currentViewer) return null;

      const totalImages = currentViewer.images.length;
      const nextIndex =
        (currentViewer.imageIndex + (direction === 'next' ? 1 : -1) + totalImages) %
        totalImages;

      return {
        ...currentViewer,
        imageIndex: nextIndex,
      };
    });
  };

  useEffect(() => {
    if (!mediaViewer) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMediaViewer();
      }

      if (event.key === 'ArrowLeft' && mediaViewer?.images.length > 1) {
        showMediaImage('previous');
      }

      if (event.key === 'ArrowRight' && mediaViewer?.images.length > 1) {
        showMediaImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mediaViewer]);

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
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <a className="book-link" href={profile.cv} download>
              Download My CV <Download size={15} />
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
                <p>
                  <span>- I&apos;m {profile.name},</span>
                  <br />
                  <span className="intro-line-two">a Data Science undergraduate</span>
                </p>
                <div className="hero-socials" aria-label="Featured profile links">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <span className="brand-icon linkedin-icon">
                      <LinkedInLogo />
                    </span>
                    LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <span className="brand-icon github-icon">
                      <GitHubLogo />
                    </span>
                    GitHub
                  </a>
                  <a href={profile.medium} target="_blank" rel="noreferrer">
                    <span className="brand-icon medium-icon">
                      <MediumLogo />
                    </span>
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
          <h2>Where Data Science meets creativity, community, and impact.</h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m Chanithi Perera, a Data Science undergraduate at SLIIT
            passionate about Machine Learning, Data Analytics, and building
            practical solutions through technology.
          </p>
          <p>
            Beyond academics, I enjoy exploring new technologies, writing
            technical content, and contributing to student communities. I
            believe in continuous learning, collaboration, and using technology
            to create meaningful impact.
          </p>
          <p>
            Through projects, leadership roles, and extracurricular involvement,
            I continue to grow as both a technologist and a community builder.
          </p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Projects</p>
            <h2>Featured Projects</h2>
            <p className="section-tagline">
              A collection of projects built to solve real-world problems
              through technology.
            </p>
          </div>
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
                    {project.images?.length ? (
                      <button
                        className="project-media-button"
                        type="button"
                        aria-label={`Open ${project.title} gallery`}
                        onClick={() => openMediaViewer(project)}
                      >
                        <img
                          className="project-media-image"
                          src={project.images[0].src}
                          alt={project.images[0].alt || `${project.title} preview`}
                        />
                        <span>View gallery</span>
                      </button>
                    ) : (
                      <div className="project-media-slot">
                        <Code2 size={24} />
                        <span>Media coming soon</span>
                      </div>
                    )}
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                    {project.titleNote ? (
                      <span className="project-title-note">
                        {project.titleNote}
                      </span>
                    ) : null}
                    <small className="project-year">{project.year}</small>
                    <span>{project.description}</span>
                    {project.highlights ? (
                      <div className="project-highlights">
                        <strong>What I built</strong>
                        <ul>
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {project.highlights ? null : (
                      <>
                        <strong className="project-contribution">
                          My contribution
                        </strong>
                        <span>{project.contribution}</span>
                      </>
                    )}
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
                      <span className="project-link-icon">
                        <GitHubLogo />
                      </span>
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
            </article>
          )}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Technical Toolkit</h2>
          <p className="section-tagline">
            Technologies and tools I use to build data-driven and software
            solutions.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-category" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section leadership-section" id="leadership">
        <div className="experience-title">
          <div>
            <h2>Leadership & Impact</h2>
            <p className="section-tagline">
              Leading initiatives, building communities, and creating meaningful
              impact.
            </p>
          </div>
        </div>
        <div className="timeline leadership-timeline">
          {groupedLeadershipActivities.map((group) => (
            <article
              className="leadership-card leadership-group-card"
              key={group.organization}
            >
              <div className="leadership-group-head">
                <div>
                  <h3>{group.organization}</h3>
                  <div className="leadership-role-summary">
                    {group.roles.slice(0, 2).map((role) => (
                      <span key={role.title}>{role.title}</span>
                    ))}
                  </div>
                </div>
                <span>{group.roles[group.roles.length - 1].period}</span>
              </div>
              <div className="leadership-card-tags">
                {Array.from(
                  new Set(group.roles.flatMap((role) => role.tags)),
                )
                  .slice(0, 3)
                  .map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section" id="writing">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Writing</p>
            <h2>Technical Writing</h2>
            <p className="section-tagline">
              Sharing knowledge and simplifying complex technical concepts
              through writing.
            </p>
          </div>
        </div>
        <div className="project-row-header article-row-header">
          <span>{writingArticles.length} articles</span>
          <div className="project-row-controls">
            <button
              type="button"
              aria-label="Previous articles"
              onClick={() => scrollArticleRow('previous')}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next articles"
              onClick={() => scrollArticleRow('next')}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="feature-grid article-grid" ref={articleScrollerRef}>
          {writingArticles.map((article) => (
            <article className="feature-card" key={article.title}>
              {article.images?.length ? (
                <button
                  className="feature-media-button"
                  type="button"
                  aria-label={`Open ${article.title} gallery`}
                  onClick={() => openMediaViewer(article)}
                >
                  <img
                    src={article.images[0].src}
                    alt={article.images[0].alt || `${article.title} preview`}
                  />
                  <span>
                    <Images size={14} />
                    {article.images.length > 1 ? 'View gallery' : 'View image'}
                  </span>
                </button>
              ) : (
                <div className="feature-media-slot">
                  <PenLine size={24} />
                  <span>Article media coming soon</span>
                </div>
              )}
              <p>{article.publication}</p>
              <h3>{article.title}</h3>
              <small>{article.category}</small>
              <span>{article.description}</span>
              <div className="tag-row article-tag-row">
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
                <span className="project-link-icon">
                  <MediumLogo />
                </span>
                Read article <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section" id="community">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Community</p>
            <h2>Speaking & Moderation</h2>
            <p className="section-tagline">
              Engaging audiences, fostering discussions, and sharing ideas with
              the community.
            </p>
          </div>
        </div>
        <div className="feature-grid">
          {communityHighlights.map((highlight) => (
            <article className="feature-card" key={highlight.title}>
              {highlight.images?.length ? (
                <button
                  className="feature-media-button"
                  type="button"
                  aria-label={`Open ${highlight.title} gallery`}
                  onClick={() => openMediaViewer(highlight)}
                >
                  <img
                    src={highlight.images[0].src}
                    alt={
                      highlight.images[0].alt ||
                      `${highlight.title} preview`
                    }
                  />
                  <span>
                    <Images size={14} />
                    {highlight.images.length > 1
                      ? 'View gallery'
                      : 'View image'}
                  </span>
                </button>
              ) : (
                <div className="feature-media-slot">
                  <UserRound size={24} />
                  <span>Session media coming soon</span>
                </div>
              )}
              <p>{highlight.role}</p>
              <h3>{highlight.title}</h3>
              <small>
                {highlight.organization} {highlight.date}
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

      <section className="section credentials-section" id="certifications">
        <div className="experience-title">
          <BadgeCheck size={22} />
          <div>
            <h2>Licenses & Certifications</h2>
            <p className="section-tagline">
              A reflection of my commitment to continuous learning and
              professional growth.
            </p>
          </div>
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
          <div>
            <h2>Honours & Awards</h2>
            <p className="section-tagline">
              Recognitions that celebrate dedication, leadership, and
              excellence.
            </p>
          </div>
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
          <div>
            <h2>Education</h2>
            <p className="section-tagline">
              Academic experiences that laid the foundation for my journey in
              technology.
            </p>
          </div>
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
          <p className="section-tagline">
            Always open to collaborations, opportunities, and meaningful
            conversations.
          </p>
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
      {mediaViewer ? (
        <div
          className="media-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${mediaViewer.title} gallery`}
          onClick={closeMediaViewer}
        >
          <div className="media-viewer-panel" onClick={(event) => event.stopPropagation()}>
            <div className="media-viewer-header">
              <div>
                <strong>{mediaViewer.title}</strong>
                <span>
                  {mediaViewer.imageIndex + 1} / {mediaViewer.images.length}
                </span>
              </div>
              <button type="button" aria-label="Close gallery" onClick={closeMediaViewer}>
                <X size={18} />
              </button>
            </div>
            <div className="media-viewer-stage">
              {mediaViewer.images.length > 1 ? (
                <button
                  className="media-viewer-arrow media-viewer-arrow-left"
                  type="button"
                  aria-label="Previous image"
                  onClick={() => showMediaImage('previous')}
                >
                  <ChevronLeft size={22} />
                </button>
              ) : null}
              <img
                src={mediaViewer.images[mediaViewer.imageIndex].src}
                alt={
                  mediaViewer.images[mediaViewer.imageIndex].alt ||
                  `${mediaViewer.title} gallery image`
                }
              />
              {mediaViewer.images.length > 1 ? (
                <button
                  className="media-viewer-arrow media-viewer-arrow-right"
                  type="button"
                  aria-label="Next image"
                  onClick={() => showMediaImage('next')}
                >
                  <ChevronRight size={22} />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      </main>
    </>
  );
}

export default App;


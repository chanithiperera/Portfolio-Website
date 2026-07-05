import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Images,
  Award,
  BadgeCheck,
  Braces,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Code2,
  Database,
  Download,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Mic2,
  Menu,
  Moon,
  PenLine,
  RadioTower,
  Send,
  ServerCog,
  Smartphone,
  Sparkles,
  Sun,
  UserRound,
  Wrench,
  X,
  ShieldCheck,
  Medal,
  Trophy,
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
import impactCommunities from './assets/impact-communities.png';
import impactEvents from './assets/impact-events.png';
import impactLeadershipRoles from './assets/impact-leadership-roles.png';
import impactYearsInvolved from './assets/impact-years-involved.png';
import medicineStoreHome from './assets/medicine-store-home.jpg';
import studentDepressionHighRisk from './assets/student-depression-high-risk.png';
import studentDepressionLowRisk from './assets/student-depression-low-risk.png';
import sheTalksTechPoster from './assets/she-talks-tech-poster.png';
import sheTalksTechPodcastPanel from './assets/she-talks-tech-podcast-panel.png';
import sheTalksTechPodcastSpeaker from './assets/she-talks-tech-podcast-speaker.png';
import sheTalksTechSessionIntro from './assets/she-talks-tech-session-intro.png';
import sheTalksTechSessionSdlc from './assets/she-talks-tech-session-sdlc.png';
import zooManagementWelcome from './assets/zoo-management-welcome.png';
import certificateDatabricks from './assets/certificate-databricks.png';
import certificateImpactx2026 from './assets/certificate-impactx-2026.png';
import badgePostmanApi from './assets/badge-postman-api.png';
import githubDevDayCertificate from './assets/github-dev-day-certificate.png';
import githubDevDayBadge from './assets/github-dev-day-badge.png';
import githubDevDayAttendee from './assets/github-dev-day-attendee.png';
import certificateKaspersky from './assets/certificate-kaspersky.png';
import awardDeansListY2S1 from './assets/award-deans-list-y2s1.png';
import awardDeansListY1S2 from './assets/award-deans-list-y1s2.png';
import awardPresidentGuide from './assets/award-president-guide.jpg';

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

const AnimatedText = ({ text }) => {
  let letterIndex = 0;

  return (
    <span className="animated-text" aria-hidden="true">
      {text.split(' ').map((word, wordIndex, words) => (
        <span className="animated-word" key={`${word}-${wordIndex}`}>
          {word.split('').map((letter, index) => {
            const currentIndex = letterIndex;
            letterIndex += 1;

            return (
              <span
                className="animated-letter"
                key={`${letter}-${index}`}
                style={{ '--letter-index': currentIndex }}
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? <span className="animated-space"> </span> : null}
        </span>
      ))}
    </span>
  );
};

const profile = {
  name: 'Chanithi Perera',
  role: 'Data Science Undergraduate',
  location: 'Colombo, Western Province, Sri Lanka',
  email: 'chanithi.perera23@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chanithi-perera-5253b7392/',
  github: 'https://github.com/chanithiperera',
  medium: 'https://medium.com/@chanithidehansa',
  cv: '/Chanithi_Perera_CV.pdf',
};

const projects = [
  {
    title:
      'GoviSmart - Smart Fertilizer Recommendation for Paddy Cultivation',
    titleNote: 'and Agricultural Resource Management System',
    type: 'AIML Project - Team Lead',
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
    shortDescription:
      'AI-powered platform for personalized paddy fertilizer recommendations and agricultural resource management.',
    contribution:
      'Focused on agricultural service booking workflows, officer availability, farmer request tracking, notifications, and structured soil and climate datasets.',
    github:
      'https://github.com/chanithiperera/Smart_Fertilizer_Recommendation.git',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'XGBoost'],
  },
  {
    title: 'ZentraZoo - Zoo & Visitor Management System',
    type: 'Mobile Application Project - Team Lead',
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
    shortDescription:
      'Mobile platform for zoo ticketing, animal information, shopping, and admin workflows.',
    contribution:
      'Built ticket and show booking workflows, scheduling, visitor validation, backend API integration, and MongoDB database management.',
    github: 'https://github.com/chanithiperera/Zoo-Management.git',
    tags: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB Atlas'],
  },
  {
    title: 'Student Depression Prediction System',
    type: 'AIML Project - Team Lead',
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
    shortDescription:
      'Machine learning app that predicts student depression risk through a Streamlit interface.',
    contribution:
      'Developed and evaluated the Random Forest model, built the Streamlit app, and focused on interpretability, ethics, and performance tuning.',
    github:
      'https://github.com/chanithiperera/Student_Depression_Prediction_System.git',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'Streamlit', 'pandas'],
  },
  {
    title: 'Web-Based Healthcare Customer Care System',
    type: 'Software Engineering Project - Team Lead',
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
    shortDescription:
      'Healthcare support platform for appointments, records, tickets, feedback, and notifications.',
    contribution:
      'Applied software engineering principles, design patterns, Agile practices, secure backend development, and UI/database integration.',
    github:
      'https://github.com/chanithiperera/Healthcare_CustomerCare_System.git',
    tags: ['Java 17', 'Spring Boot', 'Spring Security', 'SQL Server', 'Thymeleaf'],
  },
  {
    title: 'Online Medicine Store',
    type: 'Java Spring Boot Project',
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
    shortDescription:
      'Medicine e-commerce app with cart checkout, prescription uploads, and admin workflows.',
    contribution:
      'Implemented cart and checkout functionality, queue-based order processing, and JSON CRUD logic for products and cart operations.',
    github:
      'https://github.com/chanithiperera/Online-Medicine-Store-Springboot.git',
    tags: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'JSON'],
  },
  {
    title: 'Automated Garage System',
    type: 'Arduino + IoT Project',
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
    shortDescription:
      'Arduino and IoT prototype for automated access, lighting, ventilation, and monitoring.',
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
    bentoTitle: 'She Talks Tech Podcast - From Bugs to Breakthroughs',
    bentoSubtitle: 'Women in FOSS Community',
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
    icon: Braces,
    items: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    title: 'Data Science & AI',
    icon: BrainCircuit,
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
    icon: ServerCog,
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
    icon: Smartphone,
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'MS SQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Postman'],
  },
];

const stats = [
  ['Explore', 'Driven by curiosity and continuous learning'],
  ['Innovate', 'Building intelligent, data-driven solutions'],
  ['Lead', 'Empowering communities through collaboration'],
];

const leadershipImpact = [
  {
    value: 7,
    label: 'Leadership Roles',
    detail: 'Across student organizations and communities',
    image: impactLeadershipRoles,
  },
  {
    value: 5,
    label: 'Communities',
    detail: 'Women in FOSS, IEEE, FOSS, MS Club, and Gavel',
    image: impactCommunities,
  },
  {
    value: 15,
    label: 'Events Organized',
    detail: 'Community programs, sessions, podcasts, and meetings',
    image: impactEvents,
  },
  {
    value: 8,
    label: 'Years Involved',
    detail: 'A leadership journey shaped by service and teamwork',
    image: impactYearsInvolved,
    imagePosition: 'center 66%',
  },
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
      'Completed national-level guiding challenges and community initiatives to earn the association\'s highest award.',
    tags: ['Leadership', 'Teamwork', 'Community Service'],
  },
];

const leadershipGroupMeta = {
  'SLIIT Women in FOSS Community': {
    period: 'Jul 2025 - Present',
    icon: HeartHandshake,
  },
  'IEEE Student Branch of SLIIT': {
    period: 'May 2026 - Present',
    icon: RadioTower,
  },
  Medium: {
    period: 'Sep 2025 - Present',
    icon: PenLine,
  },
  'MS Club of SLIIT': {
    period: 'Aug 2025 - Present',
    icon: Code2,
  },
  'SLIIT FOSS Community': {
    period: 'Jul 2025 - Jun 2026',
    icon: Code2,
  },
  'SLIIT Gavel Club': {
    period: 'Dec 2024 - Dec 2025',
    icon: Mic2,
  },
  'Sri Lanka Girl Guides Association': {
    period: 'Jan 2016 - Sep 2023',
    icon: Sparkles,
  },
};

const licensesCertifications = [
  {
    period: 'Jul 2026',
    title: 'Get Started with Databricks for Data Engineering',
    organization: 'Simplilearn',
    credentialId: '10416397',
    credentialUrl: '',
    icon: Database,
    image: certificateDatabricks,
    tags: ['Azure Databricks', 'Data Engineering', 'Apache Spark'],
    featured: true,
  },
  {
    period: 'Jun 2026',
    title: 'Tools for Data Science',
    organization: 'IBM',
    credentialId: '',
    credentialUrl: 'https://coursera.org/verify/TBOMJNMACLT5',
    icon: BrainCircuit,
    tags: ['Data Science', 'Python', 'R', 'GitHub'],
    featured: true,
  },
  {
    period: 'Jun 2026',
    title: 'What is Data Science?',
    organization: 'IBM',
    credentialId: 'DNAZZGEJFWYG',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/DNAZZGEJFWYG',
    icon: BrainCircuit,
    tags: ['Data Science', 'Data Analysis', 'Cloud Computing'],
    featured: true,
  },
  {
    period: 'Jun 2026',
    title: 'Python for Beginners',
    organization: 'University of Moratuwa',
    credentialId: 'w1XLCovTmx',
    credentialUrl: 'https://open.uom.lk/verify',
    icon: Braces,
    tags: ['Python', 'Programming'],
    featured: true,
  },
  {
    period: 'Jun 2026',
    title: 'Tools for Data Science V2',
    organization: 'IBM',
    credentialId: '',
    credentialUrl: 'https://www.credly.com/badges/db9d73f5-37d6-4314-950a-b7e69c1c60bb',
    icon: BrainCircuit,
    tags: ['Data Science', 'Python', 'SQL', 'Jupyter', 'Data Analysis', 'Data Visualization'],
    featured: true,
  },
  {
    period: 'Jun 2026',
    title: 'Data Science Orientation',
    organization: 'IBM',
    credentialId: '',
    credentialUrl: 'https://www.credly.com/badges/8584e1cd-6499-4dfa-bc45-2e739e4c3d22',
    icon: BrainCircuit,
    tags: ['Big Data', 'Artificial Intelligence', 'Machine Learning'],
    featured: true,
  },
  {
    period: 'May 2026',
    title: 'Building AI Agents with MongoDB',
    organization: 'MongoDB',
    credentialId: '',
    credentialUrl:
      'https://www.credly.com/badges/ab579c92-499d-4486-a7ec-2c981e852aa9/public_url',
    icon: BrainCircuit,
    tags: ['Artificial Intelligence', 'MongoDB', 'AI Agents'],
    featured: true,
  },
  {
    period: 'May 2026',
    title: 'API Learning 101',
    organization: 'Postman',
    credentialId: '',
    credentialUrl: 'https://github.com/nisalgunawardhana/api-learning-101/pull/256',
    icon: ServerCog,
    image: badgePostmanApi,
    isBadge: true,
    tags: ['API Testing', 'Postman API', 'REST APIs', 'JSON', 'HTTP Methods'],
    featured: true,
  },
  {
    period: 'Apr 2026',
    title: 'GitHub Dev Day Sri Lanka session',
    organization: 'Microsoft Learn Student Ambassadors - Sri Lanka',
    credentialId: '',
    credentialUrl: 'https://github.com/nisalgunawardhana/Github-for-beginners/pull/846',
    icon: Code2,
    images: [githubDevDayCertificate, githubDevDayBadge, githubDevDayAttendee],
    tags: ['Version Control'],
    featured: true,
  },
  {
    period: 'Mar 2026',
    title: '1st Place – Impactx 2026 Medium Article Challenge',
    organization: 'SLIIT Women In FOSS Community',
    credentialId: '',
    credentialUrl: '',
    icon: Award,
    image: certificateImpactx2026,
    tags: ['Technical Writing', 'English'],
    featured: true,
  },
  {
    period: 'Jan 2026',
    title: 'Kaspersky Cyberhygiene Online course',
    organization: 'Kaspersky',
    credentialId: '',
    credentialUrl: 'https://certification.kaspersky.com/certificates/185508',
    icon: ShieldCheck,
    image: certificateKaspersky,
    tags: ['Cybersecurity'],
    featured: true,
  },
  {
    period: 'Feb 2025',
    title: 'GenAI 101 with Pieces',
    organization: 'Pieces',
    credentialId: '',
    credentialUrl:
      'https://badges.parchment.com/public/assertions/4ltykpAvTFuOSHNbGcO43w?identity__email=chanithidehansa%40gmail.com',
    icon: Sparkles,
    tags: ['Generative AI', 'LLMs', 'AI Tools'],
    featured: true,
  },
];

const certificationStats = [
  {
    value: '12+',
    label: 'Certifications',
    detail: 'Completed and upcoming verified credentials',
  },
  {
    value: '5+',
    label: 'Issuing Organizations',
    detail: 'Learning across recognized institutions',
  },
  {
    value: '2025-Present',
    label: 'Learning Journey',
    detail: 'Continuous professional growth',
  },
];

const honoursAwards = [
  {
    period: 'May 2026',
    title: "Dean's List Award - Year 2 Semester 1",
    organization: 'SLIIT',
    association: 'SLIIT',
    icon: Medal,
    image: awardDeansListY2S1,
    description:
      'Recognized for outstanding academic performance with a GPA of 3.85 during Year 2 Semester 1.',
  },
  {
    period: 'Dec 2025',
    title: "Dean's List Award - Year 1 Semester 2",
    organization: 'SLIIT',
    association: 'SLIIT',
    icon: Medal,
    image: awardDeansListY1S2,
    description:
      "Earned Dean's List recognition for maintaining exceptional academic performance with a GPA of 3.75.",
  },
  {
    period: 'Sep 2023',
    title: 'President Guide Award',
    organization: 'Sri Lanka Girl Guides Association',
    association: 'Devi Balika Vidyalaya',
    icon: Trophy,
    image: awardPresidentGuide,
    description:
      'Awarded the highest honor in the Sri Lanka Girl Guides Association for excellence in leadership, community service, and advanced guiding.',
  },
];

const awardStats = [
  {
    value: '3+',
    label: 'Awards Earned',
    detail: 'Academic and national recognitions',
  },
  {
    value: 'National & Academic',
    label: 'Recognitions',
    detail: 'Achievements across studies and service',
  },
  {
    value: '2023-Present',
    label: 'Excellence Journey',
    detail: 'A growing record of dedication and excellence',
  },
];

const education = [
  {
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2024 – Present',
    degree: 'BSc (Hons) in Information Technology',
    specialization: 'Specializing in Data Science',
  },
  {
    school: 'Devi Balika Vidyalaya, Colombo',
    period: '2021 – 2023',
    degree: 'GCE Advanced Level',
    specialization: 'Physical Science Stream (English Medium)',
  },
  {
    school: 'Dharmapala Vidyalaya, Pannipitiya',
    period: '2010 – 2020',
    degree: 'GCE Ordinary Level (English Medium)',
    specialization: '',
  },
];

function App() {
  const mainRef = useRef(null);
  const articleScrollerRef = useRef(null);
  const [mediaViewer, setMediaViewer] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showScrollArrows, setShowScrollArrows] = useState({ up: false, down: true });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const SECTIONS = [
    'home',
    'about',
    'projects',
    'skills',
    'leadership',
    'certifications',
    'awards',
    'education',
    'contact'
  ];

  const navigateSection = (direction) => {
    const sectionElements = SECTIONS.map(id => document.getElementById(id)).filter(Boolean);
    const scrollPosition = window.scrollY + 120; // Offset threshold

    let currentIndex = 0;
    for (let i = 0; i < sectionElements.length; i++) {
      const el = sectionElements[i];
      if (el.offsetTop <= scrollPosition) {
        currentIndex = i;
      }
    }

    let targetIndex = currentIndex;
    if (direction === 'down') {
      targetIndex = Math.min(currentIndex + 1, sectionElements.length - 1);
      if (currentIndex === 0 && window.scrollY < sectionElements[1].offsetTop - 200) {
        targetIndex = 1;
      }
    } else if (direction === 'up') {
      const currentEl = sectionElements[currentIndex];
      if (window.scrollY > currentEl.offsetTop + 50) {
        targetIndex = currentIndex;
      } else {
        targetIndex = Math.max(currentIndex - 1, 0);
      }
    }

    const targetEl = sectionElements[targetIndex];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 80;
      const isBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      setShowScrollArrows({
        up: !isTop,
        down: !isBottom
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      '.section, .intro-band, .project-card, .feature-card, .impact-card, .timeline article, .contact-links > *',
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
          ...leadershipGroupMeta[activity.organization],
          roles: [activity],
        },
      ];
    },
    [],
  );

  const featuredProjects = projects.slice(0, -2);
  const extraProjects = projects.slice(-2);
  const hiddenProjectCount = extraProjects.length;

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
      description: project.description,
      organization: project.organization || project.publication,
      date: project.date || project.year,
    });
  };

  const closeMediaViewer = () => {
    setMediaViewer(null);
  };

  const openProjectDetails = (project) => {
    setProjectDetails(project);
  };

  const closeProjectDetails = () => {
    setProjectDetails(null);
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

  useEffect(() => {
    if (!projectDetails) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProjectDetails();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectDetails]);

  useEffect(() => {
    if (!showCertifications) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowCertifications(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCertifications]);

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

            <a className="navbar-logo" href="#home" aria-label="Home">
              CP
            </a>

            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#leadership">Leadership</a>
              <a href="#certifications">Certifications</a>
              <a href="#awards">Awards</a>
              <a href="#contact">Contact</a>
            </div>

            <a className="book-link" href={profile.cv} download>
              Download My CV <Download size={15} />
            </a>

            <button
              className="mobile-menu-btn"
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
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
              </div>

              <div className="hello-stack">
                <span className="hero-eyebrow">Hello I'm,</span>
                <h1 className="hero-name" aria-label={`Hello I'm, ${profile.name}`}>
                  <span>
                    <AnimatedText text="Chanithi" />
                  </span>
                  <span>
                    <AnimatedText text="Perera" />
                  </span>
                </h1>
                <p className="hero-role">Data Science Undergraduate</p>
                <p className="hero-description">
                  Passionate about solving real-world problems through technology.
                </p>
                <div className="hero-cta-row" aria-label="Primary actions">
                  <a className="hero-primary-link" href="#projects">
                    View Projects <ArrowUpRight size={17} />
                  </a>
                  <a className="hero-secondary-link" href="#contact">
                    Get In Touch <Mail size={17} />
                  </a>
                </div>
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


            <div className="hero-portrait-stage" aria-label="Portrait of Chanithi Perera">
              <span className="portrait-binary" aria-hidden="true">10110 01101<br />01001 11100<br />11010 00101<br />00111 10110</span>
              <span className="portrait-dots portrait-dots--top" aria-hidden="true" />
              <span className="portrait-dots portrait-dots--bottom" aria-hidden="true" />
              <svg className="portrait-chart" viewBox="0 0 180 140" aria-hidden="true">
                <path d="M18 108 L58 70 L96 84 L138 34" />
                <circle cx="18" cy="108" r="5" />
                <circle cx="58" cy="70" r="5" />
                <circle cx="96" cy="84" r="5" />
                <circle cx="138" cy="34" r="5" />
                <line x1="18" y1="26" x2="18" y2="126" />
                <line x1="58" y1="26" x2="58" y2="126" />
                <line x1="96" y1="26" x2="96" y2="126" />
                <line x1="138" y1="26" x2="138" y2="126" />
              </svg>
              <img
                className="portrait"
                src={heroPortrait}
                alt=""
              />
            </div>
            <div className="hero-marquee" aria-label="Portfolio focus areas">
              <div className="hero-marquee-track">
                {[0, 1].map((copyIndex) => (
                  <span
                    className="hero-marquee-set"
                    aria-hidden={copyIndex === 1}
                    key={copyIndex}
                  >
                    {[
                      'Data Science',
                      'Machine Learning',
                      'Data Analytics',
                      'Database Systems',
                      'Software Engineering',
                      'Problem Solving',
                    ].map((item) => (
                      <span className="hero-marquee-item" key={copyIndex + '-' + item}>
                        <span className="hero-marquee-label">{item}</span>
                        <i className="hero-marquee-dot" aria-hidden="true" />
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
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
          <h2 aria-label="Where Data Science meets creativity, community, and impact.">
            <AnimatedText text="Where Data Science meets creativity, community, and impact." />
          </h2>
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
        <div className="project-panel">
          <div className="project-row-header">
            <span>{projects.length} projects</span>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <article
                className={`project-card${index === 0 ? ' project-card-featured' : ''}`}
                key={project.title}
              >
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
                <h3>
                  {project.title}
                  {project.titleNote && (
                    <span className="project-title-note">{project.titleNote}</span>
                  )}
                </h3>
                <span>{project.shortDescription || project.description}</span>
                <div className="tag-row">
                  {project.tags.slice(0, 5).map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                  {project.tags.length > 5 ? (
                    <small>+{project.tags.length - 5}</small>
                  ) : null}
                </div>
                <div className="project-actions">
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
                  <button
                    className="project-details-button"
                    type="button"
                    onClick={() => openProjectDetails(project)}
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
            {!showMoreProjects && (
              <button
                className="project-card project-more-card"
                type="button"
                onClick={() => setShowMoreProjects(true)}
              >
                <span className="project-more-icon">
                  <Images size={21} />
                </span>
                <p>{hiddenProjectCount} more projects</p>
                <h3>View More Projects</h3>
                <span>
                  Open additional project showcases to explore more of my work and academic projects.
                </span>
                <strong>
                  View projects <ArrowUpRight size={15} />
                </strong>
              </button>
            )}
          </div>
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
          {skillGroups.map((group) => {
            const SkillIcon = group.icon;

            return (
              <article
                className={`skill-category${group.title === 'Data Science & AI' ? ' skill-category-featured' : ''}${group.title === 'Tools & Platforms' ? ' skill-category-wide' : ''}`}
                key={group.title}
              >
                <h3>
                  <span className="skill-category-icon" aria-hidden="true">
                    <SkillIcon size={15} strokeWidth={2.2} />
                  </span>
                  {group.title}
                </h3>
                <div className="skills-list">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section leadership-section" id="leadership">
        <div className="experience-title">
          <HeartHandshake size={22} />
          <div>
            <h2>Leadership & Impact</h2>
            <p className="section-tagline">
              Leading initiatives, building communities, and creating meaningful
              impact.
            </p>
          </div>
        </div>
        <div className="impact-dashboard" aria-label="Leadership impact summary">
          {leadershipImpact.map((item) => (
            <article
              className="impact-card"
              key={item.label}
              style={{ '--impact-image-position': item.imagePosition || 'center' }}
            >
              <img src={item.image} alt="" aria-hidden="true" />
              <strong data-count-to={item.value} data-count-suffix="+">
                0
              </strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="timeline leadership-timeline">
          {groupedLeadershipActivities.map((group) => {
            const LeadershipIcon = group.icon;

            return (
              <article
                className="leadership-card leadership-group-card"
                key={group.organization}
              >
                <div className="leadership-group-head">
                  <div>
                    <h3>
                      {LeadershipIcon ? (
                        <span className="leadership-org-icon" aria-hidden="true">
                          <LeadershipIcon size={15} strokeWidth={2.2} />
                        </span>
                      ) : null}
                      {group.organization}
                    </h3>
                    <span className="leadership-period">{group.period}</span>
                    <div className="leadership-role-summary">
                      {group.roles.map((role) => (
                        <span key={role.title}>{role.title}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Subsection: Technical Writing */}
        <div className="leadership-subsection" id="writing">
          <div className="subsection-heading">
            <div className="subsection-title-wrapper">
              <PenLine size={22} className="subsection-icon" />
              <h3>Technical Writing</h3>
            </div>
            <p className="section-tagline">
              Sharing knowledge and simplifying complex technical concepts
              through writing.
            </p>
          </div>
          <div className="project-row-header article-row-header">
            <span>{writingArticles.length} articles</span>
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
        </div>

        {/* Subsection: Public Speaking */}
        <div className="leadership-subsection" id="community">
          <div className="subsection-heading">
            <div className="subsection-title-wrapper">
              <Mic2 size={22} className="subsection-icon" />
              <h3>Speaking & Moderation</h3>
            </div>
            <p className="section-tagline">
              Engaging audiences, fostering discussions, and sharing ideas with
              the community.
            </p>
          </div>
          <div className="speaking-bento">
            {communityHighlights.map((highlight, index) => (
              <button
                className={`speaking-tile ${index === 0 ? 'is-featured' : ''}`}
                type="button"
                key={highlight.title}
                aria-label={`Open ${highlight.title} gallery`}
                onClick={() => openMediaViewer(highlight)}
              >
                {highlight.images?.length ? (
                  <img
                    src={highlight.images[0].src}
                    alt={highlight.images[0].alt || `${highlight.title} preview`}
                  />
                ) : (
                  <span className="speaking-tile-fallback">
                    <UserRound size={26} />
                  </span>
                )}
                <span className="speaking-tile-shade" />
                <span className="speaking-tile-count">
                  <Images size={14} />
                  {highlight.images?.length || 0}
                </span>
                <span className="speaking-tile-content">
                  <small>{highlight.role}</small>
                  <strong>{highlight.bentoTitle || highlight.title}</strong>
                  <em>
                    {highlight.bentoSubtitle ||
                      `${highlight.organization}${highlight.date ? ` • ${highlight.date}` : ''}`}
                  </em>
                  <span className="speaking-tags">
                    {highlight.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>
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
        <div className="certification-impact-grid">
          {certificationStats.map((item) => (
            <article className="certification-stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="certification-featured-grid">
          {licensesCertifications
            .filter((credential) => credential.featured)
            .slice(0, 4)
            .map((credential) => (
              <article
                className="certification-card"
                key={`${credential.title}-${credential.organization}`}
              >
                <span className="certification-period">{credential.period}</span>
                <h3>{credential.title}</h3>
                <p className="certification-issuer">
                  <span className="certification-logo"><credential.icon size={16} /></span>
                  {credential.organization}
                </p>
                <div className="tag-row certification-tags">
                  {credential.tags.slice(0, 3).map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                {credential.images || credential.image ? (
                  <button
                    type="button"
                    className="certification-link"
                    onClick={() => {
                      const imgList = credential.images
                        ? credential.images.map((img, idx) => ({
                            src: img,
                            alt: `${credential.title} - Image ${idx + 1}`,
                          }))
                        : [{ src: credential.image, alt: credential.title }];
                      openMediaViewer({
                        images: imgList,
                        title: credential.title,
                        description: `Verification for ${credential.title} issued by ${credential.organization}.`,
                        organization: credential.organization,
                        date: credential.period,
                        tags: credential.tags,
                      });
                    }}
                  >
                    {credential.isBadge ? 'View Badge' : 'View Certificate'}{' '}
                    <Images size={14} />
                  </button>
                ) : credential.credentialUrl ? (
                  <a
                    className="certification-link"
                    href={credential.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Credential <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="certification-link certification-link-muted">
                    View Certificate
                  </span>
                )}
              </article>
            ))}
        </div>
        <button
          className="certifications-view-all"
          type="button"
          onClick={() => setShowCertifications(true)}
        >
          View All Licenses & Certifications <ArrowUpRight size={15} />
        </button>
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
        <div className="awards-impact-grid">
          {awardStats.map((item) => (
            <article className="award-stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="award-list">
          {honoursAwards.map((award) => (
            <article className="award-card" key={`${award.title}-${award.period}`}>
              <span className="award-period">{award.period}</span>
              <div className="award-card-copy">
                <h3>
                  {award.icon && <award.icon className="award-title-icon" size={18} />}
                  {award.title}
                </h3>
                <p className="award-issuer">Issued by {award.organization}</p>
                <p>{award.description}</p>
                {award.image && (
                  <button
                    type="button"
                    className="certification-link"
                    style={{ marginTop: '0.85rem' }}
                    onClick={() =>
                      openMediaViewer({
                        images: [{ src: award.image, alt: award.title }],
                        title: award.title,
                        description: award.description,
                        organization: award.organization,
                        date: award.period,
                      })
                    }
                  >
                    View Certificate <Images size={14} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
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
              <p>{item.degree}{item.specialization ? ` · ${item.specialization}` : ''}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s connect and build something meaningful.</h2>
          <p className="section-tagline">
            Currently seeking internship opportunities in Data Science, AI, and
            related technology domains. Open to collaborations and meaningful
            conversations.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a href="https://github.com/ChanithiPerera" target="_blank" rel="noreferrer">
            <span className="brand-icon github-icon">
              <GitHubLogo />
            </span>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="brand-icon linkedin-icon">
              <LinkedInLogo />
            </span>
            LinkedIn
          </a>
          <a href="https://medium.com/@chanithidehansa" target="_blank" rel="noreferrer">
            <span className="brand-icon medium-icon">
              <MediumLogo />
            </span>
            Medium
          </a>
          <span>
            <MapPin size={18} />
            {profile.location}
          </span>
        </div>
      </section>
      {showCertifications ? (
        <div
          className="media-viewer certifications-modal"
          role="dialog"
          aria-modal="true"
          aria-label="All licenses and certifications"
          onClick={() => setShowCertifications(false)}
        >
          <div
            className="media-viewer-panel certifications-modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="media-viewer-header">
              <div>
                <strong>Licenses & Certifications</strong>
                <span>Featured credentials added so far</span>
              </div>
              <button
                type="button"
                aria-label="Close certifications"
                onClick={() => setShowCertifications(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="certifications-modal-list">
              {licensesCertifications.map((credential) => (
                <article
                  className="certifications-modal-item"
                  key={`${credential.title}-${credential.organization}`}
                >
                  <div>
                    <span>{credential.period}</span>
                    <h3>{credential.title}</h3>
                    <p className="certification-issuer">
                      <span className="certification-logo"><credential.icon size={16} /></span>
                      <span>
                        {credential.organization}
                        {credential.credentialId
                          ? ` - Credential ID: ${credential.credentialId}`
                          : ''}
                      </span>
                    </p>
                    <div className="tag-row certification-tags" style={{ marginTop: '0.75rem' }}>
                      {credential.tags.slice(0, 4).map((tag) => (
                        <small key={tag}>{tag}</small>
                      ))}
                      {credential.tags.length > 4 ? (
                        <small>+{credential.tags.length - 4}</small>
                      ) : null}
                    </div>
                  </div>
                  {credential.images || credential.image ? (
                    <button
                      type="button"
                      className="certification-link"
                      onClick={() => {
                        const imgList = credential.images
                          ? credential.images.map((img, idx) => ({
                              src: img,
                              alt: `${credential.title} - Image ${idx + 1}`,
                            }))
                          : [{ src: credential.image, alt: credential.title }];
                        openMediaViewer({
                          images: imgList,
                          title: credential.title,
                          description: `Verification for ${credential.title} issued by ${credential.organization}.`,
                          organization: credential.organization,
                          date: credential.period,
                          tags: credential.tags,
                        });
                      }}
                    >
                      {credential.isBadge ? 'View Badge' : 'View Certificate'}{' '}
                      <Images size={14} />
                    </button>
                  ) : credential.credentialUrl ? (
                    <a
                      className="certification-link"
                      href={credential.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Credential <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="certification-link certification-link-muted">
                      View Certificate
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      {showMoreProjects ? (
        <div
          className="media-viewer project-more-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Additional projects"
          onClick={() => setShowMoreProjects(false)}
        >
          <div
            className="media-viewer-panel project-more-modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="media-viewer-header">
              <div>
                <strong>Additional Projects</strong>
                <span>Two more project showcases</span>
              </div>
              <button
                type="button"
                aria-label="Close additional projects"
                onClick={() => setShowMoreProjects(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="project-more-modal-grid">
              {extraProjects.map((project) => (
                <article className="project-card project-card-compact" key={project.title}>
                  {project.images?.length ? (
                    <button
                      className="project-media-button"
                      type="button"
                      aria-label={`Open ${project.title} gallery`}
                      onClick={() => {
                        setShowMoreProjects(false);
                        openMediaViewer(project);
                      }}
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
                  <h3>
                    {project.title}
                    {project.titleNote && (
                      <span className="project-title-note">{project.titleNote}</span>
                    )}
                  </h3>
                  <span>{project.shortDescription || project.description}</span>
                  <div className="tag-row">
                    {project.tags.slice(0, 5).map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                    {project.tags.length > 5 ? (
                      <small>+{project.tags.length - 5}</small>
                    ) : null}
                  </div>
                  <div className="project-actions">
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
                    <button
                      className="project-details-button"
                      type="button"
                      onClick={() => {
                        setShowMoreProjects(false);
                        openProjectDetails(project);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <button
              className="project-collapse-button project-more-modal-close"
              type="button"
              onClick={() => setShowMoreProjects(false)}
            >
              Collapse
            </button>
          </div>
        </div>
      ) : null}
      {projectDetails ? (
        <div
          className="media-viewer project-details-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectDetails.title} details`}
          onClick={closeProjectDetails}
        >
          <div
            className="media-viewer-panel project-details-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="media-viewer-header">
              <div>
                <strong>
                  {projectDetails.title}
                  {projectDetails.titleNote && (
                    <span className="project-title-note">{projectDetails.titleNote}</span>
                  )}
                </strong>
                <span>
                  {projectDetails.type} • {projectDetails.year}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close project details"
                onClick={closeProjectDetails}
              >
                <X size={18} />
              </button>
            </div>
            <div className="project-details-content">
              {projectDetails.images?.[0] ? (
                <button
                  className="project-details-media"
                  type="button"
                  aria-label={`Open ${projectDetails.title} gallery`}
                  onClick={() => {
                    closeProjectDetails();
                    openMediaViewer(projectDetails);
                  }}
                >
                  <img
                    src={projectDetails.images[0].src}
                    alt={
                      projectDetails.images[0].alt ||
                      `${projectDetails.title} preview`
                    }
                  />
                  <span>
                    <Images size={14} />
                    View gallery
                  </span>
                </button>
              ) : null}
              <div className="project-details-copy">
                <p>{projectDetails.description}</p>
                {projectDetails.highlights ? (
                  <div className="project-highlights">
                    <strong>What I built</strong>
                    <ul>
                      {projectDetails.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {projectDetails.contribution ? (
                  <div className="project-details-contribution">
                    <strong>My contribution</strong>
                    <p>{projectDetails.contribution}</p>
                  </div>
                ) : null}
                <div className="tag-row">
                  {projectDetails.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={projectDetails.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-link-icon">
                    <GitHubLogo />
                  </span>
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
            {mediaViewer.description ? (
              <div className="media-viewer-details">
                {mediaViewer.organization || mediaViewer.date ? (
                  <small>
                    {[mediaViewer.organization, mediaViewer.date]
                      .filter(Boolean)
                      .join(' • ')}
                  </small>
                ) : null}
                <p>{mediaViewer.description}</p>
              </div>
            ) : null}
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
      {/* Floating navigation controls */}
      <div className="floating-nav-controls">
        <button
          className={`floating-nav-btn ${!showScrollArrows.up ? 'is-hidden' : ''}`}
          type="button"
          onClick={() => navigateSection('up')}
          aria-label="Scroll to previous section"
        >
          <ChevronUp size={20} />
        </button>
        <button
          className={`floating-nav-btn ${!showScrollArrows.down ? 'is-hidden' : ''}`}
          type="button"
          onClick={() => navigateSection('down')}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={20} />
        </button>
      </div>
      {/* Hidden SVG filter to erode image fringe/borders */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="erode-fringe">
          <feMorphology operator="erode" in="SourceAlpha" radius="1.3" result="eroded" />
          <feGaussianBlur in="eroded" stdDeviation="0.8" result="blurred" />
          <feComposite in="SourceGraphic" in2="blurred" operator="in" />
        </filter>
      </svg>
      </main>

      {/* Mobile Menu Dropdown/Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          <nav className="mobile-menu-links">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#leadership" onClick={() => setMobileMenuOpen(false)}>Leadership</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
            <a href="#awards" onClick={() => setMobileMenuOpen(false)}>Awards</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a 
              className="mobile-cv-download" 
              href={profile.cv} 
              download 
              onClick={() => setMobileMenuOpen(false)}
            >
              Download CV <Download size={16} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default App;


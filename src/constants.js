// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import MVC from './assets/tech_logo/MVC.jpg';
import JWT from './assets/tech_logo/JWT.jpg';
import LINUX from './assets/tech_logo/LINUX.PNG';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Certificate card cover images (add these files to src/assets/cert_covers/)
import certCyberCover from './assets/cert_covers/cyber.jpeg';
import certDsaCover from './assets/cert_covers/dsa.webp';
import certMernCover from './assets/cert_covers/mern.png';
import certCloudCover from './assets/cert_covers/cloud.png';
import certHardwareCover from './assets/cert_covers/hardware.jpg';
import certNetworkCover from './assets/cert_covers/network.jpg';
import certAutomationCover from './assets/cert_covers/automation.jpg';
import certAiCover from './assets/cert_covers/ai.jpg';
import certCppCover from './assets/cert_covers/cpp.png';
import certMongoDbCover from './assets/cert_covers/mongodb.jpg';

// Experience Section Logo's (not currently rendered but kept for extensibility)
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import lpuLogo from './assets/education_logo/LPU.png';
import kvLogo from './assets/education_logo/KV.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import quickparkImg from './assets/work_logo/quickparkImg.jpg';
import wanderlustImg from './assets/work_logo/wanderlustImg.png';
import edunexusImg from './assets/work_logo/edunexusImg.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'PHP', logo: javascriptLogo },
      { name: 'MVC Architecture', logo: MVC },
      { name: 'JWT', logo: JWT },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Docker', logo: mcLogo },
      { name: 'Linux', logo: LINUX },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Lovely Professional University, Punjab",
      badge: "LPU",
      date: "Aug 2023 - Present",
      grade: "CGPA: 7.43",
      desc: "Pursuing Bachelor of Technology in Computer Science and Engineering with a focus on full‑stack web development, networking, and security. Active in project‑based learning and hands‑on labs.",
      degree: "B.Tech in Computer Science & Engineering",
    },
    {
      id: 1,
      img: kvLogo,
      school: "Kendriya Vidyalaya Fatehgarh",
      badge: "KV",
      date: "2021 - 2022",
      grade: "Percentage: 82%",
      desc: "Completed Senior Secondary (Class XII) with PCM and Computer Science, building a strong foundation in mathematics, physics, and programming fundamentals.",
      degree: "CBSE (Class XII) – PCM with Computer Science",
    },
    {
      id: 2,
      img: kvLogo,
      school: "Kendriya Vidyalaya Fatehgarh",
      badge: "KV",
      date: "2019 - 2020",
      grade: "Percentage: 84%",
      desc: "Completed Secondary (Class X) with strong performance across science and mathematics, nurturing early interest in problem‑solving and technology.",
      degree: "CBSE (Class X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "QuickPark – Online Parking Space Finder & Booking System",
      description:
        "Dynamic parking space discovery and booking platform that lets users search available slots, make reservations, and manage bookings in real time with secure data storage and smooth UI.",
     image: quickparkImg,
      tags: ["PHP", "MySQL", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/haniharish/finding-parking-space-with-booking-system.git",
      webapp: "",
    },
    {
      id: 1,
      title: "WanderLust – Travel Accommodation Platform",
      description:
        "Full‑stack MERN travel accommodation platform where users can browse, create, edit, and manage property listings with JWT‑based auth, role‑based authorization, and image uploads via Cloudinary.",
      image: wanderlustImg,
      tags: ["MongoDB", "Express.js", "Node.js", "React.js", "Tailwind CSS"],
      github: "https://github.com/haniharish/wanderlust.git",
      webapp: "",
    },
    {
      id: 2,
      title: "EduNexus – Course Management Platform",
      description:
        "MERN‑based course management system for instructors to create and publish courses, upload lectures, assign coursework, and monitor student enrollments from a centralized dashboard.",
      image: edunexusImg,
      tags: ["MongoDB", "Express.js", "Node.js", "React.js", "Tailwind CSS"],
      github: "https://github.com/haniharish/EduNexus.git",
      webapp: "",
    },
  ];  

export const certifications = [
  {
    id: 0,
    title: "Cyber Security Essentials",
    issuer: "Cisco Networking Academy (via LPU Skills Digital Platform)",
    date: "Jun 2025 - Jul 2025",
    link: "https://drive.google.com/file/d/1AeZLSxTsZXS6w42cdfCZ2_7xdU10nkRe/view?usp=drive_link",
    cover: certCyberCover,
  },
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/1Upi_cHt9UcS1XJt0RtAe5dScsF6CjbJp/view?usp=drive_link",
    cover: certCloudCover,
  },
  {
    id: 2,
    title: "Alpha – Data Structure and Algorithm with Java",
    issuer: "Apna College",
    date: "May 2024",
    link: "https://drive.google.com/file/d/1K-tKI8J11qbkxJiJv2Yrv6ljGoRNyjPZ/view?usp=drive_link",
    cover: certDsaCover,
  },
  {
    id: 3,
    title: "Introduction to Hardware and Operating System",
    issuer: "IBM (Coursera)",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1PKVSZFvPSQ97RRPOoUXBltgaVcKlqByq/view?usp=drive_link",
    cover: certHardwareCover,
  },
  {
    id: 4,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1jnFOJjGkFF9igft1nU6WQCGkbvWf-NEk/view?usp=drive_link",
    cover: certNetworkCover,
  },
  {
    id: 5,
    title: "Delta – Full Stack Web Development",
    issuer: "Apna College",
    date: "Dec 2023",
    link: "https://drive.google.com/file/d/1rM21MHXQpSWInX4lw2SOTqAz2gpslwn3/view?usp=drive_link",
    cover: certMernCover,
  },
  {
    id: 6,
    title: "AI",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/17qJinDlhGzT0AdfI7dyMEXyvYDr-eiFy/view?usp=drive_link",
    cover: certAiCover,
  },
  {
    id: 7,
    title: "Automation",
    issuer: "Infosys",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1tNHpr0VZXT6XywfdLZFh7XXAyBshjTUp/view?usp=drive_link",
    cover: certAutomationCover,
  },
  {
    id: 8,
    title: "C++",
    issuer: "neoColab",
    date: "Aug 24 - Dec 24",
    link: "https://drive.google.com/file/d/1hkR-5UwtAK8WEBFcRxUHmzRiV-g-Qs2a/view?usp=drive_link",
    cover: certCppCover,
  },
  {
    id: 9,
    title: "MongoDB",
    issuer: "MongoDB University",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1e7SWeXr7SSOzl1q-GYyBkzO8UvNC5xEN/view?usp=drive_link",
    cover: certMongoDbCover,
  },
];

export const trainings = [
  {
    id: 0,
    title: "Cybersecurity Summer Training",
    subtitle: "Cyber Security Essentials (Training)",
    provider: "LPU Skills Digital Platform",
    date: "Jun 25 - Jul 25",
    hours: "",
    description:
      "Completed structured summer training in cybersecurity, building foundations in threat analysis, network security, and secure system practices through guided modules and hands‑on learning.",
    highlights: [
      "Covered core security concepts: threats, vulnerabilities, and basic defenses.",
      "Strengthened networking fundamentals with a security-first approach.",
      "Improved practical learning through consistent labs and problem solving.",
    ],
    project: "",
    link: "https://drive.google.com/file/d/1Upi_cHt9UcS1XJt0RtAe5dScsF6CjbJp/view?usp=drive_link",
    cover: certCyberCover,
  },
  {
    id: 1,
    title: "Placement Ace: MERN",
    subtitle: "Centre for Professional Enhancement, LPU",
    provider: "Centre for Professional Enhancement (LPU)",
    date: "Feb 2026",
    hours: "140",
    description:
      "Attended an intensive MERN program covering core concepts in depth, with guided lectures and hands‑on practice.",
    highlights: [
      "Completed all MERN concepts in detail (MongoDB, Express.js, React.js, Node.js).",
      "Built a complete project with focus on real-world workflow and structure.",
      "Practiced backend APIs, authentication basics, and component-driven UI.",
    ],
    project: "Project Management System",
    link: "https://github.com/haniharish/project-management-tool",
    cover: certMernCover,
  },
];

export const achievements = [
  {
    id: 0,
    title: "Golden League Badge on TryHackMe",
    subtitle: "Ranked in the Top 1–3% globally",
    date: "2025",
    description:
      "Earned the Golden League badge by consistently completing hands-on labs focused on reconnaissance, web security, and basic penetration testing.",
    image: certCyberCover,
    tags: ["TryHackMe", "Cybersecurity", "Hands-on Labs"],
    details: [
      "Completed 45 rooms as part of structured training and consistent practice.",
      "Completed guided and challenge-based rooms to strengthen practical security skills.",
      "Focused on reconnaissance, web security basics, and fundamental pentesting workflows.",
      "Built consistency through regular lab practice and writeups.",
    ],
    proofLink: "https://tryhackme.com/harishhani2004/badges/gold-league?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6849782ab01e951e4fa4abcd",
  },
];
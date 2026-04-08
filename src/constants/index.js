export const BRAND_CONTENT = {
  firstName: "Guntass",
  lastName: "Kaur",
  fullName: "Guntass Kaur",
  roles: ["Full Stack Developer", "AI & NLP Systems Engineer"],
  tagline: "Building AI-driven scalable systems",
  subtext: "AI | Full Stack | Intelligent Systems",
  email: "kaurguntass2508@gmail.com",
  github: "https://github.com/GuntassKaur",
  linkedin: "https://www.linkedin.com/in/guntass-kaur-08a360352",
  resumeUrl: "#",
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  headline: "Building AI-driven scalable systems",
  subheading: "AI | Full Stack | Intelligent Systems",
};

export const ABOUT_CONTENT = {
  text: "I am a B.Tech Computer Science student (CGPA: 9.15) focused on building AI-driven scalable systems. I work at the intersection of Full Stack Development, AI & NLP Systems, and System Design & Distributed Systems. I believe in building real-world systems, not just projects.",
  academicHighlights: [
    { label: "B.Tech CSE", value: "9.15 CGPA", period: "2023–2027" },
    { label: "Class XII", value: "80%", institution: "Modern High School" },
    { label: "Class X", value: "95%", institution: "Modern High School" }
  ]
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "Layout" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "Code2" },
      { name: "React.js", icon: "Zap" },
      { name: "Next.js", icon: "Rocket" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Settings" },
      { name: "FastAPI", icon: "Zap" }
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "NLP", icon: "Brain" },
      { name: "AI Agents (LangGraph)", icon: "Bot" },
      { name: "Semantic Analysis", icon: "Search" }
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "MySQL", icon: "Database" }
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      { name: "AWS", icon: "Cloud" },
      { name: "GCP", icon: "Cloud" },
      { name: "Oracle Cloud", icon: "Cloud" },
      { name: "Docker", icon: "Box" },
      { name: "GitHub CI/CD", icon: "GitBranch" },
      { name: "Playwright", icon: "TestTube" }
    ],
  },
];

export const PROJECTS = [
  {
    id: "jeevanet",
    title: "JEEVANET — Autonomous 5G Emergency Intelligence Network",
    isFeatured: true,
    tech: ["Go", "MQTT", "AI", "Edge Computing", "Distributed Systems"],
    bullets: [
      "AI-based emergency response system using real-time predictive analytics",
      "Dynamically generates 'Green Corridors' for ambulances",
      "Event-driven architecture using Go + MQTT",
      "Explores V2X communication and edge intelligence",
      "Designed as scalable smart city infrastructure"
    ],
    links: { demo: "#", github: "https://github.com/GuntassKaur/JEEVANET-Autonomous-5G-Powered-Emergency-Intelligence-Network-" },
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "ai-automation",
    title: "AI Business Automation System (Ongoing)",
    tech: ["FastAPI", "PostgreSQL", "LangGraph", "AI Agents"],
    bullets: [
      "AI agent-based automation system",
      "Automates workflows and business decisions",
      "Scalable backend architecture using APIs",
      "Focused on real-world automation"
    ],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2664",
  },
  {
    id: "confera-ai",
    title: "CONFERA AI",
    tech: ["React.js", "Node.js", "WebRTC", "OpenAI API"],
    bullets: [
      "AI-powered video conferencing platform",
      "Smart Recall (summaries + key points)",
      "Live transcription and speaker tracking",
      "Real-time communication system"
    ],
    links: { demo: "https://confera-ai-video-conferencing.vercel.app", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "verimind",
    title: "VERIMIND (Intelligent Suite)",
    tech: ["Python", "Flask", "NLP"],
    bullets: [
      "Detects AI-generated content",
      "Uses semantic analysis and scoring",
      "Focused on hallucination detection",
      "Improves AI reliability"
    ],
    links: { demo: "https://verimind-intelligent-suite-np75.vercel.app", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1620712943543-bcc45c553385?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "swift-miles",
    title: "SWIFT MILES — Cab Booking System",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    bullets: [
      "Cab booking system with admin/user modules",
      "OTP authentication and validation",
      "Optimized database queries"
    ],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "shifra",
    title: "SHIFRA ROBOT",
    isRunnerUp: true,
    tech: ["Arduino", "Python", "Sensors"],
    bullets: [
      "Voice-controlled AI robot",
      "Obstacle detection using sensors",
      "Real-time interaction system",
      "Runner-Up project in technical competition"
    ],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2670",
  },
];

export const EXPERIENCE = [
  {
    role: "Industrial Training",
    company: "VMM Java Training",
    period: "Jun 2023 - Aug 2023",
    highlights: [
      "Mastered Core and Advanced Java with multithreading and database connectivity.",
      "Developed Swift Miles desktop application using Swing and JDBC.",
      "Implemented secure authentication and optimized SQL queries."
    ],
    tech: ["Java", "JDBC", "Swing", "MySQL"]
  }
];

export const ACHIEVEMENTS = [
  { 
    title: "Runner-Up – Udaan Fest", 
    desc: "Achieved 2nd place for the Shifra AI Assistant Robot project.", 
    icon: "Trophy",
  },
  { 
    title: "9.15 CGPA", 
    desc: "Academic excellence in B.Tech Computer Science.", 
    icon: "Star",
  },
  { 
    title: "Research Paper", 
    desc: "Ongoing publications in WSN and Intelligent Systems.", 
    icon: "FileText",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in CSE",
    institution: "Global Group of Institutes",
    period: "2023 – 2027",
    highlights: ["9.15 CGPA", "Focused on AI and Distributed Systems"],
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Modern High School",
    period: "2022",
    highlights: ["80.0%", "Physics, Chemistry, Mathematics"],
  },
  {
    degree: "Class X (CBSE)",
    institution: "Modern High School",
    period: "2020",
    highlights: ["95.0%", "Academic Distinction"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "OCI 2024 Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    name: "AWS Cloud Explorer",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
  },
  {
    name: "GCP Foundations",
    issuer: "Google Cloud Platform",
    year: "2023",
  },
];

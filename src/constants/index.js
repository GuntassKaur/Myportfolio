export const BRAND_CONTENT = {
  firstName: "Guntass",
  lastName: "Kaur",
  fullName: "Guntass Kaur",
  roles: ["Aspiring Software Engineer", "AI & Intelligent Systems Developer"],
  tagline: "I design intelligent systems and scalable digital experiences that solve real-world problems.",
  subtext: "AI | Full Stack | Intelligent Systems",
  email: "kaurguntass2508@gmail.com",
  github: "https://github.com/GuntassKaur",
  linkedin: "https://www.linkedin.com/in/guntass-kaur-08a360352",
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
  headline: "Hi, I’m Guntass Kaur",
  subheading: "Aspiring Software Engineer | AI & Intelligent Systems Developer",
  powerStatement: "I design intelligent systems and scalable digital experiences that solve real-world problems.",
};

export const ABOUT_CONTENT = {
  text: "I focus on building systems that combine intelligence, usability, and real-world impact.",
  academicHighlights: [
    { label: "B.Tech CSE (2023–2027)", value: "9.15 CGPA", icon: "GraduationCap" },
    { label: "Class XII (CBSE)", value: "80%", icon: "BookOpen" },
    { label: "Class X (CBSE)", value: "95%", icon: "Award" },
    { label: "Runner-Up Project", value: "Udaan Fest", icon: "Trophy" }
  ]
};

export const PROJECTS = [
  {
    id: "shifra",
    title: "SHIFRA",
    isFeatured: true,
    badge: "🏆 Runner-Up Project",
    tech: ["Arduino", "Python", "Sensors", "Speech Recognition", "Embedded Systems"],
    problem: "Need for smart navigation and real-time interaction in compact robotic systems.",
    solution: "An AI-powered intelligent assistant robot built using embedded systems, sensors, and voice interaction for smart real-time assistance.",
    impact: "Provides smart navigation and real-time assistance with a hardware + AI aesthetic.",
    description: "An AI-powered intelligent assistant robot built using embedded systems, sensors, and voice interaction for smart real-time assistance.",
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2670",
    visualStyle: "robotic-ai",
  },
  {
    id: "confera-ai",
    title: "ConferaAI",
    subtitle: "AI-Powered Video Conferencing Platform with Smart Recap & Intelligent Meeting Insights",
    tech: ["React.js", "Node.js", "WebRTC", "OpenAI API", "LiveKit"],
    problem: "Fragmented meeting experiences without intelligent context or easy recall.",
    solution: "A modern realtime communication platform featuring AI-generated recaps, meeting summaries, transcription, and intelligent conversation tracking.",
    features: ["AI Recap", "Smart summaries", "Live transcription", "Realtime communication", "Meeting intelligence"],
    impact: "Transforms conversations into searchable and actionable intelligence.",
    description: "A modern realtime communication platform featuring AI-generated recaps, meeting summaries, transcription, and intelligent conversation tracking.",
    links: { demo: "https://confera-ai-video-conferencing-gk.vercel.app", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
    visualStyle: "saas-dashboard",
  },
  {
    id: "aurix",
    title: "AURIX",
    subtitle: "AI-Powered Healthcare & Emergency Assistance Platform",
    tech: ["Go", "Next.js", "MQTT", "Distributed Systems", "Firebase"],
    problem: "Traditional healthcare response systems often lack realtime accessibility and smart coordination.",
    solution: "Built an intelligent healthcare support ecosystem with responsive modern architecture and realtime accessibility-focused workflows.",
    impact: "Improves healthcare accessibility, emergency responsiveness, and digital coordination.",
    description: "AURIX is a modern AI-powered healthcare and emergency support platform designed to improve accessibility, emergency coordination, and intelligent health assistance.",
    links: { demo: "https://aurix-tactical-v1.web.app/", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=2670",
    visualStyle: "healthcare-medical",
  },
  {
    id: "swift-miles",
    title: "Swift Miles",
    subtitle: "Enterprise Cab Booking Management System",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    problem: "Inefficient manual management of cab bookings and fleet operations.",
    solution: "A desktop-based cab booking management system focused on optimized operations and database management.",
    impact: "Streamlines booking workflows and fleet management for enterprise environments.",
    description: "A desktop-based cab booking management system focused on optimized operations, database management, and efficient booking workflows.",
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670",
    visualStyle: "enterprise-system",
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

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "C/C++", icon: "Code" },
      { name: "Java", icon: "Code" },
      { name: "Python", icon: "Code" },
      { name: "JavaScript", icon: "Code" },
      { name: "Go", icon: "Code" }
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "Zap" },
      { name: "Next.js", icon: "Rocket" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Activity" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Settings" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Firebase", icon: "Flame" }
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "NLP", icon: "Brain" },
      { name: "LangChain", icon: "Link" },
      { name: "Computer Vision", icon: "Eye" },
      { name: "Prompt Engineering", icon: "MessageSquare" }
    ],
  },
  {
    category: "IoT",
    items: [
      { name: "Arduino", icon: "Cpu" },
      { name: "Sensors", icon: "Activity" },
      { name: "Embedded C", icon: "Terminal" }
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git/GitHub", icon: "GitBranch" },
      { name: "Docker", icon: "Box" },
      { name: "VS Code", icon: "Layout" },
      { name: "Postman", icon: "Send" }
    ],
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
    title: "Review Paper", 
    desc: "Presented paper in international conference at Global Group of Institutes on Wireless Sensor Network.", 
    icon: "FileText",
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    year: "Jan 2026",
    type: "AI",
    desc: "Gained hands-on experience in Exploratory Data Analysis, Generative AI applications, and data-driven problem solving.",
    credentialId: "FORAGE-AI-2026",
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
    skills: ["Data Analytics", "GenAI"]
  },
  {
    id: "cert-2",
    name: "Java & ChatGPT for Web Development",
    issuer: "Udemy",
    year: "Jan 2026",
    type: "Code",
    desc: "Developed skills in Java programming and integrating AI tools like ChatGPT into web workflows.",
    credentialId: "UC-JAVA-GPT-99",
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
    skills: ["Java", "AI Integration"]
  },
  {
    id: "cert-3",
    name: "Gemini Certified Student",
    issuer: "Google",
    year: "2025",
    type: "AI",
    desc: "Acquired knowledge in Generative AI, Prompt Engineering, and modern AI tools.",
    credentialId: "GOOGLE-GEM-2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
    skills: ["Generative AI", "Prompt Engineering"]
  },
  {
    id: "cert-4",
    name: "Oracle Cloud AI Foundations",
    issuer: "Oracle",
    year: "2025",
    type: "AI",
    desc: "Built foundational understanding of AI concepts and cloud infrastructure on OCI.",
    credentialId: "ORACLE-OCI-AI",
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
    skills: ["AI Foundations", "Cloud"]
  },
];


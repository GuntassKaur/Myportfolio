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
  headline: "Hi, I'm Guntass Kaur",
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
    title: "Shifra — AI Powered Smart Assistant Robot",
    subtitle: "Building Intelligent Robotics for Real-World Assistance.",
    isFeatured: true,
    badge: "🏆 Runner-Up | National Level Technical Fest",
    category: "AI & Robotics",
    tags: ["Artificial Intelligence", "Embedded Systems", "IoT", "Robotics"],
    problem: "Traditional robotic assistants often lack affordable intelligent interaction and autonomous navigation.",
    solution: "Designed and developed an AI-powered robotic assistant capable of voice interaction, obstacle detection, and autonomous movement using embedded systems and intelligent sensors.",
    impact: "Demonstrates practical AI + IoT integration capable of solving real-world assistance problems while showcasing hardware and software engineering together.",
    tech: ["Arduino", "Python", "Embedded Systems", "Speech Recognition", "Ultrasonic Sensors", "IR Sensors"],
    features: ["Voice Commands", "Obstacle Detection", "Real-time Navigation", "AI Decision Making", "Embedded Intelligence"],
    links: { github: "https://github.com/GuntassKaur" },
    image: "/shifra_robot.png",
    visualStyle: {
      accentGrad: "from-purple-500 to-cyan-500",
      glowColor: "rgba(168, 85, 247, 0.25)",
      borderColor: "group-hover:border-purple-500/50",
      textColor: "text-purple-400",
      buttonColor: "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20"
    }
  },
  {
    id: "dineva-os",
    title: "Dineva OS",
    subtitle: "AI Powered Hospitality Operations Platform",
    category: "Hospitality SaaS",
    tags: ["Full Stack", "AI", "SaaS"],
    description: "Dineva OS is an AI-powered hospitality management platform built for restaurants and cafes to streamline operations through intelligent automation.",
    problem: "Restaurant businesses struggle with fragmented systems for orders, inventory, staff management, and analytics.",
    solution: "Built a scalable SaaS platform that centralizes restaurant operations with AI-assisted workflows, inventory management, order tracking, analytics, and operational dashboards.",
    impact: "Improves operational efficiency, reduces manual workload, and enables smarter business decision-making.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "REST APIs", "AI Integration"],
    features: ["Restaurant Dashboard", "Inventory Management", "Order Tracking", "Analytics", "Workflow Automation"],
    links: { demo: "https://dinevaos.web.app/", github: "https://github.com/GuntassKaur/RestoAi-OS" },
    image: "/dineva_os.png",
    visualStyle: {
      accentGrad: "from-emerald-500 to-blue-500",
      glowColor: "rgba(16, 185, 129, 0.25)",
      borderColor: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
    }
  },
  {
    id: "aurix-rescue-os",
    title: "AURIX Rescue OS",
    subtitle: "AI Powered Emergency Response & Disaster Management Platform",
    category: "Emergency & Healthcare",
    tags: ["AI", "Healthcare", "Emergency Response"],
    description: "AURIX Rescue OS is a modern AI-powered emergency response platform designed to improve healthcare accessibility, disaster coordination, and emergency response through intelligent technology.",
    problem: "Traditional emergency response systems often lack centralized coordination and real-time intelligence.",
    solution: "Developed an intelligent emergency management platform using AI, Firebase, and realtime monitoring for emergency coordination.",
    impact: "Improves emergency response speed, coordination, and accessibility while demonstrating intelligent software architecture.",
    tech: ["React.js", "Firebase", "JavaScript", "AI Monitoring", "Realtime Database"],
    features: ["Emergency Dashboard", "Realtime Monitoring", "Health Support", "Risk Analytics", "AI Coordination"],
    links: { demo: "https://aurix-tactical-v1.web.app/", github: "https://github.com/GuntassKaur/AURIX2" },
    image: "/aurix_dashboard.png",
    visualStyle: {
      accentGrad: "from-cyan-500 to-red-500",
      glowColor: "rgba(6, 182, 212, 0.25)",
      borderColor: "group-hover:border-cyan-500/50",
      textColor: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/20"
    }
  },
  {
    id: "simplify-gold-ai",
    title: "Simplify Gold AI",
    subtitle: "AI Powered Digital Gold Investment Assistant",
    category: "FinTech & AI",
    tags: ["FinTech", "Artificial Intelligence"],
    description: "Simplify Gold AI is an AI-powered investment platform that helps users analyze digital gold investments, manage portfolios, and receive intelligent financial insights using Google's Gemini AI.",
    problem: "Retail investors often lack personalized investment guidance.",
    solution: "Developed an AI-enabled investment platform with portfolio analytics, REST APIs, transaction management, and conversational AI assistance.",
    impact: "Makes digital gold investing easier, smarter, and more accessible.",
    tech: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Gemini API", "REST APIs"],
    features: ["Portfolio Tracking", "AI Chat Assistant", "Investment Analytics", "Realtime Calculations"],
    links: { demo: "https://simplify-gold-ai.onrender.com/", github: "https://github.com/GuntassKaur/Simplify-Gold-AI" },
    image: "/simplify_gold.png",
    visualStyle: {
      accentGrad: "from-amber-500 to-purple-500",
      glowColor: "rgba(245, 158, 11, 0.25)",
      borderColor: "group-hover:border-amber-500/50",
      textColor: "text-amber-400",
      buttonColor: "bg-amber-600 hover:bg-amber-700 shadow-amber-500/20"
    }
  },
  {
    id: "cab-booking-system",
    title: "Cab Booking Management System",
    subtitle: "Java Desktop Enterprise Application",
    category: "Enterprise Desktop",
    tags: ["Java", "Desktop Application"],
    description: "A desktop-based cab booking management system developed using Java Swing and MySQL featuring booking management, customer records, and secure database integration.",
    problem: "Manual transportation management systems are inefficient and difficult to maintain.",
    solution: "Built a Java Swing desktop application implementing Object-Oriented Programming, CRUD operations, authentication, and JDBC connectivity.",
    impact: "Provides an organized desktop solution for transportation businesses.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    features: ["Cab Booking", "Customer Management", "Vehicle Management", "Admin Dashboard", "Database Connectivity"],
    links: { github: "https://github.com/GuntassKaur/Cabbooking-System" },
    image: "/cab_booking.png",
    visualStyle: {
      accentGrad: "from-blue-500 to-orange-500",
      glowColor: "rgba(59, 130, 246, 0.25)",
      borderColor: "group-hover:border-blue-500/50",
      textColor: "text-blue-400",
      buttonColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
    }
  }
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
    period: "2023",
    highlights: ["80%", "Physics, Chemistry, Mathematics"],
  },
  {
    degree: "Class X (CBSE)",
    institution: "Modern High School",
    period: "2021",
    highlights: ["95%", "Academic Distinction"],
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
      { name: "LangGraph", icon: "GitBranch" },
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
      { name: "PostgreSQL", icon: "Database" },
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
    skills: ["Data Analytics", "GenAI", "EDA"]
  },
  {
    id: "cert-2",
    name: "Java & ChatGPT for Web Development",
    issuer: "Udemy",
    year: "Jan 2026",
    type: "Code",
    desc: "Developed skills in Java programming and integrating AI tools like ChatGPT into web workflows.",
    credentialId: "UC-JAVA-GPT-99",
    skills: ["Java", "AI Integration", "Web Dev"]
  },
  {
    id: "cert-3",
    name: "Gemini Certified Student",
    issuer: "Google",
    year: "2025",
    type: "AI",
    desc: "Acquired knowledge in Generative AI, Prompt Engineering, and modern AI tools.",
    credentialId: "GOOGLE-GEM-2025",
    skills: ["Generative AI", "Prompt Engineering", "Google AI"]
  },
  {
    id: "cert-4",
    name: "Oracle Cloud AI Foundations",
    issuer: "Oracle",
    year: "2025",
    type: "AI",
    desc: "Built foundational understanding of AI concepts and cloud infrastructure on OCI.",
    credentialId: "ORACLE-OCI-AI",
    skills: ["AI Foundations", "Cloud", "OCI"]
  },
];

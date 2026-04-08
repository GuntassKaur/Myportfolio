export const BRAND_CONTENT = {
  firstName: "Guntass",
  lastName: "Kaur",
  fullName: "Guntass Kaur",
  roles: ["Aspiring Software Engineer", "AI & Intelligent Systems Developer"],
  tagline: "I design and build intelligent systems that solve real-world problems — not just projects.",
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
  powerLine: "I design and build intelligent systems that solve real-world problems — not just projects.",
  subheading: "Aspiring Software Engineer | AI & Intelligent Systems Developer",
};

export const ABOUT_CONTENT = {
  text: "I am a highly driven B.Tech Computer Science student with a focus on building systems that combine intelligence, scalability, and usability. My approach to engineering is grounded in problem-solving and systems thinking, moving beyond mere code completion to create meaningful real-world impact.",
  philosophy: "I focus on building systems that combine intelligence, scalability, and usability — not just completing projects.",
  academicHighlights: [
    { label: "B.Tech CSE", value: "9.15 CGPA", period: "2023–2027" },
    { label: "Class XII", value: "80%", institution: "Modern High School" },
    { label: "Class X", value: "95%", institution: "Modern High School" }
  ]
};

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: "Coffee" },
      { name: "Python", icon: "Code2" },
      { name: "C/C++", icon: "Cpu" },
      { name: "JavaScript", icon: "Flame" }
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "Zap" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Framer Motion", icon: "Move" },
      { name: "Three.js", icon: "Box" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Settings" },
      { name: "MySQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" }
    ],
  },
  {
    category: "AI / IoT",
    items: [
      { name: "NLP", icon: "Brain" },
      { name: "Computer Vision", icon: "Eye" },
      { name: "Arduino / Sensors", icon: "CircuitBoard" },
      { name: "5G Networking", icon: "Wifi" }
    ],
  },
];

export const PROJECTS = [
  {
    id: "verimind",
    title: "VeriMind",
    subtitle: "AI Content Verification Platform",
    problem: "Rising misinformation and AI-generated text lacking source transparency.",
    solution: "Developed an AI-powered platform for real-time content verification and confidence scoring using advanced NLP.",
    impact: "Provides a reliable trust-layer for digital consumption, reducing the reach of hallucinations and fake content.",
    tech: ["Python", "Flask", "NLP", "React"],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2664",
  },
  {
    id: "confera-ai",
    title: "ConferaAI",
    subtitle: "AI-Powered Video Conferencing",
    problem: "Meeting fatigue and the difficulty of tracking actionable insights from long video calls.",
    solution: "Built a WebRTC-based video platform with integrated OpenAI for real-time summaries and task extraction.",
    impact: "Improves team productivity by automating meeting documentation and highlight generation.",
    tech: ["React", "Node.js", "WebRTC", "OpenAI"],
    links: { demo: "https://confera-ai-video-conferencing-gk.vercel.app", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "jeevanet",
    title: "JeevaNet",
    subtitle: "Autonomous Emergency Network",
    problem: "Traditional emergency response systems suffer from latency and lack of real-time intelligence in disaster zones.",
    solution: "Created an autonomous 5G-powered intelligence network for emergency services with ER tele-surgery capabilities.",
    impact: "Enables critical life-saving coordination in environments where traditional communication infrastructure fails.",
    tech: ["Autonomous Systems", "5G", "IoT", "React"],
    links: { demo: "#", github: "https://github.com/GuntassKaur/JEEVANET-Autonomous-5G-Powered-Emergency-Intelligence-Network-" },
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "shifra",
    title: "Shifra",
    subtitle: "AI Assistant Robot",
    problem: "Limited human-machine interaction in accessible, low-cost domestic automation.",
    solution: "Designed and built an AI assistant robot using Arduino and Python for speech interaction and environmental awareness.",
    impact: "Award-winning proof-of-concept for affordable, intelligent home assistance systems.",
    tech: ["Arduino", "Python", "Sensors", "C++"],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: "swift-miles",
    title: "Swift Miles",
    subtitle: "Java Cab Booking System",
    problem: "Efficiency and security gaps in localized transportation management systems.",
    solution: "A high-performance Java desktop application with OTP verification and optimized JDBC database management.",
    impact: "Streamlined booking workflows and enhanced data security for small-to-medium scale operations.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    links: { demo: "#", github: "https://github.com/GuntassKaur" },
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670",
  },
];

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "InternPe",
    period: "Mar 2024 - Apr 2024",
    highlights: [
      "Built responsive UI components using React and styled them with precision.",
      "Optimized site performance, improving load times by 20%.",
      "Collaborated with developers to integrate RESTful APIs into frontend views."
    ],
    tech: ["React", "JavaScript", "REST APIs"]
  },
  {
    role: "Industrial Training",
    company: "VMM Java Training",
    period: "Jun 2023 - Aug 2023",
    highlights: [
      "Mastered Core and Advanced Java with a focus on multithreading and database connectivity.",
      "Developed Swift Miles desktop application using Swing and JDBC.",
      "Implemented secure authentication and optimized SQL queries."
    ],
    tech: ["Java", "JDBC", "Swing", "MySQL"]
  }
];

export const ACHIEVEMENTS = [
  { 
    title: "Runner-Up – Shifra Robot", 
    desc: "Achieved 2nd place at the Udaan Fest for the Shifra robotic assistant project.", 
    icon: "Trophy",
    color: "#6C5DD3"
  },
  { 
    title: "Research Paper Publication", 
    desc: "Published research on Wireless Sensor Networks and intelligent automation.", 
    icon: "FileText",
    color: "#3CD7FF"
  },
  { 
    title: "Hackathon Excellence", 
    desc: "Participated and ranked in Myntra and Tata technical hackathons.", 
    icon: "Rocket",
    color: "#FFD700"
  },
  { 
    title: "Class Representative", 
    desc: "Elected to lead and represent 60+ students, bridging communication with faculty.", 
    icon: "Users",
    color: "#6C5DD3"
  },
];

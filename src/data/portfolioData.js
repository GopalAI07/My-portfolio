export const personalInfo = {
  name: "GOPAL CHAUHAN",
  title: "PYTHON FULL STACK DEVELOPER",
  tagline: "Building high-performance Python full-stack web applications, modern responsive React interfaces, robust backend APIs & real-time systems.",
  location: "Kandivali West, Mumbai-400067",
  email: "gopalchauhan.gc17@gmail.com",
  phone: "7977032477",
  github: "https://github.com/GopalAI07",
  linkedin: "https://www.linkedin.com/in/gopal-chauhan-1b5949264/",
  summary: "Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level technical position. Ready to help team achieve company goals. Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy.",
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  hobbies: ["Cricket", "VolleyBall", "Carrom"],
  status: "Available for Python Full Stack Developer Roles",
};

export const skillsData = {
  categories: [
    {
      id: "python_backend",
      title: "Python & Backend Architecture",
      icon: "Server",
      color: "from-violet-500 to-purple-600",
      skills: [
        { name: "Programming language Python (OOPs concept)", level: 96, highlight: true },
        { name: "Django Web Framework in Python & MVT", level: 94, highlight: true },
        { name: "FastAPI RESTful Microservices & JWT", level: 92, highlight: true },
        { name: "WebSockets & WebRTC Real-Time Signaling", level: 90, highlight: false },
        { name: "SQLAlchemy ORM & Relational Models", level: 88, highlight: false },
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React js (React 18 & Vite)", level: 95, highlight: true },
        { name: "Programming language JavaScript (ES6+)", level: 93, highlight: true },
        { name: "HTML, CSS and Bootstrap", level: 96, highlight: true },
        { name: "Tailwind CSS & Modern Glassmorphism", level: 94, highlight: false },
        { name: "Three.js & React Three Fiber (3D)", level: 88, highlight: false },
        { name: "Redux Toolkit State Management", level: 86, highlight: false },
      ]
    },
    {
      id: "database",
      title: "Databases & Data Layer",
      icon: "Database",
      color: "from-emerald-400 to-teal-600",
      skills: [
        { name: "MySQL Database", level: 94, highlight: true },
        { name: "PostgreSQL Database", level: 92, highlight: true },
        { name: "SQL Query Design & Optimization", level: 93, highlight: true },
        { name: "Relational Modeling & Foreign Key Integrity", level: 90, highlight: false },
      ]
    },
    {
      id: "cloud_tools",
      title: "AI, Cloud & DevOps Tools",
      icon: "Cpu",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Google Gemini (google-genai) AI API", level: 90, highlight: true },
        { name: "Git & GitHub Version Control", level: 94, highlight: true },
        { name: "Vercel & Render Cloud Deployments", level: 92, highlight: true },
        { name: "Postman API Testing & Debugging", level: 88, highlight: false },
        { name: "Framer Motion & Web Audio API", level: 86, highlight: false },
      ]
    }
  ],
  coreHighlights: [
    "Programming language Python, JavaScript and SQL",
    "Django Web Framework in Python",
    "MVT (Model View Template) in Django",
    "OOPs concept in Python",
    "React js & Modern UI Development",
    "MySQL Database & Relational Architecture"
  ]
};

export const projectsData = [
  {
    id: "ai-meeting-hub",
    title: "AI MEETING HUB",
    badge: "Full-Stack AI Platform",
    subtitle: "Real-Time AI Video Meeting Platform with WebRTC, WebSockets & Gemini Summaries",
    description: "Built a full-stack AI meeting platform (FastAPI + React) with JWT auth, WebRTC video meetings via WebSocket signaling, and Gemini-powered AI meeting summaries — deployed on Vercel and Render.",
    tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "React 18", "Vite", "Redux Toolkit", "Tailwind CSS", "WebSockets", "Google Gemini (google-genai)"],
    languages: ["Python", "JavaScript"],
    stats: [
      { label: "Architecture", value: "FastAPI + React" },
      { label: "Real-Time", value: "WebSockets + WebRTC" },
      { label: "AI Summaries", value: "Google Gemini" },
      { label: "Hosting", value: "Vercel + Render" }
    ],
    features: [
      "Built a full-stack AI meeting platform (FastAPI + React) with secure JWT authentication and token persistence",
      "Low-latency WebRTC video and audio meetings enabled via asynchronous WebSocket signaling relays",
      "Automated meeting transcript and key action-item summarization powered by Google Gemini (google-genai)",
      "Structured relational data modeling with SQLAlchemy ORM and PostgreSQL database storage",
      "Production deployment across Vercel (frontend) and Render (backend services)"
    ],
    websiteLink: "https://google-ai-meeting.vercel.app/",
    githubLink: "https://github.com/GopalAI07/PropFusion-Google-AI-Meeting",
    previewImage: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #064e3b 100%)",
    icon: "Video"
  },
  {
    id: "my-portfolio",
    title: "MY PORTFOLIO",
    badge: "Interactive 3D Sci-Fi Web Platform",
    subtitle: "Cybernetic 3D Web Portfolio with Three.js Probes, Web Audio API & Linux CLI",
    description: "Architected a high-performance, sci-fi cybernetic 3D web portfolio featuring interactive Three.js 3D viewport probes, ambient particle matrices, native Web Audio API sound synthesizers, an interactive Linux CLI terminal, and an ATS-friendly printable resume modal — deployed with optimized Vite bundling.",
    tags: ["React 18", "Vite", "Three.js", "React Three Fiber (@react-three/fiber)", "React Three Drei (@react-three/drei)", "Tailwind CSS", "Framer Motion", "Web Audio API", "Lucide React"],
    languages: ["JavaScript", "HTML5", "CSS3"],
    stats: [
      { label: "3D Viewport", value: "Three.js & R3F" },
      { label: "Audio Synthesizer", value: "Web Audio API" },
      { label: "Interactive CLI", value: "Linux Terminal" },
      { label: "Deployment", value: "Vercel Cloud" }
    ],
    features: [
      "Interactive 3D sci-fi cybernetic viewport rendered with Three.js and React Three Fiber with mouse tracking",
      "Dynamic ambient particle matrices creating a deep space starfield atmosphere",
      "Native Web Audio API sound synthesizers providing tactile futuristic audio feedback on interactions",
      "Interactive Linux CLI terminal allowing recruiters to query skills, projects, and contact info via command prompt",
      "ATS-friendly printable and interactive PDF resume preview modal with print-to-PDF support"
    ],
    websiteLink: "https://gopal-chauhan-portfolio.vercel.app/",
    githubLink: "https://github.com/GopalAI07/My-portfolio",
    previewImage: "linear-gradient(135deg, #060e28 0%, #0d1b42 50%, #02040d 100%)",
    icon: "Layers"
  },
  {
    id: "library-management-system",
    title: "LIBRARY MANAGEMENT SYSTEM USING DJANGO",
    badge: "Django & MySQL Web Application",
    subtitle: "Web-Based Library Management System with Student Registrations & Issue/Return Tracking",
    description: "Built a web-based Library Management System (Django + MySQL) to manage student registrations, book records, and issue/return tracking, with a responsive Bootstrap and JavaScript frontend.",
    tags: ["Django", "MySQL", "Bootstrap", "Python", "JavaScript", "HTML5", "CSS3", "MVT Pattern"],
    languages: ["Python", "JavaScript"],
    stats: [
      { label: "Architecture", value: "Django MVT" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Frontend", value: "Bootstrap + JS" },
      { label: "Cloud Hosting", value: "Render Cloud" }
    ],
    features: [
      "Built a web-based Library Management System (Django + MySQL) following clean MVT architectural patterns",
      "Automated student registrations, book catalog records, category filtering, and real-time inventory management",
      "Seamless book issue/return tracking workflows with overdue calculation and transaction logging",
      "Responsive user interface developed using Bootstrap, HTML5, CSS3, and interactive JavaScript",
      "Deployed and hosted on Render cloud infrastructure with live database connectivity"
    ],
    websiteLink: "https://library-management-system-ilnn.onrender.com",
    githubLink: "https://github.com/GopalAI07/Library-Management-System-Using-django",
    previewImage: "linear-gradient(135deg, #1e1b4b 0%, #31104b 50%, #0f172a 100%)",
    icon: "BookOpen"
  }
];

export const educationData = [
  {
    degree: "ARTIFICIAL INTELLIGENCE & DATA SCIENCE (AI & DS ) ENGINEERING",
    institution: "RIZVI COLLEGE OF ENGINEERING, BANDRA",
    duration: "Aug 2020 - Oct 2024",
    grade: "Aggregate CGPI: 7.83",
    badge: "B.E. Degree (AI & DS)",
    highlights: [
      "Completed my Bachelors Of Engineering & Technology in the field of Artificial Intelligence & Data Science from Rizvi College Of Engineering, Bandra With an Aggregate CGPI of 7.83",
      "Strong foundation in OOPs concept in Python, Django Web Framework (MVT), React js, MySQL Database, and SQL programming.",
      "Architected and deployed full-stack web applications including AI Meeting Hub, Sci-Fi 3D Portfolio, and Django Library Management System."
    ]
  },
  {
    degree: "HIGHER SECONDARY CERTIFICATION (H.S.C.) IN SCIENCE",
    institution: "SHRI T.P. BHATIA COLLEGE OF SCIENCE, KANDIVALI",
    duration: "June 2018 - June 2020",
    grade: "Passing Percentage: 68%",
    badge: "H.S.C. Science",
    highlights: [
      "Completed my Secondary & Higher Secondary Certification i.e. H.S.C. from shri T.P. Bhatia College Of Science, Kandivali in the field of Science with passing percentage of 68%",
      "Solid groundwork in Mathematics, Physics, Chemistry, and Information Technology."
    ]
  }
];

export const certificatesData = [
  {
    title: "Introduction To JavaScript.",
    issuer: "Technical Certification",
    category: "Frontend Programming",
    icon: "Code2",
    date: "Verified",
    links: [
      { label: "View Certificate", url: "#" }
    ]
  },
  {
    title: "Python Fundamentals For Beginners.",
    issuer: "Programming Academy",
    category: "Python & Systems",
    icon: "Terminal",
    date: "Verified",
    links: [
      { label: "View Certificate", url: "#" }
    ]
  },
  {
    title: "PropFusion Training Program.",
    issuer: "PropFusion Industry Training",
    category: "Full-Stack Development",
    icon: "Sparkles",
    date: "Verified",
    links: [
      { label: "View Certificate", url: "#" },
      { label: "View LOR", url: "#" },
      { label: "View LOR Certificate.pdf", url: "#" }
    ]
  }
];

export const terminalCommands = {
  help: "Available commands: 'skills', 'projects', 'education', 'contact', 'about', 'clear', 'resume', 'hire'",
  skills: "Python (OOPs concept), Django (MVT), React js (React 18 & Vite), JavaScript, HTML, CSS & Bootstrap, MySQL Database, SQL, FastAPI, PostgreSQL, WebSockets, WebRTC",
  projects: "1. AI MEETING HUB (FastAPI + React 18 + WebSockets + WebRTC + Gemini AI)\n2. MY PORTFOLIO (React 18 + Three.js + Web Audio API + Linux CLI)\n3. LIBRARY MANAGEMENT SYSTEM USING DJANGO (Django + MySQL + Bootstrap)",
  education: "B.E. in AI & DS @ Rizvi College Of Engineering, Bandra (Aggregate CGPI: 7.83) | H.S.C. Science @ Shri T.P. Bhatia College Of Science (68%)",
  contact: "Email: gopalchauhan.gc17@gmail.com | Phone: 7977032477 | Kandivali West, Mumbai-400067",
  about: "Gopal Chauhan - PYTHON FULL STACK DEVELOPER. Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level technical position.",
  hire: "Status: Available immediately for Python Full Stack Developer roles! Contact: gopalchauhan.gc17@gmail.com | 7977032477"
};


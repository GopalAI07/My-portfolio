export const personalInfo = {
  name: "GOPAL CHAUHAN",
  title: "Full-Stack Developer",
  tagline: "Building high-performance full-stack web applications, modern responsive interfaces, robust backend APIs & real-time systems.",
  location: "Kandivali West, Mumbai - 400067, Maharashtra, India",
  email: "gopalchauhan.gc17@gmail.com",
  phone: "+91 7977032477",
  github: "https://github.com/GopalAI07",
  linkedin: "https://www.linkedin.com/in/gopal-chauhan-1b5949264/",
  summary: "Hardworking and passionate Full-Stack Developer eager to engineer scalable, user-centric web applications and robust server architectures. Detail-oriented team player with strong foundations in modern frontend engineering (React 18, JavaScript ES6+, Tailwind CSS), high-speed backend systems (FastAPI, Django MVT, Python OOP), real-time WebRTC/WebSockets, and relational database management (PostgreSQL, MySQL).",
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  hobbies: ["Cricket", "Volleyball", "Carrom", "Open Source Exploration"],
  status: "Available for Full-time Full-Stack Developer Roles",
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React 18 & Vite", level: 94, highlight: true },
        { name: "JavaScript (ES6+) & Modern DOM", level: 93, highlight: true },
        { name: "Tailwind CSS & Glassmorphism", level: 95, highlight: true },
        { name: "Three.js / React Three Fiber", level: 85, highlight: false },
        { name: "Redux Toolkit State Management", level: 88, highlight: false },
        { name: "HTML5, Semantic UI & Bootstrap 5", level: 96, highlight: false },
      ]
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      icon: "Server",
      color: "from-violet-500 to-purple-600",
      skills: [
        { name: "Python (Advanced OOP & Architecture)", level: 95, highlight: true },
        { name: "FastAPI RESTful Microservices", level: 92, highlight: true },
        { name: "Django & MVT Web Framework", level: 92, highlight: true },
        { name: "RESTful API Design & JWT Auth", level: 94, highlight: true },
        { name: "WebSockets & WebRTC Signaling", level: 88, highlight: false },
        { name: "SQLAlchemy ORM & Data Models", level: 88, highlight: false },
      ]
    },
    {
      id: "database",
      title: "Databases & Data Layer",
      icon: "Database",
      color: "from-emerald-400 to-teal-600",
      skills: [
        { name: "PostgreSQL Database", level: 92, highlight: true },
        { name: "MySQL Relational Database", level: 93, highlight: true },
        { name: "SQL Query Optimization & Schemas", level: 94, highlight: true },
        { name: "Relational Modeling & Transactions", level: 90, highlight: false },
        { name: "NumPy & Pandas Data Processing", level: 88, highlight: false },
        { name: "Data Analytics & Plotly Dashboards", level: 86, highlight: false },
      ]
    },
    {
      id: "devops_tools",
      title: "Cloud, DevOps & Tools",
      icon: "Cpu",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Git & GitHub Version Control", level: 94, highlight: true },
        { name: "Vercel & Render Cloud Hosting", level: 90, highlight: true },
        { name: "Postman API Testing & Debugging", level: 90, highlight: true },
        { name: "Google Gemini AI API Integration", level: 88, highlight: false },
        { name: "Streamlit Rapid Web Prototyping", level: 90, highlight: false },
        { name: "Responsive Cross-Browser Design", level: 95, highlight: false },
      ]
    }
  ],
  coreHighlights: [
    "End-to-End Full-Stack Architecture",
    "Frontend UI/UX & Responsive Design",
    "Python Object-Oriented Programming (OOP)",
    "RESTful API & JWT Authentication",
    "Real-Time WebSockets & WebRTC Systems",
    "Relational Database Schema Design"
  ]
};

export const projectsData = [
  {
    id: "ai-meeting-hub",
    title: "Real-Time AI Meeting Hub",
    badge: "Full-Stack Web Platform",
    subtitle: "Enterprise Real-Time Video Conferencing Platform with Automated AI Summarization",
    description: "Architected an end-to-end full-stack web application combining FastAPI backend and React 18 frontend with JWT authentication, real-time WebRTC audio/video conferencing via WebSocket signaling, and automated meeting transcript summarization with Gemini API.",
    tags: ["Full Stack", "React 18", "FastAPI", "Vite", "WebSockets", "WebRTC", "PostgreSQL", "SQLAlchemy", "Redux Toolkit", "Tailwind CSS"],
    languages: ["Python", "JavaScript", "SQL"],
    stats: [
      { label: "Architecture", value: "Full-Stack Web" },
      { label: "Frontend", value: "React 18 + Vite" },
      { label: "Backend", value: "FastAPI + WebSockets" },
      { label: "Deployment", value: "Vercel + Render" }
    ],
    features: [
      "End-to-end full-stack platform bridging modern React 18 UI with asynchronous FastAPI microservices",
      "Real-time video & audio calling powered by peer-to-peer WebRTC connections",
      "Robust WebSocket signaling server for seamless room creation & peer coordination",
      "Automated meeting minutes & summary generator using Google Gemini API",
      "Secure JWT authentication, state-of-the-art token persistence, and PostgreSQL storage"
    ],
    websiteLink: "https://google-ai-meeting.vercel.app/",
    githubLink: "https://github.com/GopalAI07/PropFusion-Google-AI-Meeting",
    previewImage: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #064e3b 100%)",
    icon: "Video"
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    badge: "Full-Stack Enterprise Web App",
    subtitle: "Robust Django MVT Application with MySQL Database & Transactional Book Management",
    description: "Architected a full-featured web-based Library Management System using Python Django and MySQL database to automate student registrations, catalog management, fine tracking, and real-time book issue/return tracking.",
    tags: ["Full Stack", "Python", "Django", "MySQL", "JavaScript", "Bootstrap 5", "HTML5", "CSS3", "MVT Pattern"],
    languages: ["Python", "JavaScript", "SQL"],
    stats: [
      { label: "Architecture", value: "Django MVT" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Frontend", value: "Bootstrap 5 + JS" },
      { label: "Cloud Hosting", value: "Render" }
    ],
    features: [
      "Full-stack student and faculty authentication & authorization hierarchy",
      "Interactive book catalog search, filtering, and real-time availability status",
      "Automated issue, return, overdue fine calculations, and audit history logs",
      "Responsive user interface built with Bootstrap 5 and asynchronous JavaScript",
      "Secure relational data integrity using MySQL constraints and Django ORM"
    ],
    websiteLink: "https://library-management-system-ilnn.onrender.com",
    githubLink: "https://github.com/GopalAI07/Library-Management-System-Using-django",
    previewImage: "linear-gradient(135deg, #1e1b4b 0%, #31104b 50%, #0f172a 100%)",
    icon: "BookOpen"
  },
  {
    id: "election-analysis",
    title: "Election Tweet Sentiment & Trend Dashboard",
    badge: "Data-Driven Web Application",
    subtitle: "Interactive Political Analytics Web Dashboard using Streamlit and Dynamic Visualizations",
    description: "Developed an interactive data-driven web application using Python and Streamlit to analyze political tweet datasets. Features dynamic charts, sentiment trends, keyword word clouds, and multi-filter queries.",
    tags: ["Web App", "Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Data Analytics", "Wordcloud"],
    languages: ["Python"],
    stats: [
      { label: "Type", value: "Interactive Dashboard" },
      { label: "Framework", value: "Streamlit" },
      { label: "Viz Engine", value: "Plotly Interactive" },
      { label: "Data Ops", value: "Pandas & NumPy" }
    ],
    features: [
      "Interactive data visualizations with Plotly (dynamic bar charts, pie charts, time distributions)",
      "High-performance data manipulation pipelines with Pandas and NumPy",
      "Word cloud generation to uncover keyword frequency and party-specific narrative patterns",
      "Comparative sentiment and volume trend analysis between parties",
      "Intuitive web UI allowing filtering by date, hashtags, and keywords"
    ],
    websiteLink: null,
    githubLink: "https://github.com/GopalAI07/Election-Analysis",
    previewImage: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #1e293b 100%)",
    icon: "BarChart3"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence & Data Science",
    institution: "Rizvi College of Engineering, Bandra, Mumbai",
    duration: "Aug 2020 - Oct 2024",
    grade: "Aggregate CGPI: 7.83 / 10",
    badge: "Graduated with Distinction",
    highlights: [
      "Core coursework in Full-Stack Software Architecture, Object-Oriented Programming, Database Systems, Algorithms, and Cloud Systems.",
      "Built multiple production-grade web platforms using React, Python, Django, FastAPI, and Relational Databases.",
      "Active participant in technical symposiums, hackathons, and software engineering clubs."
    ]
  },
  {
    degree: "Higher Secondary Certification (H.S.C.) in Science",
    institution: "Shri T.P. Bhatia College of Science, Kandivali, Mumbai",
    duration: "June 2018 - June 2020",
    grade: "Passing Percentage: 68%",
    badge: "Science Stream",
    highlights: [
      "Focus areas: Mathematics, Physics, Chemistry, and Information Technology fundamentals.",
      "Developed strong analytical problem-solving and algorithmic foundations."
    ]
  }
];

export const certificatesData = [
  {
    title: "Introduction To JavaScript",
    issuer: "Technical Certification",
    category: "Frontend Web Development",
    icon: "Code2",
    date: "Verified"
  },
  {
    title: "Python Fundamentals For Beginners",
    issuer: "Programming Academy",
    category: "Backend & Systems",
    icon: "Terminal",
    date: "Verified"
  }
];

export const terminalCommands = {
  help: "Available commands: 'skills', 'projects', 'education', 'contact', 'about', 'clear', 'resume', 'hire'",
  skills: "Frontend: React 18, Vite, JavaScript (ES6+), Three.js, Tailwind CSS | Backend: Python (OOP), FastAPI, Django, REST APIs, WebSockets, WebRTC | Databases: PostgreSQL, MySQL, SQLAlchemy",
  projects: "1. AI Meeting Hub (Full-Stack: React 18 + FastAPI + WebRTC + PostgreSQL)\n2. Library Management System (Full-Stack: Django + MySQL + Bootstrap)\n3. Election Analytics Dashboard (Python + Streamlit + Plotly)",
  education: "B.E. in Engineering @ Rizvi College (CGPI: 7.83 / Distinction) | HSC Science @ TP Bhatia College (68%)",
  contact: "Email: gopalchauhan.gc17@gmail.com | Phone: +91 7977032477 | Mumbai, India",
  about: "Gopal Chauhan - Full-Stack Developer specialized in building scalable, modern web applications, interactive UIs, and robust backend architectures.",
  hire: "Status: Available immediately for Full-Stack Developer roles! Reach out via email: gopalchauhan.gc17@gmail.com or phone: +91 7977032477"
};

export const personalInfo = {
  name: "GOPAL CHAUHAN",
  title: "Artificial Intelligence & Data Science Engineer",
  tagline: "Building high-performance AI systems, full-stack applications & intelligent data pipelines.",
  location: "Kandivali West, Mumbai - 400067, Maharashtra, India",
  email: "gopalchauhan.gc17@gmail.com",
  phone: "+91 7977032477",
  github: "https://github.com/GopalAI07",
  linkedin: "https://www.linkedin.com/in/gopal-chauhan-1b5949264/",
  summary: "Hardworking and passionate Artificial Intelligence & Data Science Engineer eager to deliver impactful software and AI solutions. Detail-oriented team player with strong organizational skills, hands-on experience in full-stack web platforms, generative AI APIs, real-time WebRTC communications, and data analytics pipelines.",
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  hobbies: ["Cricket", "Volleyball", "Carrom", "Open Source Exploration"],
  status: "Available for Full-time Roles & High-Impact Projects",
};

export const skillsData = {
  categories: [
    {
      id: "ai_ds",
      title: "AI, GenAI & Data Science",
      icon: "Brain",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Google Gemini (google-genai)", level: 90, highlight: true },
        { name: "NumPy & Pandas", level: 92, highlight: true },
        { name: "Plotly & Data Visualization", level: 88, highlight: false },
        { name: "Wordcloud & NLP Analytics", level: 85, highlight: false },
        { name: "Streamlit App Development", level: 90, highlight: true },
        { name: "Machine Learning Foundations", level: 82, highlight: false },
      ]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: "Server",
      color: "from-violet-500 to-purple-600",
      skills: [
        { name: "Python (Advanced OOPs)", level: 95, highlight: true },
        { name: "FastAPI", level: 88, highlight: true },
        { name: "Django & MVT Architecture", level: 90, highlight: true },
        { name: "WebSockets & WebRTC Signaling", level: 86, highlight: true },
        { name: "RESTful API Design & JWT Auth", level: 92, highlight: false },
        { name: "SQLAlchemy ORM", level: 85, highlight: false },
      ]
    },
    {
      id: "frontend",
      title: "Frontend & 3D Web",
      icon: "Layout",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React 18 & Vite", level: 92, highlight: true },
        { name: "JavaScript (ES6+)", level: 90, highlight: true },
        { name: "Three.js / React Three Fiber", level: 82, highlight: true },
        { name: "Redux Toolkit State Mgmt", level: 85, highlight: false },
        { name: "Tailwind CSS & Modern CSS3", level: 94, highlight: false },
        { name: "HTML5 & Bootstrap 5", level: 95, highlight: false },
      ]
    },
    {
      id: "database_tools",
      title: "Databases, Cloud & Dev Tools",
      icon: "Database",
      color: "from-emerald-400 to-teal-600",
      skills: [
        { name: "MySQL Database", level: 90, highlight: true },
        { name: "PostgreSQL Database", level: 88, highlight: true },
        { name: "SQL Queries & Optimization", level: 92, highlight: true },
        { name: "Git & GitHub Version Control", level: 90, highlight: false },
        { name: "Vercel & Render Cloud Deployments", level: 88, highlight: false },
        { name: "Postman API Testing", level: 86, highlight: false },
      ]
    }
  ],
  coreHighlights: [
    "Object-Oriented Programming (OOP)",
    "Model View Template (MVT)",
    "Real-Time WebRTC Architecture",
    "Generative AI Integration",
    "Relational Database Design",
    "Agile Collaboration & Problem Solving"
  ]
};

export const projectsData = [
  {
    id: "ai-meeting-hub",
    title: "AI Meeting Hub",
    badge: "Featured Full-Stack AI Platform",
    subtitle: "Enterprise-grade Real-Time Video Conference with Automated Gemini AI Summarization",
    description: "Built a modern full-stack AI meeting platform combining FastAPI and React 18 with JWT authentication, real-time WebRTC audio/video conferencing via WebSocket signaling, and Google Gemini powered intelligent meeting transcript summarization.",
    tags: ["FastAPI", "React 18", "Vite", "Google Gemini AI", "WebSockets", "WebRTC", "PostgreSQL", "SQLAlchemy", "Redux Toolkit", "Tailwind CSS"],
    languages: ["Python", "JavaScript"],
    stats: [
      { label: "Signaling", value: "WebSockets" },
      { label: "AI Engine", value: "Gemini Pro" },
      { label: "Auth", value: "JWT Tokens" },
      { label: "Deployment", value: "Vercel + Render" }
    ],
    features: [
      "Real-time video & audio calling powered by peer-to-peer WebRTC connections",
      "Robust WebSocket signaling server for seamless room creation & peer coordination",
      "Automated AI meeting minutes & summary generator using Google Gemini (google-genai)",
      "Secure JWT authentication and state-of-the-art token persistence",
      "Persistent user profiles, room histories, and summaries in PostgreSQL using SQLAlchemy"
    ],
    websiteLink: "https://google-ai-meeting.vercel.app/",
    githubLink: "https://github.com/GopalAI07/PropFusion-Google-AI-Meeting",
    previewImage: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #064e3b 100%)",
    icon: "Video"
  },
  {
    id: "election-analysis",
    title: "Election Tweet Sentiment & Trend Analysis",
    badge: "Data Science & NLP App",
    subtitle: "Interactive Political Tweet Analytics Dashboard using NLP and Statistical Visualizations",
    description: "Developed a comprehensive Streamlit-based data science web application to analyze political tweet datasets from major political parties (BJP and Congress). Visualized deep analytical insights, sentiment trends, tweet frequencies, and lexical distributions.",
    tags: ["Python", "Streamlit", "Plotly", "Wordcloud", "Pandas", "NumPy", "NLP Analytics", "Data Mining"],
    languages: ["Python"],
    stats: [
      { label: "Framework", value: "Streamlit" },
      { label: "Viz Engine", value: "Plotly Interactive" },
      { label: "Text Mining", value: "WordCloud + NLP" },
      { label: "Data Ops", value: "Pandas & NumPy" }
    ],
    features: [
      "Processed large CSV tweet corpora with high-performance Pandas and NumPy pipelines",
      "Interactive data visualizations with Plotly (dynamic bar charts, pie charts, time distributions)",
      "Word cloud generation to uncover keyword frequency and party-specific narrative patterns",
      "Comparative sentiment and volume trend analysis between parties",
      "Intuitive web UI allowing filtering by date, hashtags, and keywords"
    ],
    websiteLink: null,
    githubLink: "https://github.com/GopalAI07/Election-Analysis",
    previewImage: "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #1e293b 100%)",
    icon: "BarChart3"
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    badge: "Full-Stack Enterprise Web App",
    subtitle: "Robust Django MVT Application with MySQL Database & Transactional Book Management",
    description: "Architected a full-featured web-based Library Management System using Python Django and MySQL database to automate student registrations, catalog management, fine tracking, and real-time book issue/return tracking.",
    tags: ["Python", "Django", "MySQL", "JavaScript", "Bootstrap 5", "HTML5", "CSS3", "MVT Pattern"],
    languages: ["Python", "JavaScript"],
    stats: [
      { label: "Backend", value: "Django MVT" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Frontend", value: "Bootstrap + JS" },
      { label: "Cloud Hosting", value: "Render" }
    ],
    features: [
      "Complete student and faculty authentication & authorization hierarchy",
      "Interactive book catalog search, filtering, and real-time availability status",
      "Automated issue, return, overdue fine calculations, and audit history logs",
      "Responsive user interface built with Bootstrap 5 and asynchronous JavaScript",
      "Secure relational data integrity using MySQL constraints and Django ORM"
    ],
    websiteLink: "https://library-management-system-ilnn.onrender.com",
    githubLink: "https://github.com/GopalAI07/Library-Management-System-Using-django",
    previewImage: "linear-gradient(135deg, #1e1b4b 0%, #31104b 50%, #0f172a 100%)",
    icon: "BookOpen"
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
      "Specialized in Artificial Intelligence, Machine Learning algorithms, Big Data Analytics, and Full Stack Software Architecture.",
      "Conducted extensive hands-on projects in Python, Generative AI, Relational Databases, and Cloud Deployments.",
      "Active participant in technical symposiums, hackathons, and software development clubs."
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
      "Developed solid analytical problem-solving and algorithmic thinking foundations."
    ]
  }
];

export const certificatesData = [
  {
    title: "Introduction To JavaScript",
    issuer: "Technical Certification",
    category: "Web Development",
    icon: "Code2",
    date: "Verified"
  },
  {
    title: "Python Fundamentals For Beginners",
    issuer: "Programming Academy",
    category: "Software Engineering",
    icon: "Terminal",
    date: "Verified"
  }
];

export const terminalCommands = {
  help: "Available commands: 'skills', 'projects', 'education', 'contact', 'about', 'clear', 'resume', 'hire'",
  skills: "Python (OOP), JavaScript, React, FastAPI, Django, MySQL, PostgreSQL, WebSockets, WebRTC, Google Gemini AI, Streamlit, Pandas, Three.js",
  projects: "1. AI Meeting Hub (FastAPI + React + Gemini AI + WebSockets)\n2. Election Tweet Analysis (Streamlit + Plotly + NLP)\n3. Library Management System (Django + MySQL)",
  education: "B.E. in AI & Data Science @ Rizvi College (CGPI: 7.83) | HSC Science @ TP Bhatia College (68%)",
  contact: "Email: gopalchauhan.gc17@gmail.com | Phone: +91 7977032477 | Mumbai, India",
  about: "Gopal Chauhan - AI & Data Science Engineer specialized in crafting intelligent, scalable web and AI systems.",
  hire: "Status: Available immediately! Reach out via email: gopalchauhan.gc17@gmail.com or phone: +91 7977032477"
};

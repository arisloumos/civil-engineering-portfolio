// src/data.ts

export const PORTFOLIO_DATA = {
  personal: {
    name: "KONSTANTINOS KAROUZOS",
    role: "Civil Engineering Undergraduate",
    statement:
      "Civil Engineering undergraduate with practical experience in construction site operations, concrete works, and architectural trades, with a growing focus on structural engineering, renewable energy, and project management.",
    location: "Thessaloniki, Greece",
  },

  contact: {
    email: "kckarouzos@gmail.com",
    linkedin: "https://linkedin.com/in/konstantinos-karouzos",
    resumeUrl: "/CV_Karouzos_Konstantinos_EN.pdf",
    resumeRevDate: "May 2026",
  },

  experience: [
    {
      id: "exp-01",
      year: "JUL 2026",
      role: "Civil Engineering Intern",
      company: "TERNA S.A.",
      logo: "/terna-logo.png",
      desktopLogoScale: "scale-[0.6]",
      desktopLogoPosition: "translate-x-[-46px] translate-y-[-20px]",
      mobileLogoScale: "scale-[0.7]",
      mobileLogoPosition: "translate-x-[15px] translate-y-[0px]",
      location: "Ellinikon, Athens, Greece",
      achievements: [
        "Assisted with daily site inspections and monitored construction activities.",
        "Reviewed technical drawings and supported the coordination of structural and architectural works.",
        "Recorded construction progress and prepared measurements for completed works.",
        "Supported engineers with quality control checks and on-site documentation.",
      ],
      tools: ["AutoCAD", "Microsoft Excel", "Microsoft Office"],
      images: ["/internship-gear.jpg", "/ellinikon-tower.jpg"],
    },
    {
      id: "exp-02",
      year: "JUL 2025",
      role: "Civil Engineering Intern",
      company: "BBI - INTRAKAT RT JOINT VENTURE",
      logo: "/aktor-logo.png",
      desktopLogoScale: "scale-[1.05]",
      desktopLogoPosition: "translate-x-[5px] translate-y-[-5px]",
      mobileLogoScale: "scale-[0.9]",
      mobileLogoPosition: "translate-x-[-3px] translate-y-[10px]",
      location: "Ellinikon, Athens, Greece",
      achievements: [
        "Inspected concrete reinforcement during construction activities.",
        "Supervised concrete pouring and supported on-site execution.",
        "Monitored concrete curing operations and assisted with concrete repair works.",
        "Performed pre-measurements for architectural trades.",
        "Explored finishing solutions for architectural construction works.",
      ],
      tools: ["AutoCAD", "Microsoft Office"],
      images: ["/ellinikon-tower.jpg", "/internship-gear.jpg"],
    },
  ],

  projects: [
    {
      id: "prj-01",
      title: "CHALLENGES OF RENEWABLE ENERGIES IN THE 21ST CENTURY",
      type: "Erasmus+ Blended Intensive Program",
      methodology: "Renewable Energy Case Study & PVGIS Analysis",
      description:
        "Conducted and presented a case study on the Agios Georgios Wind Farm operated by Terna Energy. The program also covered renewable energy sources and energy storage systems, with practical participation in photovoltaic park design and energy yield quantification using PVGIS.",
      tools: ["PVGIS", "Renewable Energy Analysis"],
      images: ["/renewable-energies.jpg", "/granada-team.jpg"],
    },
    {
      id: "prj-02",
      title: "SMART HOME ENERGY MONITORING SYSTEM",
      type: "IoT & Embedded Systems Project",
      methodology: "Sensor Integration & Real-Time Data Visualization",
      description:
        "Designed and developed a prototype system for monitoring household energy consumption using smart sensors. The project focused on collecting real-time electrical measurements, processing the data, and presenting consumption patterns through an interactive dashboard.",
      tools: ["Arduino", "ESP32", "IoT", "Data Visualization"],
      images: ["/granada-team.jpg", "/renewable-energies.jpg"],
    },
    {
      id: "prj-03",
      title: "SOLAR PV SYSTEM DESIGN & PERFORMANCE ANALYSIS",
      type: "Renewable Energy Engineering Project",
      methodology: "Photovoltaic System Design & Energy Yield Simulation",
      description:
        "Developed a photovoltaic system design for a residential application, including solar resource assessment, component selection, energy production estimation, and performance analysis. The project explored how system orientation, shading, and environmental conditions affect overall PV performance.",
      tools: ["PVGIS", "AutoCAD", "Solar PV Design", "Energy Analysis"],
      images: ["/internship-gear.jpg", "/renewable-energies.jpg", "/granada-team.jpg"],
    },
  ],

  education: [
    {
      id: "edu-01",
      degree: "Bachelor of Engineering, Civil Engineering",
      institution: "Aristotle University of Thessaloniki",
      year: "Expected 2028",
      details: "GPA: 7.4/10 (May 2026)",
    },
    {
      id: "edu-02",
      degree: "Apolytirio Genikou Lykeiou",
      institution: "Doukas School SA",
      year: "2023",
      details: "Grade: 19.3/20",
    },
  ],
  
  toolkit: [
    {
      category: "Structural & Engineering",
      skills: [
        "SAP2000",
        "AutoCAD",
        "Pre-measurements",
        "Concrete Works",
      ],
    },
    {
      category: "Renewable Energy",
      skills: [
        "PVGIS",
        "Photovoltaic Park Design",
        "Energy Yield Quantification",
      ],
    },
    {
      category: "Software & Programming",
      skills: [
        "Microsoft Office",
        "Python (Basic)",
      ],
    },
    {
      category: "Professional Skills",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Project Management",
        "Team Collaboration",
        "Multitasking & Organization",
      ],
    },
  ],

  training: [
    {
      id: "trn-01",
      title: "Effective Writing and Presentation Skills",
      institution: "Civil Engineering, Aristotle University of Thessaloniki",
      duration: "52 hours",
      period: "OCT 2025 - JAN 2026",
      url: "https://courses.auth.gr/#/studyPrograms/1420?year=2025&lang=el&specializationCourse=B9895AB8-675E-4163-A395-2970DF9012F1&courseClass=F9660F6D-7844-4EC5-A444-E3884DAF92C7&view=courseOutline",
    },
    {
      id: "trn-02",
      title: "Terminology in English for Civil Engineers",
      institution: "Civil Engineering, Aristotle University of Thessaloniki",
      duration: "52 hours",
      period: "FEB 2025 - APR 2025",
      url: "https://courses.auth.gr/#/studyPrograms/1420?year=2025&lang=el&specializationCourse=92833935-87B2-4796-A2C8-24174CE66C22&courseClass=478B5770-C117-4F41-BB0A-0DC779A73851&view=courseOutline",
    },
  ],

  conferences: [
    {
      id: "conf-01",
      title: "5th Panhellenic Civil Engineering Students Conference",
      role: "Organising Committee Member",
      period: "MAR 2025",
      url: "https://www.facebook.com/synfoititonpolmix/",
    },
  
    {
      id: "conf-02",
      title: "19th Panhellenic Concrete Conference",
      role: "Attendee",
      period: "NOV 2024",
      url: "https://symvoli.com/portfolio/concrete2024/",
    },
  ],

  languages: [
    { language: "Greek", level: "Native" },
    { language: "English", level: "C2 - Proficient" },
    { language: "French", level: "B1 - Intermediate" },
  ],
    
};
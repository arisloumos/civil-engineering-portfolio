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
    resumeUrl: "/CV_Karouzos_EN.pdf",
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
        "[ADD YOUR ACTUAL RESPONSIBILITIES AND PROJECT WORK AT TERNA]",
        "[ADD YOUR ACTUAL RESPONSIBILITIES AND PROJECT WORK AT TERNA]",
        "[ADD YOUR ACTUAL RESPONSIBILITIES AND PROJECT WORK AT TERNA]",
        "[ADD YOUR ACTUAL RESPONSIBILITIES AND PROJECT WORK AT TERNA]",
      ],
      tools: ["tool 1", "tool 2", "tool 3"],
      images: ["/api/placeholder/800/1000", "/api/placeholder/800/1000"],
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
    },
    {
      id: "trn-02",
      title: "Terminology in English for Civil Engineers",
      institution: "Civil Engineering, Aristotle University of Thessaloniki",
      duration: "52 hours",
      period: "FEB 2025 - APR 2025",
    },
  ],
  conferences: [
    {
      id: "conf-01",
      title: "5th Panhellenic Civil Engineering Students Conference",
      role: "Organising Committee Member",
      period: "MAR 2025",
    },
    {
      id: "conf-02",
      title: "19th Panhellenic Concrete Conference",
      role: "Attendee", // Added this so the layout remains consistent
      period: "NOV 2024",
    },
  ],
  languages: [
    { language: "Greek", level: "Native" },
    { language: "English", level: "C2 - Proficient" },
    { language: "French", level: "B1 - Intermediate" },
  ],
    
};
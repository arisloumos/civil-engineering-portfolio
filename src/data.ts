// src/data.ts

export const PORTFOLIO_DATA = {
  personal: {
    name: "KONSTANTINOS KAROUZOS",
    role: "Civil Engineering Undergraduate",
    statement: "[Short, precise positioning statement emphasizing your focus, e.g., 'Dedicated to structural integrity, sustainable materials, and precise engineering methodologies.']",
    location: "Athens, Greece", // Using your actual location!
    coordinates: "LAT: 37.9838° N / LON: 23.7275° E", // Adds a nice surveying/engineering touch
  },
  contact: {
    email: "contact@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    resumeUrl: "/CV_Karouzos_EN.pdf",
  },
  experience: [
    {
      id: "exp-01",
      year: "2025 - PRESENT",
      role: "[INTERN / JUNIOR ENGINEER]",
      company: "[CONSTRUCTION OR DESIGN FIRM]",
      location: "[CITY, COUNTRY]",
      achievements: [
        "[Assisted in structural calculations for a 3-story residential concrete building.]",
        "[Drafted preliminary architectural and structural plans using AutoCAD.]",
        "[Conducted site visits to verify rebar placement against technical specifications.]",
      ],
      tools: ["AutoCAD", "Excel", "Bluebeam"],
    },
    {
      id: "exp-02",
      year: "2024 - 2025",
      role: "[ENGINEERING ASSISTANT]",
      company: "[UNIVERSITY RESEARCH LAB]",
      location: "[CITY, COUNTRY]",
      achievements: [
        "[Prepared and tested 50+ concrete cylinder samples for compressive strength.]",
        "[Compiled testing data into comprehensive reports for the lead researcher.]",
      ],
      tools: ["Lab Equipment", "Data Analysis", "MATLAB"],
    }
  ],
  projects: [
    {
      id: "prj-01",
      title: "[STRUCTURAL ANALYSIS OF STEEL BRIDGE]",
      type: "Academic Project",
      methodology: "Finite Element Analysis (FEA)",
      description: "[Comprehensive structural analysis of a 50m span truss bridge under dynamic loading conditions, ensuring compliance with Eurocode 3.]",
      tools: ["SAP2000", "AutoCAD", "Hand Calculations"],
      image: "/api/placeholder/800/600", // Free placeholder image service
    },
    {
      id: "prj-02",
      title: "[REINFORCED CONCRETE BUILDING DESIGN]",
      type: "Capstone Design",
      methodology: "Structural Design & Detailing",
      description: "[Complete design of a 5-story commercial building including slab, beam, column, and foundation calculations according to Eurocode 2.]",
      tools: ["ETABS", "Revit", "Excel"],
      image: "/api/placeholder/800/600",
    },
    {
      id: "prj-03",
      title: "[HIGHWAY INTERSECTION REDESIGN]",
      type: "Transportation Engineering",
      methodology: "Traffic Flow Optimization",
      description: "[Redesigned an urban intersection to improve traffic throughput by 15% and incorporate dedicated bicycle lanes and pedestrian safety islands.]",
      tools: ["Civil 3D", "Synchro", "GIS"],
      image: "/api/placeholder/800/600",
    }
  ],
  education: [
    {
      id: "edu-01",
      degree: "[BSc / MEng CIVIL ENGINEERING]",
      institution: "[UNIVERSITY NAME]",
      year: "Expected 2027",
      details: "[Current GPA / Major focus area, e.g., Structural Engineering or Geotechnical.]",
    }
  ],
  toolkit: [
    { category: "BIM & CAD", skills: ["AutoCAD", "Revit", "Civil 3D"] },
    { category: "Analysis", skills: ["SAP2000", "ETABS", "Plaxis 2D"] },
    { category: "Programming & Data", skills: ["Python", "MATLAB", "Excel (VBA)"] },
  ]
};
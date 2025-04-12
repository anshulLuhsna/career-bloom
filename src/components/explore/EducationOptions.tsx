
import React from 'react';
import { 
  BookOpen, Award, FileText, GraduationCap, Building, 
  Globe, Wrench, Briefcase, Paintbrush, Stethoscope, 
  Clock, School, Code, Database, CloudCog, 
  Ruler, Microscope, Hammer, PencilRuler, Settings, 
  HeartPulse, BookOpenCheck, Pencil, Landmark, 
  ScanSearch, UserCircle2
} from "lucide-react";

// After 10th options data structure
export const afterTenthOptions = [
  {
    category: "What Next?",
    options: [
      {
        icon: School,
        title: "Intermediate (2 years)",
        description: "Continue with higher secondary education with specialized streams",
        details: [
          { name: "Science (MPC)", description: "Mathematics, Physics, Chemistry" },
          { name: "Science (BiPC)", description: "Biology, Physics, Chemistry" },
          { name: "Commerce (CEC)", description: "Commerce, Economics, Civics" },
          { name: "Arts (HEC)", description: "History, Economics, Civics" },
          { name: "Arts (MEC)", description: "Mathematics, Economics, Commerce" }
        ]
      },
      {
        icon: Wrench,
        title: "Polytechnic (Diploma Courses)",
        description: "3-year technical education focused on practical skills",
        details: [
          { name: "Mechanical Engineering", description: "Design and manufacturing of mechanical systems" },
          { name: "Computer Science", description: "Programming, networking, and IT fundamentals" },
          { name: "Civil Engineering", description: "Construction, infrastructure design, and surveying" },
          { name: "Electrical Engineering", description: "Electrical systems, power, and electronics" },
          { name: "Electronics & Communication", description: "Electronic devices, communication systems" }
        ]
      },
      {
        icon: Hammer,
        title: "ITI (Industrial Training Institute)",
        description: "Short-term vocational training for various trades",
        details: [
          { name: "Fitter", description: "Assembly and repair of mechanical equipment" },
          { name: "Plumber", description: "Installation and repair of plumbing systems" },
          { name: "Electrician", description: "Electrical wiring, maintenance, and repair" },
          { name: "Welder", description: "Joining metals using various welding techniques" },
          { name: "Carpenter", description: "Working with wood to build structures and furniture" }
        ]
      },
      {
        icon: HeartPulse,
        title: "Paramedical",
        description: "Healthcare-related technical courses",
        details: [
          { name: "Lab Technician", description: "Conducting laboratory tests and analysis" },
          { name: "BSc Nursing", description: "Basic nursing education (where applicable)" },
          { name: "Radiology Technician", description: "Operating imaging equipment" },
          { name: "Operation Theatre Tech", description: "Assisting in surgical procedures" },
          { name: "Physiotherapy Assistant", description: "Assisting in physical therapy treatments" }
        ]
      },
      {
        icon: Clock,
        title: "Short-Term Courses (6 months / 1 year)",
        description: "Quick skill development for quick employment",
        details: [
          { name: "DTP (Desktop Publishing)", description: "Document design and layout" },
          { name: "Tally", description: "Accounting and bookkeeping software" },
          { name: "Web Design", description: "Creating and designing websites" },
          { name: "Data Entry", description: "Computer data entry and processing" },
          { name: "Graphics/Animation", description: "Creating visual content and animations" }
        ]
      }
    ]
  },
  {
    category: "Streams",
    options: [
      {
        icon: BookOpen,
        title: "Science",
        description: "Explore physics, chemistry, biology, and mathematics"
      },
      {
        icon: BookOpen,
        title: "Commerce",
        description: "Study business, accounting, economics, and statistics"
      },
      {
        icon: BookOpen,
        title: "Arts",
        description: "Study literature, history, psychology, and sociology"
      }
    ]
  },
  {
    category: "Government Exams",
    options: [
      {
        icon: FileText,
        title: "JEE (Joint Entrance Examination)",
        description: "For engineering colleges including IITs and NITs"
      },
      {
        icon: FileText,
        title: "NEET (National Eligibility cum Entrance Test)",
        description: "For medical colleges across India"
      },
      {
        icon: FileText,
        title: "CLAT (Common Law Admission Test)",
        description: "For admission to national law universities"
      }
    ]
  },
  {
    category: "Scholarships",
    options: [
      {
        icon: Award,
        title: "Merit-Based Scholarships",
        description: "Financial aid based on academic excellence"
      },
      {
        icon: Award,
        title: "Need-Based Scholarships",
        description: "Financial aid based on economic background"
      }
    ]
  },
  {
    category: "Documents Required",
    options: [
      {
        icon: FileText,
        title: "Academic Documents",
        description: "Marksheets, certificates, and transfer certificates"
      },
      {
        icon: FileText,
        title: "Identity & Address Proof",
        description: "Aadhaar, PAN, passport, and residence proof"
      }
    ]
  }
];

// After 12th options data structure
export const afterTwelfthOptions = [
  {
    category: "Detailed Fields",
    options: [
      {
        icon: Code,
        title: "Engineering (B.E./B.Tech)",
        description: "4-year professional degree in various engineering fields",
        details: [
          { name: "Computer Science (CSE)", description: "Programming, algorithms, software development" },
          { name: "Information Technology (IT)", description: "Information systems, networks, databases" },
          { name: "Electronics & Communication (ECE)", description: "Electronic devices, communication systems" },
          { name: "Electrical Engineering", description: "Power systems, electrical machines, control systems" },
          { name: "Mechanical Engineering", description: "Thermodynamics, manufacturing, machine design" },
          { name: "Civil Engineering", description: "Structures, construction, transportation" },
          { name: "Chemical Engineering", description: "Process design, chemical reactions, plants" },
          { name: "Aerospace Engineering", description: "Aircraft design, aerodynamics, propulsion" }
        ]
      },
      {
        icon: Stethoscope,
        title: "Medical",
        description: "Professional degrees in healthcare and medicine",
        details: [
          { name: "MBBS", description: "Bachelor of Medicine and Bachelor of Surgery (5.5 years)" },
          { name: "BDS", description: "Bachelor of Dental Surgery (5 years)" },
          { name: "BHMS", description: "Bachelor of Homeopathic Medicine & Surgery (5.5 years)" },
          { name: "BAMS", description: "Bachelor of Ayurvedic Medicine & Surgery (5.5 years)" },
          { name: "BNYS", description: "Bachelor of Naturopathy & Yogic Science (5.5 years)" },
          { name: "BPT", description: "Bachelor of Physiotherapy (4.5 years)" },
          { name: "B.Sc. Nursing", description: "Bachelor of Science in Nursing (4 years)" },
          { name: "B.Pharm", description: "Bachelor of Pharmacy (4 years)" }
        ]
      },
      {
        icon: BookOpenCheck,
        title: "Teaching",
        description: "Teacher training and education degrees",
        details: [
          { name: "B.El.Ed", description: "Bachelor of Elementary Education (4 years)" },
          { name: "D.El.Ed", description: "Diploma in Elementary Education (2 years)" },
          { name: "B.Ed", description: "Bachelor of Education (2 years after graduation)" },
          { name: "M.Ed", description: "Master of Education (2 years after B.Ed)" },
          { name: "B.P.Ed", description: "Bachelor of Physical Education (1 year)" },
          { name: "ECCE", description: "Early Childhood Care and Education (1 year)" }
        ]
      },
      {
        icon: GraduationCap,
        title: "Degrees (3 years)",
        description: "Undergraduate academic degrees in various disciplines",
        details: [
          { name: "BA", description: "Bachelor of Arts in humanities subjects" },
          { name: "BSc", description: "Bachelor of Science in science subjects" },
          { name: "B.Com", description: "Bachelor of Commerce in business subjects" },
          { name: "BBA", description: "Bachelor of Business Administration" },
          { name: "B.Lib", description: "Bachelor of Library Science" },
          { name: "BSW", description: "Bachelor of Social Work" },
          { name: "BCA", description: "Bachelor of Computer Applications" },
          { name: "BMS", description: "Bachelor of Management Studies" }
        ]
      },
      {
        icon: Paintbrush,
        title: "Others",
        description: "Specialized fields with unique career paths",
        details: [
          { name: "Foreign Languages", description: "German, French, Spanish, Japanese, etc." },
          { name: "Journalism & Mass Communication", description: "Media studies and reporting" },
          { name: "Fashion Design", description: "Clothing design and textile arts" },
          { name: "Hotel Management", description: "Hospitality industry operations" },
          { name: "Event Management", description: "Planning and coordinating events" },
          { name: "Film Making", description: "Direction, cinematography, editing" },
          { name: "Animation & VFX", description: "Creating animated content and visual effects" },
          { name: "Interior Design", description: "Designing indoor spaces and environments" }
        ]
      }
    ]
  },
  {
    category: "Government Exams",
    options: [
      {
        icon: FileText,
        title: "Government Exams After 12th",
        description: "Various competitive exams for government positions",
        details: []
      }
    ]
  },
  {
    category: "Government Exams",
    options: [
      {
        icon: FileText,
        title: "UPSC Civil Services",
        description: "For IAS, IPS, IFS and other administrative services"
      },
      {
        icon: FileText,
        title: "SSC (Staff Selection Commission)",
        description: "For various posts in government departments"
      },
      {
        icon: FileText,
        title: "Banking Exams",
        description: "For positions in public sector banks"
      }
    ]
  },
  {
    category: "PG Courses (India)",
    options: [
      {
        icon: GraduationCap,
        title: "MBA",
        description: "Master of Business Administration from top B-schools"
      },
      {
        icon: GraduationCap,
        title: "M.Tech",
        description: "Master of Technology in various specializations"
      },
      {
        icon: GraduationCap,
        title: "MA/M.Sc/M.Com",
        description: "Masters in arts, science, or commerce disciplines"
      }
    ]
  },
  {
    category: "PG Courses (Foreign)",
    options: [
      {
        icon: Globe,
        title: "MS in USA/Canada",
        description: "Master of Science programs in North American universities"
      },
      {
        icon: Globe,
        title: "Masters in Europe",
        description: "Programs in UK, Germany, France, and other EU countries"
      },
      {
        icon: Globe,
        title: "MBA Abroad",
        description: "Business education from top global institutions"
      }
    ]
  },
  {
    category: "Scholarships",
    options: [
      {
        icon: Award,
        title: "Indian Scholarships",
        description: "Government and private scholarships for higher education"
      },
      {
        icon: Award,
        title: "Foreign Scholarships",
        description: "Fulbright, Commonwealth, Chevening, and other global scholarships"
      },
      {
        icon: Award,
        title: "Research Grants",
        description: "Funding opportunities for research projects"
      }
    ]
  }
];

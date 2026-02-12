
import { ExperienceItem, Skill, Project, Certification, Reference } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Business Analyst",
    company: "Abno Softwares International",
    location: "Nairobi",
    period: "Jun 2024 – Present",
    bullets: [
      "QA & validation for ERP system improvements; onboarded 100+ clients (data migration, training).",
      "Facilitated UAT for 5 major projects – 100% business requirements met.",
      "User manuals & training guides → 30% drop in post-implementation support.",
      "Analyzed feedback → 15% client satisfaction lift.",
      "Streamlined business/tech communication; led requirements for Intellimis Staff/Client App.",
      "Agile (sprint backlog) → 10% faster product increment delivery."
    ],
    keyStats: "400+ bugs fixed · 60+ developments · 25% system efficiency"
  },
  {
    role: "Customer Success Engineer & System Admin",
    company: "Abno Softwares International",
    location: "Nairobi",
    period: "Feb 2024 – May 2024",
    bullets: [
      "ERP troubleshooting, bug identification, workflow gaps.",
      "Trained 10+ clients → 30% boost in operational efficiency.",
      "Audit reports to track utilization; documented enhancement requests."
    ],
    achievements: ["Client satisfaction ↑20%", "Support queries ↓25%"]
  },
  {
    role: "Intern – Technical Support",
    company: "Kenya Medical Training College",
    location: "Mombasa",
    period: "Jan 2023 – Apr 2023",
    bullets: [
      "Support for 500+ students/staff; resolved 90% backlog issues.",
      "OS/software installation, eLearning portal maintenance → utilization ↑25%.",
      "Networking devices configuration → downtime reduced by 15%."
    ],
    keyStats: "Lab renovation: 30 to 12 days · eLearning portal ↑28% · 90% backlog fixed"
  },
  {
    role: "Technical Support (Locum)",
    company: "254TechHub",
    location: "Nairobi",
    period: "Mar 2020 – Nov 2022",
    bullets: [
      "Remote support, feedback collection, client check-ins.",
      "Zendesk records → analysis & improvement areas."
    ],
    achievements: ["Client happiness ↑26%", "Digital product adoption ↑30%"]
  }
];

export const SKILLS: Skill[] = [
  { name: "ERP Mgmt & Impl.", icon: "fa-cubes" },
  { name: "Data Analysis", icon: "fa-chart-simple" },
  { name: "UAT & QA", icon: "fa-vial" },
  { name: "Client Onboarding", icon: "fa-users" },
  { name: "Tech Documentation", icon: "fa-file-alt" },
  { name: "Jira · Bug Tracking", icon: "fa-bug" },
  { name: "SDLC / Agile Scrum", icon: "fa-code-branch" },
  { name: "Power BI (Beginner)", icon: "fa-chart-pie" },
  { name: "SQL", icon: "fa-database" },
  { name: "Advanced Excel", icon: "fa-file-excel" },
  { name: "Email Automation", icon: "fa-envelope-open-text" },
  { name: "API integration", icon: "fa-plug" },
  { name: "Data Viz", icon: "fa-chart-scatter" },
  { name: "CRM (Zendesk)", icon: "fa-headset" },
  { name: "Kotlin, C, VB, Pascal, HTML", icon: "fa-mobile-alt" },
  { name: "Analytical", isSoft: true },
  { name: "Communication", isSoft: true },
  { name: "Teamwork & collaboration", isSoft: true },
  { name: "Stakeholder Management", isSoft: true },
  { name: "Adaptability & Flexibility", isSoft: true }
];

export const PROJECTS: Project[] = [
  {
    title: "Intellimis ERP",
    description: "Business Analyst: system stabilization through bug/enhancement documentation. Designed & tested Intellimis Staff App & Client App.",
    metric: "28% efficiency gain",
    icon: "fa-microchip"
  },
  {
    title: "Genesis ERP",
    description: "Collaborated closely with product BA – technical documentation & UAT.",
    metric: "13 days early delivery",
    icon: "fa-cubes"
  },
  {
    title: "Jiunge Portal & TVET CDACC",
    description: "Streamlined application workflow, enhanced user satisfaction rate for Jiunge Portal.",
    icon: "fa-diagram-project"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Elements of AI for Business", url: "https://courses.minnalearn.com/certificate/en/elements-of-ai-for-business/d08aaef8-d6b2-4fae-b877-78184b8a3cd2", icon: "fa-robot" },
  { name: "Oracle Certified Foundations Associate", url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0E21020371434CE20399A19BACFE40FC842FA8316EA4A1E1DA8F5A28E01DB29A", icon: "fa-database" },
  { name: "Ask Questions to Make Data-Driven Decisions", url: "https://www.coursera.org/account/accomplishments/records/WLFDZ2SJ2OO5", icon: "fa-question-circle" },
  { name: "Foundations: Data, Everywhere", url: "https://www.coursera.org/account/accomplishments/records/9TXFDCF4MF7L", icon: "fa-layer-group" },
  { name: "Foundations of Agile Project Management", url: "https://www.coursera.org/account/accomplishments/verify/XFV4S7BMOYMD", icon: "fa-running" },
  { name: "Process Data from Dirty to Clean", url: "https://www.coursera.org/account/accomplishments/verify/51A7KJCQNFHD", icon: "fa-filter" }
];

export const REFERENCES: Reference[] = [
  { name: "Meshak Mutinda", title: "Supervisor, Abno Softwares International", phone: "0784922410", email: "mmutinda@abnosoftwares.com" },
  { name: "Ian Mbuguah", title: "Team Lead, 254TechHub", phone: "0799235613", email: "ianmbuhguah@gmail.com" },
  { name: "Hudson Walukha", title: "ICT Manager, KMTC Mombasa", phone: "0700223600", email: "hwalukha@kmtc.ac.ke" },
  { name: "Lewis Mucee", title: "Professor, Meru National Polytechnic", phone: "0725653899", email: "lewismugambi@gmail.com" }
];

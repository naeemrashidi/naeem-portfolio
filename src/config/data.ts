import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGo,
  SiLangchain,
  SiTailwindcss,
  SiNextdotjs,
  SiTerraform,
  SiOpenai,
  SiAnthropic,
  SiFastapi,
  SiExpress,
  SiStripe,
  SiSupabase,
  SiTwilio,
  SiSqlite,
  SiPhp,
  SiLinux,
  SiGithubactions,
  SiHtml5,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 1,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/naeemrashidi",
  },
  {
    id: 2,
    priority: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/naeem-okpara-rashidi",
  },
];

export const personalInfo = {
  name: "Naeem Okpara Rashidi",
  title: "Senior Full Stack Engineer · TypeScript · React · Go · Python",
  avatar: "/avatar.png",
  email: "rashidinaeem730@gmail.com",
  phone: "+1 (323) 417-0013",
  location: "Oakland, CA",
  description:
    "I build production web applications and backend services. React/TypeScript on the frontend, Go, Node.js, and Python on the backend, AWS and Kubernetes for infrastructure, and LangChain/RAG for the LLM features I integrate into enterprise applications. 15+ years shipping in production environments.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Tollanis Solutions Inc.",
    position: "Senior Full Stack Engineer",
    period: "Apr 2022 - Present",
    shortDesc:
      "Designing and developing scalable enterprise applications using React, TypeScript, Go, and Python, building frontend architectures, backend services, and API-driven platforms.",
    bulletPoints: [
      "Design and develop scalable enterprise applications using React, TypeScript, Go, and Python",
      "Implement backend services and REST APIs using modern architecture patterns, reducing production incidents by 30%",
      "Build and deploy cloud-based applications using AWS, Docker, Kubernetes, Terraform, and GitHub Actions CI/CD",
      "Integrate LLM workflows, RAG, and LangChain into enterprise applications to enhance automation",
      "Deliver database-driven services and application workflows supporting business-critical processes",
    ],
  },
  {
    company: "TracFone Wireless (America Movil Group)",
    position: "Full Stack Engineer",
    period: "Jul 2015 - Jan 2022",
    shortDesc:
      "Engineered customer-facing web applications and enterprise systems supporting wireless service operations and digital customer experiences.",
    bulletPoints: [
      "Engineered customer-facing web applications using React, TypeScript, Node.js, and backend technologies",
      "Delivered REST APIs and database-driven services supporting customer accounts and service management",
      "Partnered with product managers, QA engineers, and cross-functional teams on large-scale telecom platforms",
    ],
  },
  {
    company: "3scale",
    position: "Backend Engineer",
    period: "Oct 2010 - Apr 2015",
    shortDesc:
      "Built backend services and API-driven features for an API management platform, supporting application integrations and developer workflows.",
    bulletPoints: [
      "Built backend services and API-driven features for an API management platform",
      "Enhanced RESTful services using Python and SQL databases, reducing response latency by 20%",
      "Collaborated with engineering teams to optimize backend performance by 25% on a growing SaaS platform",
    ],
  },
  {
    company: "Six Apart",
    position: "Software Engineer",
    period: "Jun 2004 - Jul 2010",
    shortDesc:
      "Maintained and extended web application features for blogging and online publishing platforms.",
    bulletPoints: [
      "Maintained and extended web application features for blogging and online publishing platforms",
      "Created database-driven application components using SQL-based systems in a production environment",
      "Coordinated with engineering teams to troubleshoot issues and deliver reliable features",
    ],
  },
];

export const techStack = [
  { name: "TypeScript",     icon: SiTypescript,     color: "text-blue-500",   type: "Frontend" },
  { name: "React",          icon: FaReact,          color: "text-sky-400",    type: "Frontend" },
  { name: "Next.js",        icon: SiNextdotjs,      color: "text-white",      type: "Frontend" },
  { name: "JavaScript",     icon: SiJavascript,     color: "text-yellow-400", type: "Frontend" },
  { name: "HTML/CSS",       icon: SiHtml5,          color: "text-orange-400", type: "Frontend" },
  { name: "Tailwind",       icon: SiTailwindcss,    color: "text-cyan-400",   type: "Frontend" },

  { name: "Node.js",        icon: FaNodeJs,         color: "text-green-500",  type: "Backend"  },
  { name: "Express",        icon: SiExpress,        color: "text-white",      type: "Backend"  },
  { name: "FastAPI",        icon: SiFastapi,        color: "text-teal-400",   type: "Backend"  },
  { name: "Go",             icon: SiGo,             color: "text-sky-400",    type: "Backend"  },
  { name: "Python",         icon: FaPython,         color: "text-yellow-300", type: "Backend"  },
  { name: "Java",           icon: FaJava,           color: "text-orange-500", type: "Backend"  },
  { name: "PHP",            icon: SiPhp,            color: "text-indigo-400", type: "Backend"  },
  { name: "GraphQL",        icon: SiGraphql,        color: "text-pink-400",   type: "Backend"  },
  { name: "Twilio",         icon: SiTwilio,         color: "text-red-500",    type: "Backend"  },
  { name: "Stripe",         icon: SiStripe,         color: "text-purple-400", type: "Backend"  },

  { name: "PostgreSQL",     icon: SiPostgresql,     color: "text-blue-400",   type: "Databases" },
  { name: "Redis",          icon: SiRedis,          color: "text-red-500",    type: "Databases" },
  { name: "Supabase",       icon: SiSupabase,       color: "text-green-400",  type: "Databases" },
  { name: "SQLite",         icon: SiSqlite,         color: "text-blue-300",   type: "Databases" },

  { name: "AWS",            icon: FaAws,            color: "text-[#ff9900]",  type: "Cloud" },
  { name: "Docker",         icon: FaDocker,         color: "text-blue-400",   type: "Cloud" },
  { name: "Kubernetes",     icon: SiKubernetes,     color: "text-blue-500",   type: "Cloud" },
  { name: "Terraform",      icon: SiTerraform,      color: "text-purple-400", type: "Cloud" },
  { name: "GitHub Actions", icon: SiGithubactions,  color: "text-blue-400",   type: "Cloud" },
  { name: "Linux",          icon: SiLinux,          color: "text-gray-200",   type: "Cloud" },

  { name: "LangChain",      icon: SiLangchain,      color: "text-green-400",  type: "AI/LLM" },
  { name: "Anthropic",      icon: SiAnthropic,      color: "text-orange-300", type: "AI/LLM" },
  { name: "OpenAI API",     icon: SiOpenai,         color: "text-white",      type: "AI/LLM" },
  { name: "AWS Bedrock",    icon: FaAws,            color: "text-[#ff9900]",  type: "AI/LLM" },
];

export const projects = [
  {
    title: "go-messaging-microservices",
    description:
      "A gateway and messaging service communicating over gRPC, backed by PostgreSQL and Redis, fully containerized with Docker Compose. Verified end to end: registration, JWT auth, message delivery, and presence tracking all tested against live containers.",
    image: "/images/projects/go-messaging-microservices.svg",
    liveUrl: "https://github.com/naeemrashidi/go-messaging-microservices",
    techStack: techStack.filter((item) =>
      ["Go", "PostgreSQL", "Redis", "Docker"].includes(item.name)
    ),
  },
  {
    title: "candidate-engagement-pipeline",
    description:
      "A FastAPI service that classifies candidate replies with an LLM and advances them through an explicit state machine, from first contact to interview scheduling, with automated email notifications at each stage.",
    image: "/images/projects/candidate-engagement-pipeline.svg",
    liveUrl: "https://github.com/naeemrashidi/candidate-engagement-pipeline",
    techStack: techStack.filter((item) =>
      ["Python", "FastAPI", "Anthropic", "SQLite"].includes(item.name)
    ),
  },
  {
    title: "whatsapp-rag-assistant",
    description:
      "A generalized reference architecture for a grounded RAG assistant delivered over WhatsApp: vector search over PostgreSQL/pgvector, a strict citation-enforcing system prompt, and structured JSON output for reliable downstream parsing.",
    image: "/images/projects/whatsapp-rag-assistant.svg",
    liveUrl: "https://github.com/naeemrashidi/whatsapp-rag-assistant",
    techStack: techStack.filter((item) =>
      ["PostgreSQL", "Anthropic"].includes(item.name)
    ),
  },
  {
    title: "sms-campaign-platform",
    description:
      "A Twilio-backed bulk messaging service: Excel contact upload, templated per-contact messages, bounded-concurrency sending, and delivery/read status tracked in real time through Twilio webhooks.",
    image: "/images/projects/sms-campaign-platform.svg",
    liveUrl: "https://github.com/naeemrashidi/sms-campaign-platform",
    techStack: techStack.filter((item) =>
      ["Node.js", "Express", "Twilio"].includes(item.name)
    ),
  },
  {
    title: "aria-interview-platform",
    description:
      "A subscription SaaS pairing a marketing/account web app with a licensed desktop client for AI-assisted interview practice. Stripe-driven subscription billing, Supabase-backed accounts, and a licensing flow connecting the web and desktop sides.",
    image: "/images/projects/aria-interview-platform.png",
    liveUrl: "https://github.com/naeemrashidi/aria-interview-platform",
    techStack: techStack.filter((item) =>
      ["React", "TypeScript", "Node.js", "Express", "Stripe", "Supabase"].includes(item.name)
    ),
  },
];

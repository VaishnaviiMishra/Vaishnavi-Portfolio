const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "", label: "Professional Experiences" },
  { value: 20, suffix: "+", label: "Full Stack Projects" },
  { value: 30, suffix: "+", label: "Students Mentored at GDG" },
  { value: 8, suffix: "+", label: "CGPA at GGSIPU" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/1.png",
  },
  {
    imgPath: "/images/logos/2.png",
  },
  {
    imgPath: "/images/logos/3.png",
  },
  {
    imgPath: "/images/logos/4.png",
  },
  {
    imgPath: "/images/logos/5.svg",
  },
  {
    imgPath: "/images/logos/7.png",
  },
  {
    imgPath: "/images/logos/8.png",
  },
  {
    imgPath: "/images/logos/9.png",
  },
  {
    imgPath: "/images/logos/10.png",
  },
  {
    imgPath: "/images/logos/11.png",
  },
  {
    imgPath: "/images/logos/12.png",
  },
  {
    imgPath: "/images/logos/14.png",
  },
  {
    imgPath: "/images/logos/16.png",
  }
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "GenAI Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Built full-stack and GenAI solutions, CI/CD pipelines, and monitoring stacks at Impressico.",
    imgPath: "/images/impressicologo.png",
    logoPath: "/images/aistudio.png",
    logoSize: "w-40 h-16",
    title: "Software Development Intern — Impressico Business Solutions Pvt. Ltd.",
    date: "July 2025 - Present",
    responsibilities: [
      "Developed full-stack applications and APIs using TypeScript, Python, Django, React, and Node.js/Express.",
      "Engineered automated testing frameworks with Playwright (TypeScript) for robust API and UI verification.",
      "Implemented CI/CD pipelines using GitHub Actions.",
      "Specialized in Azure AI Engineering and Azure AI Foundry to develop and deploy GenAI solutions.",
      "Configured monitoring stacks including Grafana, Faro, Loki, Tempo, and used Wireshark for debugging.",
      "Managed cloud resource configuration and deployment workflows using Azure, Render, and SQL databases.",
    ],
  },
  {
    review: "Showcased exceptional ability to design and develop complete web solutions independently, from responsive UI to custom AI integrations and live data updates.",
    imgPath: "/images/FlocentraLogo.png",
    logoPath: "/images/nextjs.png",
    logoSize: "w-11 h-11",
    title: "Web Technologist",
    date: "February 2025 - May 2025",
    responsibilities: [
      "Single-handedly designed and developed a responsive website using Next.js, Node.js, ReactJS, JavaScript, ShadCN UI, Aceternity UI, and Tailwind CSS.",
      "Implemented custom AI chatbot and integrated live METAR/TAF updates for real-time aviation data.",
      "Deployed production-ready site on Vercel and set up custom domain using GoDaddy.",
      "Gained practical insight into cross-browser testing and mobile optimization.",
    ],
  },
  {
    review: "Quickly grasped modern frontend development principles and demonstrated strong potential in building responsive, component-based web interfaces.",
    imgPath: "/images/logos/sekeron.webp",
    logoPath: "/images/logos/2.png",
    logoSize: "w-25 h-10",
    title: "Frontend Intern",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Built responsive web interfaces using React.js, TypeScript, and Material-UI.",
      "Practiced writing clean, modular code and understood component-based architecture.",
      "Collaborated with the team to implement UI components and improve user experience.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dhiraj Mishra",
    mentions: "@dhiraj_flocentra",
    review:
      "Vaishnavi's ability to independently design and deploy a complete production-ready website was exceptional. From integrating the Gemini AI chatbot to implementing live METAR/TAF updates, he demonstrated remarkable full-stack expertise. His work on Vercel deployment and custom domain setup was seamless. A truly talented developer who exceeds expectations.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Sanjay Nandecha",
    mentions: "@sanjay_impressico",
    review:
      "Working with Vaishnavi on the AI parking detection system was outstanding. His ability to work across Android, Python, and React, while integrating advanced monitoring tools like Grafana and Wireshark, showcased exceptional technical depth. He brought innovative problem-solving to our distributed team and delivered production-ready solutions consistently.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Anonymous",
    mentions: "@sekeron_team",
    review:
      "Vaishnavi quickly grasped React.js, TypeScript, and Material-UI during his internship. His focus on writing clean, modular code and understanding component-based architecture was impressive. He demonstrated strong collaborative skills and a keen willingness to learn. A promising developer with excellent fundamentals.",
    imgPath: "/images/client2.png",
  }
  // {
  //   name: "Tech Lead - NLP Project",
  //   mentions: "@nlp_team",
  //   review:
  //     "Vaishnavi's work on the Series Analyzer project showcased deep expertise in NLP and GenAI. His implementation of BART-based classification, SpaCy networks, and fine-tuned DistilBERT models was sophisticated. The Gradio deployment and integration of multi-agent RAG systems demonstrated both technical mastery and practical deployment skills.",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "Project Manager - StudyWithNotes",
  //   mentions: "@studywithnotes_pm",
  //   review:
  //     "Vaishnavi's architecture for the AI course generation platform was elegant and scalable. His use of Next.js 13.4, Prisma ORM, and PlanetScale showed excellent database design decisions. The integration of OpenAI GPT-4 with YouTube Data API and automated content generation was innovative. His commitment to quality is evident in every code decision.",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "DevOps Lead - Kanban Platform",
  //   mentions: "@kanban_devops",
  //   review:
  //     "Vaishnavi's real-time Kanban platform demonstrates mastery in full-stack development. His implementation of WebSocket real-time collaboration, Redis caching strategies, and comprehensive audit logging shows architectural excellence. The Supabase integration and security measures were top-notch. A developer who understands production systems deeply.",
  //   imgPath: "/images/client6.png",
  // },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

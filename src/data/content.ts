export interface PersonalContent {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  city: string;
  education: string;
  year: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  resumeUrl: string;
  bioHeading: string;
  bioParagraph1: string;
  bioParagraph2: string;
  motto: string;
  stats: {
    projects: string;
    technologies: string;
    years: string;
    certifications: string;
  };
  timeline: Array<{
    period: string;
    role: string;
    organization: string;
    description: string;
  }>;
}

export const PERSONAL_CONTENT: PersonalContent = {
  name: "MOHAN RATHOD",
  firstName: "MOHAN",
  lastName: "RATHOD",
  role: "Full-Stack Developer / AI-ML Engineer",
  tagline: "I build AI-powered products and web experiences that feel alive.",
  city: "Mumbai, India",
  education: "B.E. Computer Science & Engineering — Mumbai University",
  year: "Final Year · Class of 2026",
  email: "mohanrathodmr2004@gmail.com",
  github: "https://github.com/mohanrathodmr",
  linkedin: "https://www.linkedin.com/in/mohan-rathod-06mr/",
  instagram: "https://www.instagram.com/mohan_rathod_mr?stkn=cXYxZXEzc3diY204",
  resumeUrl: "/resume.pdf",
  bioHeading: "Clean code, calm design, one working product at a time.",
  bioParagraph1:
    "I am Mohan Rathod, a final-year Computer Science & Engineering student at Mumbai University. I specialize in building end-to-end full-stack architectures, high-performance web systems, and applied artificial intelligence solutions that solve real-world problems.",
  bioParagraph2:
    "From training and deploying computer vision models with FaceNet and PyTorch, to engineering digital commerce platforms and crafting immersive 3D WebGL scenes, I focus on building software with clean patterns, thoughtful interactions, and lasting utility.",
  motto: "Building with intention, curiosity, and craft.",
  stats: {
    projects: "12+",
    technologies: "18+",
    years: "4",
    certifications: "6+",
  },
  timeline: [
    {
      period: "2022 — 2026",
      role: "B.E. Computer Science and Engineering",
      organization: "Mumbai University",
      description:
        "Comprehensive coursework in Data Structures, Algorithms, Artificial Intelligence, Database Management, and Distributed Web Systems.",
    },
    {
      period: "2024 — 2025",
      role: "Full-Stack & Computer Vision Developer",
      organization: "Academic & Production Projects",
      description:
        "Developed the Smart Attendance biometric recognition engine using FaceNet and SVM, and created specialized commerce & prompt engineering platforms.",
    },
    {
      period: "2025 — Present",
      role: "Freelance & Open Source Engineer",
      organization: "Independent Practice",
      description:
        "Collaborating with clients and building web experiences, custom 3D WebGL interfaces, automation tools, and scalable REST APIs.",
    },
  ],
};

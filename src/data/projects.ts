export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  image: string;
  featured: boolean;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    subtitle: "Vision-Based Biometric Student Recognition",
    tagline: "Automated, non-intrusive face recognition attendance engine with 98.4% validation accuracy.",
    category: "AI / Computer Vision",
    image: "secret-pathways-assets/generated/kage-sanmon-preview.webp",
    featured: true,
    problem:
      "Traditional manual roll-calls or fingerprint scanners are slow, hygiene-sensitive, and prone to proxy attendance in high-density university lecture halls.",
    solution:
      "Engineered an automated face detection and feature embedding pipeline using MTCNN and FaceNet deep neural networks, coupled with an SVM classifier to log student entries instantaneously.",
    tech: ["Python", "FaceNet", "SVM", "OpenCV", "Flask", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time multi-face detection and alignment with MTCNN",
      "128-dimensional embedding vector extraction via Inception-ResNet FaceNet",
      "Instantaneous classification using Support Vector Machines (SVM)",
      "Automated attendance timestamps and automated export reports",
      "Admin dashboard with student registration and anomaly detection",
    ],
    liveUrl: "https://github.com/mohanrathodmr",
    githubUrl: "https://github.com/mohanrathodmr",
  },
  {
    id: "prompt-store",
    title: "Character Prompt Store",
    subtitle: "AI Asset Commerce & Blueprint Platform",
    tagline: "High-performance digital marketplace for discovering, previewing, and licensing generative AI character prompts.",
    category: "Full-Stack Web / E-Commerce",
    image: "secret-pathways-assets/generated/kage-approach.webp",
    featured: false,
    problem:
      "Prompt engineers and visual creators lack dedicated marketplaces to securely showcase, benchmark, and monetize character design prompts.",
    solution:
      "Built a full-stack platform featuring instant visual previews, secure payment processing, gated content access, and user prompt collections.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe / Razorpay"],
    features: [
      "Dynamic prompt previewing with parameter configuration",
      "Secure webhook-verified checkout integration",
      "Category search, filtering, and tag classification",
      "Protected download vault for purchased prompt recipes",
      "Lightweight animated UI with instant optimistic state updates",
    ],
    liveUrl: "https://github.com/mohanrathodmr",
    githubUrl: "https://github.com/mohanrathodmr",
  },
  {
    id: "webgl-sanctuary",
    title: "3D Interactive Sanctuary",
    subtitle: "Real-Time WebGL World & Shaders",
    tagline: "Immersive 3D Kyoto temple environment running at a locked 60 FPS in pure WebGL.",
    category: "Creative Dev / 3D Graphics",
    image: "secret-pathways-assets/generated/kage-lantern-court.webp",
    featured: false,
    problem:
      "Most web experiences are flat and static, failing to engage users or convey architectural presence and spatial depth.",
    solution:
      "Developed a real-time procedural Three.js scene complete with custom particle atmospheric shaders, lantern embers, falling foliage, and mouse parallax.",
    tech: ["Three.js", "WebGL", "GLSL Shaders", "React", "Vite", "Canvas 2D"],
    features: [
      "Custom vertex & fragment shaders for glowing vermilion moon and lantern embers",
      "Procedural 3D text rasterization with bounding-box tracking and sage gradient ramps",
      "Scroll-driven camera spline navigation synchronized with DOM chapters",
      "Responsive fog and dynamic depth-of-field post-processing",
      "Mobile-optimized geometry batching and performance throttling",
    ],
    liveUrl: "http://localhost:5173",
    githubUrl: "https://github.com/mohanrathodmr",
  },
  {
    id: "ai-vision-agent",
    title: "Multimodal Vision Assistant",
    subtitle: "Real-Time Object & Speech Reasoning",
    tagline: "Edge AI assistant combining live camera detection with localized speech query answering.",
    category: "AI / Edge Computing",
    image: "secret-pathways-assets/generated/kage-moonwater.webp",
    featured: false,
    problem:
      "Edge devices often struggle with combining vision detection with conversational reasoning without prohibitive latency.",
    solution:
      "Integrated lightweight YOLOv8 object detection with Whisper voice transcription and local quantized LLM inferences.",
    tech: ["Python", "YOLOv8", "OpenAI Whisper", "LangChain", "FastAPI"],
    features: [
      "Sub-50ms inference on localized video streams",
      "Audio speech-to-text pipeline with context filtering",
      "Event-driven alerting and real-time dashboard visualization",
    ],
    liveUrl: "https://github.com/mohanrathodmr",
    githubUrl: "https://github.com/mohanrathodmr",
  },
];

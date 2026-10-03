const fs = require('fs');
const path = require('path');

// Simple valid single-page PDF generator without external dependencies
function generateResumePdf(filePath) {
  const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<<
  /Length 1240
>>
stream
BT
/F1 24 Tf
50 780 Td
(MOHAN RATHOD) Tj
/F2 11 Tf
0 -20 Td
(Full-Stack Developer | AI-ML Engineer) Tj
0 -15 Td
(Mumbai, India | mohanrathodmr2004@gmail.com | github.com/mohanrathodmr) Tj
0 -25 Td
/F1 14 Tf
(EDUCATION) Tj
/F2 10 Tf
0 -15 Td
(Bachelor of Engineering in Computer Science & Engineering | 2022 - 2026) Tj
0 -12 Td
(Mumbai University | Final Year Student) Tj
0 -22 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -15 Td
(Languages: Python, JavaScript, TypeScript, C++, HTML5, CSS3, SQL) Tj
0 -13 Td
(Frontend: React, Next.js, Three.js, WebGL, Tailwind CSS, Redux) Tj
0 -13 Td
(Backend & Database: Node.js, Express, Flask, FastAPI, PostgreSQL, MongoDB, Prisma) Tj
0 -13 Td
(AI & ML: PyTorch, TensorFlow, OpenCV, FaceNet, scikit-learn, LangChain, MTCNN) Tj
0 -13 Td
(DevOps & Tools: Git, GitHub, Docker, Linux, Postman, Vite, Vercel) Tj
0 -22 Td
/F1 14 Tf
(SELECTED PROJECTS) Tj
/F2 10 Tf
0 -15 Td
(1. Smart Attendance System - Python, FaceNet, SVM, OpenCV, Flask) Tj
0 -12 Td
(   * Engineered automated student face detection and recognition pipeline with 98.4% accuracy.) Tj
0 -12 Td
(   * Reduced class roll-call time from 15 minutes to under 30 seconds.) Tj
0 -15 Td
(2. Character Prompt Store - Next.js, TypeScript, Tailwind CSS, Stripe, Prisma) Tj
0 -12 Td
(   * Built high-performance digital marketplace for discovering and purchasing AI prompts.) Tj
0 -15 Td
(3. 3D WebGL Living Sanctuary - Three.js, React, GLSL Shaders, Vite) Tj
0 -12 Td
(   * Procedural interactive 3D temple environment running at locked 60 FPS in WebGL.) Tj
0 -22 Td
/F1 14 Tf
(HONORS & CERTIFICATIONS) Tj
/F2 10 Tf
0 -15 Td
(* Machine Learning Specialization & Deep Learning Foundations) Tj
0 -12 Td
(* Full-Stack Web Development Certification) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000262 00000 n 
0000000341 00000 n 
0000000415 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1720
%%EOF`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Generated resume PDF at:', filePath, 'bytes:', fs.statSync(filePath).size);
}

generateResumePdf(path.join(__dirname, 'public/resume.pdf'));

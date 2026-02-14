import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project8.png" alt="Series Analyzer" />
            </div>
            <div className="text-content">
              <h2>
                Series Analyzer - NLP + GenAI Project leveraging Hugging Face Models
              </h2>
              <ul className="text-white-50 md:text-lg list-disc list-inside space-y-2 mt-3">
                <li>Built NLP pipeline with BART theme classifier, SpaCy character networks, and fine-tuned DistilBERT</li>
                <li>Integrated Gemini API chatbot with RAG and multi-agent routing, deployed via Gradio</li>
                <li>Tech Stack: Python, Transformers, NLTK, Pandas, NumPy, NetworkX, PyVis, Scikit-learn, Hugging Face</li>
              </ul>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project7.png"
                  alt="StudyWithNotes Platform"
                />
              </div>
              <h2>StudyWithNotes - AI Generated Course Platform</h2>
              <ul className="text-white-50 md:text-lg list-disc list-inside space-y-2 mt-3">
                <li>Built with Next.js 13.4, TypeScript, NextAuth.js (Google OAuth), and Shadcn/Radix UI components</li>
                <li>Automated content generation using OpenAI GPT-4 to convert YouTube transcripts into structured courses with quizzes</li>
                <li>Scalable architecture with Prisma ORM, PlanetScale MySQL, YouTube Data API, and TanStack Query</li>
              </ul>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project9.png" alt="Kanban Platform" />
              </div>
              <h2>Real-Time Collaborative Kanban Platform</h2>
              <ul className="text-white-50 md:text-lg list-disc list-inside space-y-2 mt-3">
                <li>Full-stack application with WebSocket real-time collaboration, Redis caching, and Supabase database</li>
                <li>Comprehensive audit logging, complex relational data modeling, and RESTful/WebSocket API design</li>
                <li>Modern React patterns with advanced state management, authentication, authorization, and security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

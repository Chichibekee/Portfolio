import { useEffect } from "react";
import profileImage from "../assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bg-about.jpg')` }}>
      {/* 🔴 Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* 🔵 Main Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-16 space-y-12 text-white">
        <div className="flex flex-col md:flex-row items-center gap-10" data-aos="fade-up">
          <img
            src={profileImage}
            alt="Chioma Ozuru"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-300">About Me</h2>
            <p>
              I'm Chioma Ozuru, a versatile and solutions-driven professional with a growing background in software
              development, executive administration, and sales. My multidisciplinary experience empowers me to approach
              challenges strategically while executing tasks with precision and creativity.
            </p>
          </div>
        </div>

        <div className="space-y-6" data-aos="fade-up">
          <p>
            With hands-on experience building responsive web applications, I specialize in writing clean, scalable code and
            improving user experience through modern UI/UX...
          </p>

          <p>
            My passion lies in delivering real-world digital solutions. Whether launching customer-focused campaigns,
            enhancing brand presence, or providing excellent administrative support, I bring a well-rounded and proactive
            approach to every role I take on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Tech Stack:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML, CSS, JavaScript, TypeScript</li>
              <li>React.js, Tailwind CSS</li>
              <li>Git, GitHub, Vercel</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Soft Skills:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Effective communication</li>
              <li>Problem-solving & adaptability</li>
              <li>Attention to detail & organization</li>
              <li>Customer service & teamwork</li>
            </ul>
          </div>
        </div>

        <div className="text-center" data-aos="zoom-in">
          <a
            href="/Chioma_CV.pdf"
            download
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            📄 Download My CV
          </a>
        </div>
      </section>
    </div>
  );
}

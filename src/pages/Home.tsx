import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGit,
} from "react-icons/si";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen text-black  bg-blue-100"
      style={{
        backgroundImage: "./assets/images/home-bg1.jpg",
        backgroundSize: "cover",
      }}
    >
      <div className=" w-full min-h-screen">
        <div className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mt-20 mb-16">
            
            
            <p className="text-gray-900 mt-4 text-3xl font-bold flex-row">
              A Passionate Frontend Developer 
            </p>
            <p className="text-gray-900 mt-3 max-w-3xl mx-auto text-base">
              I specialize in crafting visually engaging and responsive web applications using modern
              technologies like React, Tailwind CSS, and JavaScript. With a strong foundation in
              frontend development and a keen interest in the decentralized web, I am on a mission to
              build products that are both beautiful and impactful.
            </p>
            
          </div>

          {/* Skills Section */}
          <section id="skills">
            <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">
              Technical Skills  <br />
            </h2>

            {/* Programming Skills */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Programming</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                <SkillItem icon={<FaHtml5 className="text-orange-500 text-3xl" />} label="HTML" />
                <SkillItem icon={<FaCss3Alt className="text-blue-500 text-3xl" />} label="CSS" />
                <SkillItem icon={<FaJs className="text-yellow-400 text-3xl" />} label="JavaScript" />
                <SkillItem icon={<FaReact className="text-cyan-400 text-3xl" />} label="React.js" />
                <SkillItem icon={<FaNodeJs className="text-green-600 text-3xl" />} label="Node.js" />
                <SkillItem icon={<SiTypescript className="text-blue-700 text-3xl" />} label="TypeScript" />
                <SkillItem icon={<SiTailwindcss className="text-sky-500 text-3xl" />} label="Tailwind CSS" />
              </div>
            </div>

            {/* Tools */}
            <div className="mb-20 text-wrap">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Development Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                <SkillItem icon={<SiGit className="text-red-500 text-3xl" />} label="Git" />
                <SkillItem icon={<FaGithub className="text-gray-800 text-3xl" />} label="GitHub" />
                <SkillItem icon={<SiVercel className="text-black text-3xl" />} label="Vercel" />
              </div>
            </div>

            {/* Soft Skills Note */}
            <p className="text-center text-base sm:text-lg text-gray-800 mb-16">
              I combine technical precision with strong soft skills like communication, time management, and adaptability.
            </p>

            {/* CV Download */}
            <div className="text-center">
              <a
                href="/Chioma_CV.pdf"
                download
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Download My CV
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Skill Item Component
const SkillItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-6">
    {icon}
    <span className="text-base font-medium">{label}</span>
  </div>
);

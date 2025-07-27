
import moove from "../assets/moove.png";
import piggy from "../assets/piggy.png";
import contactForm from "../assets/contact-form.png";
import calculator from "../assets/calculator.png";

const projects = [
  {
    title: "Bolt Booking Website",
    description: "Built using HTML and CSS",
    image: moove,
    link: "https://moove-nine.vercel.app/",
  },
  {
    title: "Piggyvest Website Clone",
    description: "Built using HTML and CSS",
    image: piggy,
    link: "https://piggy-vestt.vercel.app/",
  },
  {
    title: "User Collection Form",
    description: "Built with JavaScript, React, Tailwind CSS",
    image: contactForm,
    link: "https://contact-form-flame-theta.vercel.app/",
  },
  {
    title: "Simple Calculator",
    description: "Built using JavaScript",
    image: calculator,
    link: "https://simple-calculator-seven-beige.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-blue-100 min-h-screen px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        My Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
            )}
            <h3 className="text-xl font-bold text-blue-600">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

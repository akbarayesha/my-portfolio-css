import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Hi, I'm Ayesha. I'm a passionate developer specializing in web development
          and creating beautiful user experiences.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <Image
                src="/lap1.jpg"
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </section>
      <About />
      <Contact />
    </div>
  );
}
const projects = [
    {
      id: 1,
      title: "Todo App",
      description: "Simple Todo App in nextjs tailwindcss and typescipt",
    },
    {
      id: 2,
      title: "Calculator",
      description: "Calculator in nextjs tailwindcss and typescipt",
    },
    {
      id: 3,
      title: "Shoping website",
      description: "shoping Website in nextjs tailwindcss and typescipt",
    },
  ];
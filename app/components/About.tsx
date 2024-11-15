import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="container">
      <h1 className="hero-title">About Me</h1>
      
      <div className="about-container">
        <div className="about-image">
          <Image
            src="/a.jpg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
          
            
          />
        </div>
        
        <div className="about-content">
          <h2>Hello, I'm Ayesha</h2>
          <p>
            I'm a passionate web developer with expertise in modern technologies like
            React, Next.js, and TypeScript. I love creating beautiful and functional
            web applications that solve real-world problems.
          </p>
          
          <div className="skills-container">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "CSS",
  "Node.js",
  "JavaScript",
  "HTML/CSS",
  "Git",
];
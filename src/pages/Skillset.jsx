// import React from "react";
// import { Container } from "react-bootstrap";

// import Particle from '../components/Particle'
// import Techstack from "../components/Skillset/Techstack";
// import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

// const Skillset = () => {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Professional <strong className="yellow">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="yellow">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         <Leetcode />
//         <Github />
//       </Container>
//     </Container>
//   )
// }

// export default Skillset


import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiCplusplus, SiReact } from "react-icons/si";
import "./skillset.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { name: "JavaScript", icon: <SiJavascript className="icon js" /> },
  { name: "React", icon: <SiReact className="icon react" /> },
  { name: "React Native", icon: <FaReact className="icon react-native" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
  { name: "Express.js", icon: <SiExpress className="icon express" /> },
  { name: "C++", icon: <SiCplusplus className="icon cpp" /> },
  { name: "Java", icon: <FaJava className="icon java" /> },
];

const Skillset = () => {
  return (
    <div className="skills-container">
      <div className="stars"></div>
      <h2 className="skills-title">My Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;


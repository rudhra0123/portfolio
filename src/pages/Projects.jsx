import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
 
import project from "../assets/iship_1.jpg";
 
import lift from "../assets/iship-2.jpeg";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/project_3.jpg";
 


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="NotifyNation"
              description="NotifyNation is a government exam notification platform built with React, Material-UI, and MongoDB. It provides real-time updates on exam dates, syllabus, previous papers, and eligibility criteria. Users can register, track exams, and access personalized dashboards for notifications. The platform supports CRUD operations and ensures secure authentication. Built on the MERN stack, it offers a seamless experience for aspirants. "
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="World Wide Cars"
              description="World Wide Cars is a buying and selling platform for cars, built with React, Material-UI, and MongoDB. Users can filter by brand, price, and features, add cars to favorites, and place orders. The platform supports secure authentication, real-time updates, and a seamless user experience. With full CRUD functionality, sellers can list cars, and buyers can explore and purchase easily. Built on the MERN stack, it ensures a smooth and efficient marketplace."
              ghLink=""
            />
          </Col>
          
          {/* <Col className="titleProjects">Mini Projects</Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Cloning App"
              description="I recently cloned the Technical Hub app using React Native, replicating its UI and core functionalities. This project helped me understand mobile app development, including component structuring, state management, and navigation. I focused on responsive design and smooth user interactions to match the original app experience. This hands-on experience enhanced my skills in React Native, Expo, and UI development."
              ghLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
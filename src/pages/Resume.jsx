import React, { useState, useEffect } from "react";
// import { useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle';
import pdf from "../assets/22A91A0584(resume).pdf"; // ✅ Imported PDF correctly

import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// ✅ Corrected pdf.worker.js path
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js`;
 

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ✅ Resume Display Section */}
        {/* <Row className="resume d-flex justify-content-center">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </Row> */}

        {/* ✅ Download Button Below Resume */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;

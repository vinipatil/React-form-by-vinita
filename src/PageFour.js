import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PDFLayout from "./PDFLayout"; 
import "./App.css";

const PageFour = ({ formData, imageData }) => {
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const contentRef = useRef(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneratingPDF(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(contentRef.current, {
        scale: 2, 
      });

      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const pdfWidth = contentWidth;
      const pdfHeight = contentHeight;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
        unit: "pt",
        format: [pdfWidth, pdfHeight],
      });
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("preview.pdf");

      setGeneratingPDF(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setGeneratingPDF(false);
    }
  };


  return (
    <div className="pagep">
      <div className="pdf-layout" ref={contentRef}>
        <PDFLayout formData={formData} imageData={imageData} />
      </div>
      
      <div className="prev-nxt">
        <button className="nx" onClick={(e) => handleSubmit(e)}>
          {generatingPDF ? "Generating PDF..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default PageFour;

import React from "react";
import "./PDFLayout.css";

const PDFLayout = ({ formData, imageData }) => {
  const additionalFields = {
    fullName: "Full Name",
    email: "Email",
    phoneNumber: "Phone Number",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    tenthPercentage: "Tenth Percentage",
    tenthPassoutYear: "Tenth Passout Year",
    tenthUniversity: "Tenth University",
    twelfthPercentage: "Twelfth Percentage",
    twelfthPassoutYear: "Twelfth Passout Year",
    twelfthUniversity: "Twelfth University",
    graduationPercentage: "Graduation Percentage",
    graduationPassoutYear: "Graduation Passout Year",
    graduationUniversity: "Graduation University",
    permanentAddress: "Permanent Address",
    correspondenceAddress: "Correspondence Address",
    city: "City",
    pinCode: "Pin Code",
  };

  return (
    <div className="pdf-layout">
      <div className="form-slip">
         {imageData && (
        <div className="form-field">
          <label>Photo:</label><br />
          <img src={imageData} alt="Uploaded" className="pdf-image" />
        </div>
      )}
        {Object.entries(additionalFields).map(([key, label]) => (
          <div className="form-field" key={key}>
            <label>{label}:</label>
            <span>{formData[key]}</span>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default PDFLayout;

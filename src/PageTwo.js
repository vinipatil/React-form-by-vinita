import React from "react";
import "./App.css";

const PageTwo = ({ formData, handleChange, nextPage, previousPage }) => {
  return (
    <div className="page">
      <h2 className="title">Education Details</h2>
      <div className="form-group">
        <label className="label" htmlFor="tenthPercentage">10th Percentage:</label>
        <input
          id="tenthPercentage"
          type="number"
          value={formData.tenthPercentage}
          onChange={(e) => handleChange("tenthPercentage", e.target.value)}
          placeholder="Enter 10th Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="tenthPassoutYear">10th Passout Year:</label>
        <input
          id="tenthPassoutYear"
          type="number"
          value={formData.tenthPassoutYear}
          onChange={(e) => handleChange("tenthPassoutYear", e.target.value)}
          placeholder="Enter 10th Passout Year"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="tenthUniversity">10th University Name:</label>
        <input
          id="tenthUniversity"
          type="text"
          value={formData.tenthUniversity}
          onChange={(e) => handleChange("tenthUniversity", e.target.value)}
          placeholder="Enter 10th University Name"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthPercentage">12th Percentage:</label>
        <input
          id="twelfthPercentage"
          type="number"
          value={formData.twelfthPercentage}
          onChange={(e) => handleChange("twelfthPercentage", e.target.value)}
          placeholder="Enter 12th Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthPassoutYear">12th Passout Year:</label>
        <input
          id="twelfthPassoutYear"
          type="number"
          value={formData.twelfthPassoutYear}
          onChange={(e) => handleChange("twelfthPassoutYear", e.target.value)}
          placeholder="Enter 12th Passout Year"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="twelfthUniversity">12th University Name:</label>
        <input
          id="twelfthUniversity"
          type="text"
          value={formData.twelfthUniversity}
          onChange={(e) => handleChange("twelfthUniversity", e.target.value)}
          placeholder="Enter 12th University Name"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationPercentage">Graduation Percentage:</label>
        <input
          id="graduationPercentage"
          type="number"
          value={formData.graduationPercentage}
          onChange={(e) => handleChange("graduationPercentage", e.target.value)}
          placeholder="Enter Graduation Percentage"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationPassoutYear">Graduation Passout Year:</label>
        <input
          id="graduationPassoutYear"
          type="number"
          value={formData.graduationPassoutYear}
          onChange={(e) => handleChange("graduationPassoutYear", e.target.value)}
          placeholder="Enter Graduation Passout Year"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduationUniversity">Graduation University Name:</label>
        <input
          id="graduationUniversity"
          type="text"
          value={formData.graduationUniversity}
          onChange={(e) => handleChange("graduationUniversity", e.target.value)}
          placeholder="Enter Graduation University Name"
          className="input-field"
        />
      </div>
      <div className="button-group">
        <button onClick={previousPage} className="button">Previous</button>
        <button onClick={nextPage} className="button">Next</button>
      </div>
    </div>
  );
};

export default PageTwo;

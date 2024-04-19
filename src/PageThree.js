import React from "react";
import "./App.css";

const PageThree = ({ formData, handleChange, previousPage, nextPage }) => {
  return (
    <div className="pg">
      <h2>Address Details</h2>
      <input
        type="text"
        value={formData.permanentAddress}
        onChange={(e) => handleChange("permanentAddress", e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        value={formData.correspondenceAddress}
        onChange={(e) =>
          handleChange("correspondenceAddress", e.target.value)
        }
        placeholder="Correspondence Address"
      />
      <input
        type="text"
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
        placeholder="City"
      />
      <input
        type="text"
        value={formData.pinCode}
        onChange={(e) => handleChange("pinCode", e.target.value)}
        placeholder="Pin Code"
      />
      <div className="prev-nxt">
        <button className="pr" onClick={previousPage} >Previous</button>
        <button className="nx" onClick={nextPage} >Next</button>
      </div>
    </div>
  );
};

export default PageThree;

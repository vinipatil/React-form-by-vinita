import React, { useEffect, useState } from "react";
import './App.css'

const Dashboard = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Retrieve form data from local storage
    const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};
    // Extract the data you want to display (full name, email, phone number)
    const { fullName, email, phoneNumber } = storedFormData;
    // Format the data into an array of objects
    const dataToDisplay = [{ fullName, email, phoneNumber }];
    // Set the data to the state
    setFormData(dataToDisplay);
  }, []);

  const handleDelete = (index) => {
    // Remove the data at the specified index from the formData state
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleUpdate = (index) => {
    // Implement the logic to handle updating the data at the specified index
    console.log("Update clicked for index:", index);
  };

  return (
    <div className="dashb">
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th> {/* New column for buttons */}
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.fullName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td> {/* Action column */}
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

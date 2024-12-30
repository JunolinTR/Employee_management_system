import React, { useState } from "react";
import axios from "axios";


function EmployeeSearch() {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  const searchRecord = async () => {
    const code = prompt("Enter the Employee ID to retrieve the details");
    if(code) {
      try {
        const response = await axios.get(`http://localhost:5000/employee/search/${code}`, {
          params: { code: code } 
        });
        setEmployee(response.data); 
        setError(null);
      } catch (err) {
        setError("Employee not found");
        setEmployee(null);
      }
    }
  };


  return (
    <div>
      <h1>Employee Search</h1>
      <button onClick={searchRecord}>Search Employee</button>
      
      {employee && (
        <div className="res">
          <h1>Employee Details</h1>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Employee ID:</strong> {employee.employeeId}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>phoneNumber:</strong> {employee.phoneNumber}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default EmployeeSearch;
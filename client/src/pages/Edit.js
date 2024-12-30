import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./Edit.css"

function EditEmployee() {
  const { id } = useParams(); 
  const [employeeData, setEmployeeData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phoneNumber: '',
    department: '',
    dateOfJoining: '',
    role: ''
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get(`http://localhost:5000/employee/${id}`)
      .then(response => {
        setEmployeeData(prevState => ({
          ...prevState,
          ...response.data,
          dateOfJoining: new Date(response.data.dateOfJoining).toISOString().split('T')[0]
        }));
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await axios.put(`http://localhost:5000/employee/${id}`, employeeData);
      alert('Employee details updated successfully');
      navigate('/'); 
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('There was an error updating the employee details.');
    }
  };

  return (
    <div className="editEmployeeContainer">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Employee ID</label>
          <input
            type="text"
            name="employeeID"
            value={employeeData.employeeId}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={employeeData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department</label>
          <select
            name="department"
            value={employeeData.department}
            onChange={handleChange}
          >
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
        <div>
          <label>Date of Joining</label>
          <input
            type="date"
            name="dateOfJoining"
            value={employeeData.dateOfJoining}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={employeeData.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEmployee;
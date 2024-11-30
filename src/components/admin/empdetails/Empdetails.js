// import '../empdetails/Empdetails.css';

// function Empdetdils(){
//     return(
//         <div className="main-content">
//             <div id='Empdetdils'>
//                 <div className='row'>
//                     <h1>Employee Registration</h1>
//                     <form>
//                         <lable>First Name :</lable>
//                         <input type="text"></input>
//                         <lable>Last Name :</lable>
//                         <input type="text"></input>
//                         <lable>Mobile Number :</lable>
//                         <input type="number"></input>
//                         <lable>Alternate Number :</lable>
//                         <input type="number"></input>
//                         <lable>Date Of Birth :</lable>
//                         <input type="date"></input>
//                         <lable>E-mail Id :</lable>
//                         <input type="email"></input>
//                         <lable>Aadhar Number :</lable>
//                         <input type="number"></input>
//                         <lable>Pan Card Number :</lable>
//                         <input type="number"></input>
//                         <lable>Designation: </lable>
//                         <input type='text'></input>
//                         <lable>Emp Id : </lable>
//                         <input type='text'></input>
//                         <lable>Password : </lable>
//                         <input type="password"></input>
//                         <h1>Address</h1>
//                         <input type="text" placeholder="Line 1"></input>
//                         <input type="text" placeholder="Line 2"></input>
//                         <input type="text" placeholder="City"></input>
//                         <input type="text" placeholder="State"></input>
//                         <input type="number" placeholder="Zip Code"></input>
//                         <h1>Bank Details</h1>
//                         <lable>Bank Name : </lable>
//                         <input type="text"></input>
//                         <lable>Branch : </lable>
//                         <input type="text"></input>
//                         <lable>Account Number : </lable>
//                         <input type="number"></input>
//                         <lable>IFSC Code : </lable>
//                         <input type="number"></input>
//                         <button type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Empdetdils;


import React, { useState } from "react";
import "../empdetails/Empdetails.css";

function Empdetdils() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    alternateNumber: "",
    dob: "",
    email: "",
    aadhar: "",
    pan: "",
    designation: "",
    empId: "",
    password: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    bankName: "",
    branch: "",
    accountNumber: "",
    ifsc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.mobileNumber || formData.mobileNumber.length !== 10)
      newErrors.mobileNumber = "Mobile Number must be 10 digits";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    if (!formData.zip || formData.zip.length !== 6)
      newErrors.zip = "Zip Code must be 6 digits";
    if (!formData.ifsc.trim())
      newErrors.ifsc = "IFSC Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="main-content">
      <div id="Empdetdils">
        <div className="row">
          <h1>Employee Registration</h1>
          <form onSubmit={handleSubmit}>
            <label>First Name :</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
            <label>Last Name :</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            
            <label>Mobile Number :</label>
            <input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            

            <label>Alternate Number :</label>
            <input
              type="number"
              name="alternateNumber"
              value={formData.alternateNumber}
              onChange={handleChange}
            />

            <label>Date Of Birth :</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <label>E-mail Id :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <label>Aadhar Number :</label>
            <input
              type="number"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
            />

            <label>Pan Card Number :</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
            />

            <label>Designation: </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />

            <label>Emp Id : </label>
            <input
              type="text"
              name="empId"
              value={formData.empId}
              onChange={handleChange}
            />

            <label>Password : </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            

            <h1>Address</h1>
            <input
              type="text"
              name="addressLine1"
              placeholder="Line 1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Line 2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
            <input
              type="number"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
            />
            

            <h1>Bank Details</h1>
            <label>Bank Name : </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
            />

            <label>Branch : </label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />

            <label>Account Number : </label>
            <input
              type="number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
            />

            <label>IFSC Code : </label>
            <input
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
            />
            {/* {errors.ifsc && <span className="error">{errors.ifsc}</span>}
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
            {errors.email && <span className="error">{errors.email}</span>}
            {errors.zip && <span className="error">{errors.zip}</span>}
            {errors.password && <span className="error">{errors.password}</span>} */}

{Object.values(errors).filter(Boolean).join(", ") && (
  <span className="error">
    {Object.values(errors).filter(Boolean).join(", ")}
  </span>
)}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Empdetdils;




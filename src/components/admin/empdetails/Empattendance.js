import React, { useState } from "react";
import "../empdetails/Empattendance.css";

const Empattendance = () => {
  const [attendance] = useState([
    {
      Empid: "",
      Empname : "",
      date: "",
      loginTime: "",
      logoutTime: "",
      lunchTime: "",
      breakTime: "",
      permission: "",
    },
    {
      Empid: "",
      Empname : "",
      date: "",
      loginTime: "",
      logoutTime: "",
      lunchTime: "",
      breakTime: "",
      permission: "",
    },
    {
        Empid: "",
        Empname : "",
        date: "",
        loginTime: "",
        logoutTime: "",
        lunchTime: "",
        breakTime: "",
        permission: "",
      },
  ]);

  return (
    <div className="main-content">
    <div className="attendance-container">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Date</th>
            <th>Login Time</th>
            <th>Break Time</th>
            <th>Lunch Time</th>
            <th>Break Time</th>
            <th>Permission</th>
            <th>Logout Time</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td>{record.Empid}</td>
              <td>{record.Empname}</td>
              <td>{record.date}</td>
              <td>{record.loginTime}</td>
              <td>{record.breakTime}</td>
              <td>{record.lunchTime}</td>
              <td>{record.breakTime}</td>
              <td>{record.permission}</td>
              <td>{record.logoutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Empattendance;

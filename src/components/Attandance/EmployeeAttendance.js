import React, { useState } from "react";
import "./AttendanceTable.css";

const EmployeeAttendance = () => {
  // Mock attendance data
  const [attendance, setAttendance] = useState([
    {
      date: "2024-11-29",
      loginTime: "09:00 AM",
      logoutTime: "06:00 PM",
      lunchTime: "01:00 PM - 01:30 PM",
      breakTime: "15 mins",
      permission: "Medical Leave",
    },
    {
      date: "2024-11-28",
      loginTime: "09:15 AM",
      logoutTime: "05:45 PM",
      lunchTime: "12:45 PM - 01:15 PM",
      breakTime: "20 mins",
      permission: "Personal Work",
    },
    // Add more data as needed
  ]);

  return (
    <div className="attendance-container">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Lunch Time</th>
            <th>Break Time</th>
            <th>Permission</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.loginTime}</td>
              <td>{record.logoutTime}</td>
              <td>{record.lunchTime}</td>
              <td>{record.breakTime}</td>
              <td>{record.permission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeAttendance;

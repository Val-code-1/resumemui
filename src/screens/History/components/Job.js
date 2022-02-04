import React from "react";
import "./Job.css";
const Job = ({ title, company, date, description }) => {
  return (
    <div className="job">
      <h1 className="title">{title}</h1>
      <h2 className="company">{company}</h2>
      <h3 className="date">{date}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Job;

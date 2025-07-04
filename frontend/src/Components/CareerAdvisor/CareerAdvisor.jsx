// src/components/careerAdvisor/CareerAdvisor.jsx
import React, { useContext, useState } from "react";
import ResumeContext from "../../Context/ResumeContext.js";
import "./CareerAdvisor.css";

const CareerAdvisor = () => {
  const { resumeData } = useContext(ResumeContext);
  const [advice, setAdvice] = useState("");

  const generateAdvice = async () => {
    const response = await fetch("http://localhost:5000/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeData),
    });
    const data = await response.json();
    setAdvice(data.careerAdvice);
  };

  return (
    <div className="career-advisor">
      <h2 className="text-xl font-semibold">AI Career Advisor</h2>
      <button className="btn" onClick={generateAdvice}>Get Career Advice</button>
      {advice && <div className="advice-box mt-4">{advice}</div>}
    </div>
  );
};

export default CareerAdvisor;

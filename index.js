import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#e6ccb2",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#e9edc9",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#6096ba",
  },
  {
    skill: "Git and GitHub",
    level: "intermediete",
    color: "#84a98c",
  },
  {
    skill: "NodeJs",
    level: "advanced",
    color: "#ffb3c6",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#778da9",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="tenzin.jpg" alt="me"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Tenzin Phuntsok</h1>
      <p>
        Hi I am Tenzin, an engineer and front-end developer who enjoys book,
        tech and podcast
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skl) => (
        <Skill mySkill={skl} />
      ))}
    </div>
  );
}
function Skill({ mySkill }) {
  return (
    <div className="skill" style={{ backgroundColor: mySkill.color }}>
      <span>
        {mySkill.skill}
        {/* {mySkill.level !== "beginner"
          ? mySkill.level === "advanced"
            ? "💪"
            : "👍"
          : "👶"} */}

        {mySkill.level === "beginner" && " 👶"}
        {mySkill.level === "intermediete" && " 👍"}
        {mySkill.level === "advanced" && " 💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

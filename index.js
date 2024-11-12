import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
  return <img src="./tenzin.jpg" alt="me" className="avatar"></img>;
}
function Intro() {
  return (
    <div>
      <Heading />
      <h3>
        Hi,I am Tenzin, an engineer and front-end developer who enjoys books,
        tech, and podcasts
      </h3>
    </div>
  );
}
function Heading() {
  return <h1>Tenzin Phuntsok</h1>;
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#e6ccb2" />
      <Skill skill="JavaScript" emoji="💪" color="#e9edc9" />
      <Skill skill="React" emoji="💪" color="#6096ba" />
      <Skill skill="Git and GitHub" emoji="👍" color="#84a98c" />
      <Skill skill="NodeJs" emoji="💪" color="#ffb3c6" />
      <Skill skill="TypeScript" emoji="👶" color="#778da9" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <h3>
        {props.skill} {props.emoji}
      </h3>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

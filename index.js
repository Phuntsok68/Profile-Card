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
    <ul className="skill-list">
      <li className="skill" style={{ backgroundColor: "#e6ccb2" }}>
        HTML+CSS 💪
      </li>
      <li className="skill" style={{ backgroundColor: "#e9edc9" }}>
        JavaScript 💪
      </li>
      <li className="skill" style={{ backgroundColor: "#6096ba" }}>
        Web Design 💪
      </li>
      <li className="skill" style={{ backgroundColor: "#84a98c" }}>
        Git and GitHub 👍
      </li>
      <li className="skill" style={{ backgroundColor: "#ffb3c6" }}>
        React 💪
      </li>
      <li className="skill" style={{ backgroundColor: "#778da9" }}>
        TypeScript 👶
      </li>
    </ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

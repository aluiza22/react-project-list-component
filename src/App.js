import React from "react";
import { Project } from "./components/Project";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <section className="full_section container">
        <h2>Projects</h2>
        <div className="card-deck">
          <Project pname="Portfolio" ptags={["react", "mongodb", "bootstrap", "css", "html"]} />
          <Project pname="Blog" ptags={["wordpress", "php", "react", "gatsby"]} />
          <Project pname="Test" ptags={["this", "that"]} />
        </div>
      </section>
    </div>
  );
}

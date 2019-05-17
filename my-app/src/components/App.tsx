import React from "react";
// import './App.css';
import '../App.css';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1 style={{ fontFamily: "Roboto" }} className="text-6xl text-center">
        Kevin Gonzalez
      </h1>
      <div className="flex justify-center ">
        <a className="social" href="https://github.com/kgonzale" title="Github">
          <i className="fab fa-github" />
        </a>
        <a className="social" href="https://www.linkedin.com/in/gonzalek/" title="LinkedIn">
          <i className="fab fa-linkedin" />
        </a>
        <a className="social" href="mailto:kevin@kgonzale.com" title="E-Mail">
          <i className="far fa-envelope" />
        </a>
        <a className="social" href="https://docdro.id/OjNi9Wg" title="Resume">
          <i className="far fa-file" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default App;

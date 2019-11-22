import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Header } from "./components/header";
import { Build } from "./components/build.js";
import { Footer } from "./components/footer.js";

import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
        <Build />
        <Footer />
      </div>
    </div>
  );
};

export default App;

import { CardReal } from "./card.js";
import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";

export const Build = () => {
  return (
    <div>
      <div className="mainTop">
        <div className="logo1" />
        <div />
      </div>

      <div className="content">
        <CardReal />
      </div>
    </div>
  );
};

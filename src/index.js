import React from "react";
import { render } from "react-dom";
import { AppComp } from "./App/App";


var root = document.getElementById("app");
if (root) {
  render(    
      <AppComp />,
       root
  );
}

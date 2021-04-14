import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app/App";
import { RecoilRoot } from "recoil";
import RecoilLogger from "recoil-logger";
//Font
import './font/arcade.ttf';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <RecoilLogger />
    <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// frontend/src/App.js

import React from "react";
//import { getAuth } from "supertokens-auth-react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HomePage from "./components/Home/Home";
import LoginPage from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import CandidateList from "./components/Voting/CandidateList";
// import Results from "./components/Voting/Results";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  //const auth = getAuth();

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
};

export default App;

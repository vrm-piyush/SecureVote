// frontend/src/App.js

import React, { useEffect } from "react";
//import { getAuth } from "supertokens-auth-react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import "./App.css";

const App = () => {
  //const auth = getAuth();
  useEffect(() => {
    // Prevent scroll restoration on reload
    window.history.scrollRestoration = "manual";

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;

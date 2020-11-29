import React, { useState, useEffect } from "react";
import "./styles.css";

// Use dotenv to access environment variables in the app
require('dotenv').config();

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchDataFromApi() {
      const request = await fetch("");
    }

    fetchDataFromApi();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

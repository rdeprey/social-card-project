import React from "react";
import "./styles.css";
import NewsWrapper from "./Components/NewsWrapper";

// Use dotenv to access environment variables in the app
require('dotenv').config();

export default function App() {

  return (
    <div className="App">
      <NewsWrapper />
    </div>
  );
}

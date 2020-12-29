import React, { useState, useEffect } from "react";
import "./styles.css";
import NewsWrapper from "./Components/NewsWrapper";

// Use dotenv to access environment variables in the app
require('dotenv').config();

export default function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <NewsWrapper />
    </div>
  );
}

import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Hello from './Page/Hello';

function App() {
  const callApi = async() => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      test
    </div>
  );
}

export default App;